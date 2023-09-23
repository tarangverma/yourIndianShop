import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App';
import { fetchreq, getDate, walletTransaction } from '../Helper/fetch';
import { useNavigate } from 'react-router-dom';

function DispachRequest() {
    const {user,wh,isLogin,setUser}=useContext(MyContext);
    const [dr,setDr]=useState(null);
    const [yrpkt,setYrpkt]=useState(null);
    const [showpkt,setShowpkt]=useState(null);
    const [pid,setPid]=useState(null);
    const [sp,setSp]=useState(null);
    const nav = useNavigate()
    const loadRequsts = async  ()=> {
        const dt = await fetchreq("GET",`getDispachReq/${user.Cid}/${wh.Wid}`,{})
        dt?setDr(dt.result):setDr([]);
        const dt2 = await fetchreq("GET","getSp",{});
        dt2?setSp(dt2.result):setSp([]);
    }
    const loadpkt = async ()=>{
      const dt = await fetchreq("GET",`packages/${user.Cid}/${wh.Wid}`,{})
      dt?setYrpkt(dt.result):setYrpkt([])
    }
    const selectSpAndPay =async (pd,s)=>{
      const dt = await walletTransaction(pd.payment,null,"Curior Payment",user,setUser,nav);
      if(dt){
        const qry = `addSptoPackets/${pd.Pid}/${s.Sp}`;
        console.log(qry);
        const res = await fetchreq("GET",qry,{});
        if(res){
          alert("Payment Done Successfully...");
          nav("/warehousedata");
        }else{
          alert("something Went Wrong...");
        }
      }else{
        alert("payment Cancled...")
      }
    }
    useEffect(()=>{
        if(isLogin){
            loadRequsts();
        }else{
            nav("/");
        }
    },[])
  return (
    <div style={{height:'100dvh' ,overflowY:'scroll'}}>
      {!showpkt && <div>
        <div className="t-title">
          <span id="blue">Dispatch&nbsp;</span>
          <span id="org">Requests</span>
        </div>
        <button className='btn btn-b' onClick={()=>{setShowpkt(true);loadpkt()}}>Your Packets to Dispach</button>
        {(dr && dr.length != 0) &&
          dr.map((d) => {
            const time = getDate(d.Time);
            return (
              <div id="drrr">
                <p>ShipmentId: {d.Sid}</p>
                <p>ProductId: {d.Did}</p>
                <p>Name: {d.Name}</p>
                <p>Address Line1: {d.Address}</p>
                <p>Address Line2: {d.Address2}</p>
                <p>City: {d.City}</p>
                <p>State: {d.State}</p>
                <p>Country: {d.Country}</p>
                <p>pincode: {d.pincode}</p>
                <p>Time: {time}</p>
                <p>Email: {d.Email}</p>
                <p>phoneNo: {d.phoneNo}</p>
                <p>Delivery Instruction: {d.Dinstruct}</p>
                <p>Status: {d.Status == 0 ? "Not seen" : "Dispached"}</p>
              </div>
            );
        }) }
        {(dr && dr.length == 0) && <p>No data found</p> }
        {!dr && <p>Loading...</p> }
      </div>}
      {showpkt && <div>
        <div className="t-title">
          <span id="blue">Your&nbsp;</span>
          <span id="org">Packets</span>
        </div>
        <button className='btn btn-b' onClick={()=>{setShowpkt(false)}}>Dispach Request</button>
        {!yrpkt && <h3>Loading...</h3> }
        {(yrpkt && yrpkt.length == 0) && <p>No data found</p> }
        {yrpkt && yrpkt.length!=0 && yrpkt.map((p)=>{
          return <div key={p.Pid} style={{margin:"20px",padding:"20px",backgroundColor:'gray'}}>
            <p>packageId: {p.Pid}</p>
            <p>time: {getDate(p.time)}</p>
            <p>status: {p.status==0?"pending":"Dispatched"}</p>
            <p>Hight: {p.height} Cm</p>
            <p>Width: {p.width} Cm</p>
            <p>Length: {p.length} Cm</p>
            <p>Wight: {p.wight} Kg</p>
            <p>Payment: ${p.payment}</p>
            {p.Sp && <p>Curiour Service ProviderId: {p.Sp}</p> }
           <p>Status: {p.status?"Dispatched":(p.Sp?"Curior Service Selected":"In procedure...")}</p> 
            { !p.Sp && pid!=p.Pid  && <button className='btn-o btn' onClick={()=>{setPid(pid?null:p.Pid)}}>{pid?"hide ":"Select "}Curior Service Provider</button>}
            {pid==p.Pid && <>
              <h3>Select Curiour Service and Pay ${p.payment}</h3>
              {sp && sp.map((s)=>(
                <div key={s.Sp} onClick={()=>selectSpAndPay(p,s)} className='btn-b' style={{border:'2px solid orange',display:'inline-block',cursor:'pointer',marginRight:'20px'}}>
                  <img src={s.logo} alt={s.Name} width="100px" />
                  <p style={{textAlign:'center'}}>{s.Name}</p>
                </div>
              ))}
            </> }
          </div>
        })}
      </div> }
    </div>
  );
}

export default DispachRequest;