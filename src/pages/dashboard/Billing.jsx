import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { fetchreq, getDate, walletTransaction } from '../../Helper/fetch';
import BillHistory from '../../components/BillHistory';
import PlanPage from '../Plan/PlanPage';

function Billing() {
    const {user,setUser,wh,isLogin}=useContext(MyContext);
    const [isload,setIsLoad]=useState(false);
    const [amount,setAmount]=useState(0);
    const [pc,setPc]=useState(null);
    const [dt,setDt]=useState(null);
    const [endDt,setEndDt]=useState("");
    const [dtl,setDtl]=useState(0);
    const [ic,setIc]=useState(0);
    const [bills,setBills]=useState(null);
    const [ispayment,setIsPayment]=useState(false);
    const [up,setUp]=useState(false);
    const [activeBillHistory, setActiveBillHistory] = useState(null); // New state for toggling specific BillHistory
    const nav = useNavigate();
    
    const loadDetails = async ()=>{
        const dt2 = await fetchreq("GET",`getPlan/${user?.Cid}/${wh?.Wid}`,{});
        const pc2 = await fetchreq("GET",`getPc/${user?.Cid}/${wh?.Wid}`,{});
        const pc3 = pc2.result;
        if(pc3 && pc3.length > 0){
            setPc(pc2.result);
            setDt(dt2.result);
            const planDays= pc2.result[0]?.planDays;
            // const fsd =await pc3[0].freeStorage;
            const date =await pc3[0].startDate;
            const currentDate = new Date();
            const isoString = currentDate.toISOString();
            const date1 = new Date(date);
            const date2 = new Date(isoString);
            const differenceInMilliseconds = date2 - date1;
            const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
            const daystillnow = Math.round(differenceInDays);
            const endDate = new Date(date1);
            endDate.setDate(date1.getDate() + planDays);
            const endDateString = endDate.toISOString();
            setEndDt(endDateString);
            setDtl(daystillnow);
            // const pdays = daystillnow-fsd;
            // const mul = dt2.result[0].storage_price;
            const getcount = await fetchreq("GET",`wdcountforprice/${wh?.Wid}/${user?.Cid}`,{});
            const cnt  =await getcount?.result[0]?.count;
            setIc(cnt);
            setIsLoad(true);
        }else{
            alert("somethig went wrong");
        }
        
    }
    const loadBills = async ()=>{
        const dt = await fetchreq("GET",`getBills/${user?.Cid}/${wh?.Wid}`,{});
        if(dt){
            const bs = dt.result;
            setBills(bs);
            const totalAmount = bs.reduce((total, b) => total + b.amount, 0);
            setAmount(totalAmount);
        }else{
            setBills([]);
            setAmount(0);
        }
    }
    const payment = async (Bid,amount)=>{
        setIsPayment(true);
        const ret = await walletTransaction(amount,wh?.Wid,`Bill payment for warehouse ${wh?.Name} `,user,setUser,nav);
        if(ret){ 
            const dt = await fetchreq("POST","makePayment",{Bid,amount})
            if(dt){
                await fetchreq("POST","updatebillAmount",{Bid,amount});
                alert("payment Success");
                setActiveBillHistory(null);
                loadBills();
            }else{
                alert("some error")
            }

        }else{ 
            alert("payment Canceled");
        }
        setIsPayment(false);
    }
    const paymentall = async ()=>{
        setIsPayment(true);
        const ret = await walletTransaction(amount,wh?.Wid,`Bill payment for warehouse ${wh?.Name} `,user,setUser,nav);
        if(ret){ 
            const dt = await fetchreq("POST","allPayments",{bills});
            if(dt){
                // const BidsArray = bills.map(bill => bill.Bid);
                await fetchreq("GET",`updateAllBillAmount/${user?.Cid}/${wh.Wid}`,{});
                alert("payment Successfull...");
                setActiveBillHistory(null);
                loadBills();
            }else{
                alert("some error")
            }

        }else{ 
            alert("payment Canceled");
        }
        setIsPayment(false);
    }
    useEffect(()=>{
        if(isLogin){
            loadBills();
            loadDetails();
        }else{
            nav("/");
        }
    },[])
  return (
    <div >
        { !ispayment &&  (isload ? <div style={{overflowY:'scroll',height:'100dvh'}}>
            <div id="bal">
                <h2 style={{color:'white'}}>Warehouse : {wh?.Name}</h2>
                <div className="bal-lin">
                    <h2>Total Bill Amount: ${amount}</h2>
                    <button  disabled={amount==0} onClick={paymentall} className='btn btn-o'>Pay ${amount} </button>
                </div>
            </div>
            <h3>plan Details</h3>
            <div style={{backgroundColor:'gray',margin:'20px',padding:'20px'}}>
                <p>startDate: {getDate(pc[0].startDate)}</p>
                <p>Duration: {pc[0]?.planDays==-1 ? "No limit":`${pc[0]?.planDays} Days`}</p>
                <p>End Date: {pc[0]?.planDays==-1 ? "No limit":getDate(endDt)}</p>
                <p>Used: {dtl} Days </p>
                <p>Remaining : {pc[0]?.planDays==-1 ? "No limit": `${pc[0]?.planDays-dtl} Days` }</p>
                <p>Total FreeStorage: {pc[0].freeStorage} Days</p>
                <p>Remaining FreeStorage: { dtl > pc[0].freeStorage? "0" : (parseInt(pc[0].freeStorage)-parseInt(dtl)) } Days</p>
                <p>Paid Used: {pc[0].freeStorage>dtl?  "0":dtl-pc[0].freeStorage} Days</p>
                <p>Price Per Item per Day: ${dt[0].storage_price} </p>
                <p>Total Item In WareHouse : {ic}</p>
                {/* <p>Total Bill: ${amount}</p> */}
                {(pc[0]?.planDays==-1 || dtl==pc[0]?.planDays) && <button className='btn-o btn' onClick={()=>{setUp(!up)}}>Upgrade With Paid plans</button>}
                {up && <PlanPage  inBill={true}/>}
            </div>
            <div>
                <h3>Your Bills till Yesterday </h3>
                {bills ? bills.map((b,index)=>{
                    return <div style={{backgroundColor:'gray',margin:'20px',padding:"20px"}} key={b.Bid}>
                        <h4>{b.title}</h4>
                        <p>Bill Number: {b.Bid}</p>
                        <p>ProductId: {b.Did}</p>
                        <p>Pending Amount: {b.amount}</p>
                        <p>time: {getDate(b.time)}</p>
                        <p>Status: {b.amount!=0?(b.status?"Paid":"Pending"):"Paid"}</p>     
                        {b.amount!=0 && <button onClick={()=>{
                            payment(b.Bid,b.amount)
                        }} className='btn  btn-b'>Pay ${b.amount}</button>}{" "}
                        <button onClick={() => setActiveBillHistory(activeBillHistory === b.Bid ? null : b.Bid)} className='btn  btn-b' >Payment History</button>
                        <br /><span> Note: Please Verify ProductId of Item before payment </span>
                        {activeBillHistory === b.Bid && <BillHistory Bid={b.Bid}/>}
                    </div>
                }): <p>Loading...</p>
                }
            </div>
        </div>: <h1 >Loading...</h1>) }
        {ispayment && <div>
            <h2>Payment Proceding...</h2>
            <p>for smoth payment Please Do not refresh the page...</p>
        </div> }
        {/* {up && <div style={{height:'100dvh',overflowY:'scroll'}}><PlanPage  inBill={true}/></div> } */}
    </div>
  )
}

export default Billing