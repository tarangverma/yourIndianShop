import React from "react";
import "./PlanCompTab.css";

const PlanCompTab = () => {
  return (
    <div className="plan-table-container">
      <table className="plan-table">
        <thead>
          <tr>
            <th></th>
            <th>FREE</th>
            <th>Half Yearly (₹2499)</th>
            <th>Yearly (₹4499)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CONSOLIDATION</td>
            <td>₹399/SHIPMENT</td>
            <td>free</td>
            <td>free</td>
          </tr>
          <tr>
            <td>STORAGE</td>
            <td>25 DAYS (after 25 days ₹75 per item per day)</td>
            <td>30 DAYS (after 30 days ₹75 per item per day)</td>
            <td>40 days (after 40 days ₹75 per item per day)</td>
          </tr>
          <tr>
            <td>PHOTO</td>
            <td>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400)</td>
            <td>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)</td>
            <td>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)</td>
          </tr>
          <tr>
            <td>PACKAGE RETURN</td>
            <td>₹50 PER ITEM</td>
            <td>free</td>
            <td>free</td>
          </tr>
          <tr>
            <td>Warehouse Pickup</td>
            <td>₹400</td>
            <td>free</td>
            <td>free</td>
          </tr>
          <tr>
            <td>Scanned Copies of Documents</td>
            <td>₹80 per page</td>
            <td>40 per page</td>
            <td>40 per page</td>
          </tr>
          <tr>
            <td>Shipping Address</td>
            <td>upto 5</td>
            <td>unlimited</td>
            <td>unlimited</td>
          </tr>
          <tr>
            <td>Semiliquid/Liquid Clearance Charge</td>
            <td>10% (EXCLUSIVE OF ALL OTHER CHARGES)</td>
            <td>10% (EXCLUSIVE OF ALL OTHER CHARGES)</td>
            <td>10% (EXCLUSIVE OF ALL OTHER CHARGES)</td>
          </tr>
          <tr>
            <td>Real-time Tracking</td>
            <td>free</td>
            <td>free</td>
            <td>free</td>
          </tr>
          <tr>
            <td>Pe₹nal Shopper</td>
            <td>7% of item value (exclusive of all charges)</td>
            <td>5% of item value (exclusive of all charges)</td>
            <td>5% of item value (exclusive of all charges)</td>
          </tr>
          <tr>
            <td>Indian Virtual Shipping Address & Pe₹nal Locker</td>
            <td>FREE</td>
            <td>free</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Receive Parcels</td>
            <td>FREE</td>
            <td>free</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Set Up a Local Hub for Your Business</td>
            <td>FREE</td>
            <td>free</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Assisted Purchase</td>
            <td>Actual charges + other charges</td>
            <td>Actual charges + other charges</td>
            <td>Actual charges + other charges</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlanCompTab;
