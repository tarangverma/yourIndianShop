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
      <div id="dp-pl">
        <center>
          <div className="plan-page-title">
            <div id="pur">Our Plans</div>

            {/* <div id="pur"></div> */}
          </div>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            exercitationem laborum.
          </p>
        </center>
        <div id="plan-cards">
          {plans.length != 0 &&
            plans.map((plan, index) => (
              <PlanCard state={false} key={index} plan={plan} />
            ))}
        </div>
      </div>{" "}
      <PlanCompTable />
    </>
  );
};

export default DispPl;
