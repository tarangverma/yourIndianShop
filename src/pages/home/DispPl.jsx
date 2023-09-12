import React, { useEffect, useState } from "react";
import PlanCard from "../../components/Plans";
import { fetchreq } from "../../Helper/fetch";

const DispPl = () => {
  const [plans, setPlans] = useState([]);

  const loadplans = async () => {
    const pl = await fetchreq("GET", "plans", {});
    pl ? setPlans(pl.result) : setPlans([]);
  };
  useEffect(() => {
    loadplans();
  }, []);
  return (
    <div>
      <center>
        <div className="plan-page-title">
          <span id="blue">Our </span>
          <span id="org">Plan</span>
        </div>
      </center>
      <div id="plan-cards">
        {plans.length !=0 && plans.map((plan, index) => (
          <PlanCard
            state={false}
            key={index}
            plan={plan}
          />
        ))}
      </div>
    </div>
  );
};

export default DispPl;
