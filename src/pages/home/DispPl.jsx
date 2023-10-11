import React, { useEffect, useState } from "react";
import PlanCard from "../../components/Plans";
import { fetchreq } from "../../Helper/fetch";
import PlanCompTable from "../../components/PlanCompTab";

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
    <>
      <img src={"/home/festiv.jpg"} width={1700} alt="no"></img>
      <div id="dp-pl">
      
        <div id="plan-cards">
          {plans.length != 0 &&
            plans.map((plan, index) => (
              <PlanCard state={false} key={index} plan={plan} />
            ))}
        </div>
      </div>{" "}
     
      
    </>
  );
};

export default DispPl;
