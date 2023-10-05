import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/Plans.css";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../Helper/fetch";
import { Link } from "react-router-dom";
const Plans = ({ plan, state }) => {
  const { setPlanId, isLogin, user, wh, setUser } = useContext(MyContext);
  const nav = useNavigate();
  const [ispro, setIspro] = useState(false);
  const choseplan = () => {
    const given = {
      Pid: plan.Pid,
      duration: plan.duration,
      Price: plan.Price,
      storage: plan.storage
    }
    if(user?.Wallete>=plan?.Price){

  
      setPlanId(given);
      setTimeout(() => {
        nav("/select-warehouse");
      }, 1000);
    } else {
      alert(
        "You have not Sufficient Amount to buy plan Add Balace to the Wallete..."
      );
      nav("/Walete");
    }
  };
  const upgradeplan = async () => {
    if (!ispro) {
      setIspro(true);
      const dt = await walletTransaction(
        plan.Price,
        wh?.Wid,
        `Upgrade plan in ${wh?.Name} `,
        user,
        setUser,
        nav
      );
      if (dt) {
        const res = await fetchreq("POST", "upgradePlan", { plan, tid: 13 });
        if (res) {
          alert("upgrade sussfully");
          nav("/warehousedata");
        } else {
          alert("Something Went Wrong...");
        }
      } else {
        alert("Payment Canceled");
      }
      setIspro(false);
    }
  };
  const planDetails = [
    `Consolidation: Rs ${plan.consolidation}`,
    `Storage: Up to ${plan.storage} days is free`,
    `After Rs 75 per item / day.`,
    // `Photo: ${plan.photo} Photos are free, detailed photo service up to 10 items costs Rs 400.`,
    `Return fees : Rs ${
      plan.package_ret == null ? "50" : plan.package_ret
    } per item.`,
    // `Warehouse Pickup: Rs ${plan.warehouse_pic}.`,
    // `Scanned Copies of Documents: Rs ${
    //   plan.scane_copy == null ? "80" : plan.scane_copy
    // } per page.`,
    // `Shipping Address: Up to ${
    //   plan.shippingAddress == null ? "5" : plan.shippingAddress
    // } addresses.`,
    `Real-time Tracking: ${plan.tracking == null ? "Free" : plan.tracking}.`,
    // `Personal Shopper: 7% of the item value (exclusive of all charges).`,
    // `Receive Parcels: ${plan.recParcel}.`,
    // `liquid clearence charge: ${
    //   plan.liquidCharge == null ? "10" : plan.liquidCharge
    // }% (EXCLUSIVE OF ALL OTHER CHARGES)`,
    // `Indian Virtual Shipping Address & Personal Locker: Free.`,
    // `Set Up a Local Hub for Your Business: Free.`,
    // `Assisted Purchase: Actual charges + other charges.`,
  ];
  useEffect(() => {
    if (!isLogin && state) {
      nav("/");
    }
  }, []);
  return (
    <div id="pl-ol">
      <div className="plan-card">
        <div id="pc-top">
          <center className="plan-price">
            ₹{plan.Price}
            {/* <small> .00</small> */}
          </center>
          <div className="plan-duretion">{plan.Name}</div>
          {/* <div className="plan-duretion"></div> */}
        </div>
        <div id="pc-mid">
          <ul>
            {planDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        {state == 0 && (
          <Link to="/signUp" className="btn btn-o">
            Buy Now
          </Link>
        )}
        {state && (
          <div id="pc-bot">
            <div className="choose-plan">
              <button
                className="btn btn-b"
                onClick={state == true ? choseplan : upgradeplan}
              >
                {ispro
                  ? "Processing..."
                  : state == true
                  ? "Choose Plan"
                  : "Upgrade Plan"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;
