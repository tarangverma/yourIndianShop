import React from "react";
import "../../stylesheet/dashboard/Dashboard.css";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Dashboard = () => {
  return (
    <div id="dash-cont">
      <div id="dash">
        <div id="ds1">
          <div className="ol-pic">
            <div className="ds-top">
              <div className="ds-left">
                <small>Welcome</small>
                <br />
                <h1>Priyansh Khunt</h1>
              </div>
              <div className="ds-right">
                <div className="btn btn-b">Upgrade your membership</div>
              </div>
            </div>
            <div className="ds-bot">
              <div className="ds-left">
                <div className="row">
                  <div className="ico">
                    <WarehouseIcon />
                  </div>
                  <div className="ds-info">
                    Warehouse Number
                    <br />
                    653453981
                  </div>
                </div>
              </div>
              <div className="ds-right">
                <div className="row">
                  <div className="ico ico-g">
                    <AccountBalanceWalletIcon />
                  </div>
                  <div className="ds-info">
                    Wallet Balance
                    <br />$ 12.7
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div id="ds2">
          <div className="ds-c">
            <div className="ico ico-v">
              <FlightTakeoffIcon />
            </div>
            <small>Shipment</small>
            <big>7 packages</big>
          </div>{" "}
          <div className="ds-c">
            <div className="ico ico-g">
              <WarehouseIcon />
            </div>
            <small>Lockers</small>
            <big>19 packages</big>
          </div>
          <div className="ds-c">
            <div className="ico ico-r">
              <LocalShippingIcon />
            </div>
            <small>Delivered </small>
            <big>23 packages</big>
          </div>
        </div>
        <div id="ds3">
          {/* <div className="t-title">
            <span id="blue">Start </span>
            <span id="org">Shopping </span>
            <span id="blue">Now</span>
          </div> */}
          <div className="work-dia">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/work-dia2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="vAdd"></div>
    </div>
  );
};

export default Dashboard;
