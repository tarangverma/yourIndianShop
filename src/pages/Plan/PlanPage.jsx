import React from "react";
import PlanCard from "../../components/Plans";

const PlanPage = () => {
  // Define plan data
  const plans = [
    {
      planName: "FREE Plan",
      planPrice: "0",
      planDetails: [
        "Consolidation: Pay Rs 399 per shipment.",
        "Storage: Up to 25 days is free, after which it's Rs 75 per item per day.",
        "Photo: 3 photos are free, detailed photo service up to 10 items costs Rs 400.",
        "Package Return: Rs 50 per item.",
        "Warehouse Pickup: Rs 400.",
        "Scanned Copies of Documents: Rs 80 per page.",
        "Shipping Address: Up to 5 addresses.",
        "Real-time Tracking: Free.",
        "Personal Shopper: 7% of the item value (exclusive of all charges).",
        "Indian Virtual Shipping Address & Personal Locker: Free.",
        "Receive Parcels: Free.",
        "Set Up a Local Hub for Your Business: Free.",
        "Assisted Purchase: Actual charges + other charges.",
      ],
    },
    {
      planName: "PREMIUM Plan - Half-Yearly",
      planPrice: "2599",
      planDetails: [
        "Consolidation: Free.",
        "Storage: Up to 30 days is free, after which it's Rs 75 per item per day.",
        "Photo: 3 photos are free, detailed photo service up to 10 items costs Rs 250.",
        "Package Return: Free.",
        "Warehouse Pickup: Free.",
        "Scanned Copies of Documents: Rs 40 per page.",
        "Shipping Address: Unlimited.",
        "Real-time Tracking: Free.",
        "Personal Shopper: 5% of the item value (exclusive of all charges).",
        "Indian Virtual Shipping Address & Personal Locker: Free.",
        "Receive Parcels: Free.",
        "Set Up a Local Hub for Your Business: Free.",
        "Assisted Purchase: Actual charges + other charges.",
      ],
    },
    {
      planName: "PREMIUM Plan - Yearly",
      planPrice: "4499",
      planDetails: [
        "Consolidation: Free.",
        "Storage: Up to 40 days is free, after which it's Rs 75 per item per day.",
        "Photo: 3 photos are free, detailed photo service up to 10 items costs Rs 250.",
        "Package Return: Free.",
        "Warehouse Pickup: Free.",
        "Scanned Copies of Documents: Rs 40 per page.",
        "Shipping Address: Unlimited.",
        "Real-time Tracking: Free.",
        "Personal Shopper: 5% of the item value (exclusive of all charges).",
        "Indian Virtual Shipping Address & Personal Locker: Free.",
        "Receive Parcels: Free.",
        "Set Up a Local Hub for Your Business: Free.",
        "Assisted Purchase: Actual charges + other charges.",
      ],
    },
  ];

  return (
    <div>
      <center>
        <div className="plan-page-title">
          <span id="blue">Choose </span>
          <span id="org">Plan</span>
        </div>
      </center>
      <div id="plan-cards">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            planName={plan.planName}
            planPrice={plan.planPrice}
            planDetails={plan.planDetails.slice(0, 8)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanPage;
