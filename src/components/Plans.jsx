import React from "react";
import "../stylesheet/Plans.css";

const Plans = ({ planName, planPrice, planDetails }) => {
  return (
    <div id="pl-ol">
      <div className="plan-card">
        <div id="pc-top">
          <div className="plan-name">{planName}</div>
          <span className="plan-price">
            <small>₹ </small>
            {planPrice}
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
        <div id="pc-bot">
          <div className="choose-plan">
            <button className="btn btn-b">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
