import React, { useEffect, useState } from "react";
import PlanCard from "../../components/Plans";
import {fetchreq} from "../../Helper/fetch"

const PlanPage = ({inBill}) => {
  const [plans,setPlans]=useState([]);

  const loadplans = async ()=>{
    const pl = await fetchreq("GET","plans",{});
    pl? setPlans(pl.result): setPlans([])
  }
  useEffect(()=>{
    loadplans();
  },[]) 
  return (
    <div>
      
      <center>
        <div className="plan-page-title">
          <span id="blue">Choose </span>
          <span id="org">Plan</span>
        </div>
      </center>
      <div id="plan-cards">
        {plans.length !=0 && plans.map((plan, index) => {
          const hide = inBill && plan.Price==0;
          return !hide && <PlanCard
            state={inBill?2:true}
            key={index}
            plan={plan}
          />
        })}
      </div>
    </div>
  );
};

export default PlanPage;
