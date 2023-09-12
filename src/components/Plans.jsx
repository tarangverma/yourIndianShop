import React, { useContext, useEffect } from "react";
import "../stylesheet/Plans.css";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

const Plans = ({ plan,state }) => {
  const {setPlanId,isLogin,user}=useContext(MyContext);
  const nav  = useNavigate();
  const choseplan = ()=>{
    const given = {
      Pid: plan.Pid,
      duration: plan.duration,
      Price: plan.Price
    }
    if(user?.Wallete>=plan?.Price){
      setPlanId(given);
      setTimeout(() => {
        nav('/select-warehouse');
      }, 1000);
    }else{
      alert("You have not Sufficient Amount to buy plan Add Balace to the Wallete...");
      nav("/Walete")
    }
  }
  const planDetails = [
    `Consolidation: Pay Rs ${plan.consolidation} per shipment.`,
    `Storage: Up to ${plan.storage} days is free, after which it's Rs 75 per item per day.`,
    `Photo: ${plan.photo} photos are free, detailed photo service up to 10 items costs Rs 400.`,
    `Package Return: Rs ${plan.package_ret==null?"50":plan.package_ret} per item.`,
    `Warehouse Pickup: Rs ${plan.warehouse_pic}.`,
    `Scanned Copies of Documents: Rs ${plan.scane_copy==null?"80":plan.scane_copy} per page.`,
    `Shipping Address: Up to ${plan.shippingAddress==null?"5":plan.shippingAddress} addresses.`,
    `Real-time Tracking: ${plan.tracking==null?"Free":plan.tracking}.`,
    `Personal Shopper: 7% of the item value (exclusive of all charges).`,
    `Receive Parcels: ${plan.recParcel}.`,
    `liquid clearence charge: ${plan.liquidCharge==null ? "10":plan.liquidCharge}% (EXCLUSIVE OF ALL OTHER CHARGES)`
    // `Indian Virtual Shipping Address & Personal Locker: Free.`,
    // `Set Up a Local Hub for Your Business: Free.`,
    // `Assisted Purchase: Actual charges + other charges.`,
];
  useEffect(()=>{
    if(!isLogin && state){
      nav("/");
    }
  },[])
  return (
    <div id="pl-ol">
      <div className="plan-card">
        <div id="pc-top">
          <div className="plan-name">{plan.Name}</div>
          <span className="plan-price">
            <small>₹ </small>
            {plan.Price}
            <small> .00</small>
          </span>
        </div>
        <div id="pc-mid">
          <ul>
            {planDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        {state&& <div id="pc-bot">
          <div className="choose-plan">
            <button className="btn btn-b" onClick={choseplan}>Choose Plan</button>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Plans;
