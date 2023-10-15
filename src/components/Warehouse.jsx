import React, { useContext, useState } from "react";
import "../stylesheet/Warehouse.css";
import { MyContext } from "../App";

import { fetchreq, walletTransaction } from "../Helper/fetch";
import { useNavigate } from "react-router-dom";
const Warehouse = ({ warehouse }) => {
  const { planId, user, setUser } = useContext(MyContext);
  const nav = useNavigate();
  const [ispayment,setIspayment]=useState(false);
  const [final,setFinal]= useState(planId.Price);
  const [cc,setCc]=useState(null);
  const [ca,setCa]=useState(false);
  const handleSelect = async () => {
    if (
      await walletTransaction(
        final,
        warehouse.Wid,
        "buy Plan",
        user,
        setUser,
        nav
      )
    ) {
      const body = {
        cid: user.Cid,
        pid: planId.Pid,
        wid: warehouse.Wid,
        paid: planId.Price,
        renew: planId.duration == 0 ? -1 : planId.duration,
        fs: planId.storage,
      };
      console.log("free stor", planId.storage);
      console.log(planId);
      const dt = await fetchreq("POST", "buyplan", body);
      if (dt) {
        if (user.Status == 0) {
          await fetchreq("GET", `upadateUserStatus/${user.Cid}/1`, {});
        }
        nav("/dashboard");
      } else {
        alert("something went wrong");
      }
    }
  };
  const handleSelectfirst = async ()=>{
    const price = planId.Price;
    setIspayment(true);
  }
  
  const applyCoupen = async ()=>{
    if(!cc || cc?.length<12){
      alert("invalid Coupen Code");
      return;
    }else{
      const dt = await fetchreq("GET",`CoupenByCode/${cc}`,{});
      if(dt && dt.result.length!=0){
        const coupen = dt.result[0];
        let curamt = final;
        const disamt = coupen.amount;
        const minamount = coupen.minamount;
        const maxamount = coupen.maxamount;
        if(coupen.isPercentage==1){
          const discoundableamt= curamt*disamt/100;
          if(maxamount<=discoundableamt){
            curamt=curamt-maxamount;
          }else{
            curamt= curamt-discoundableamt;
          }
        }else{
          if(curamt>=minamount){
            curamt=curamt-disamt;
          }
        }
        setFinal(curamt);
        setCa(true)
      }else{
        alert("invalid Coupen")
      }
    }
  }
  return (
    <div className="warehouse-card">
      {/* <div className="wh-img-ol">
          <img src={a.image} alt={warehouse.Name} className="warehouse-image" />
        </div> */}
      <div className="w-data">
        <h3 className="warehouse-name">{warehouse.Name}</h3>
        <p className="warehouse-details">
          <strong>Address:</strong> {warehouse.Address}
          <br />
          <strong>Strit:</strong> {warehouse.Address2}
          <br />
          <strong>Landmark:</strong> {warehouse.Landmark}
          <br />
          <strong>City:</strong> {warehouse.City}
          <br />
          <strong>Pincode:</strong> {warehouse.pincode}
          <br />
          <strong>State:</strong> {warehouse.State}
          <br />
          <strong>Country:</strong> {warehouse.Country}
          <br />
          <strong>Capacity:</strong> {warehouse.Capacity}
          <br />
        </p>
      </div>
      {ispayment  && <div style={{position:'absolute',top:'0',left:'0',width:'100dvw',height:"100dvh",padding:'200px',backgroundColor:'white',border:'5px solid red'}}>
        <button className="btn-r btn" onClick={()=>setIspayment(false)}>Cancel payment</button>
        <h1>Payment Page</h1>
        <p>Payment Amount: ₹{planId.Price}</p>
        <p>WareHouse: {warehouse.Name}</p>
        { !ca && final!=0 &&  <><input value={cc} onChange={(e)=>setCc(e.target.value)} type="text" placeholder="Enter Coupen Code" />
        <button className="btn-g btn" onClick={applyCoupen}>Apply Coupen</button></>}
        <p style={{fontWeight:'bold'}}>final Payment amount : ₹{final}</p>
        <button className="btn btn-b" onClick={handleSelect}>{final<=0?"Proceed To Select":"Proceed to Payment"}</button>
      </div>}
      <button className="btn btn-b" onClick={handleSelectfirst}>
        Select {planId.Price != 0 && `And Pay from Wallet ₹${planId.Price}`}
      </button>
    </div>
  );
};

export default Warehouse;
