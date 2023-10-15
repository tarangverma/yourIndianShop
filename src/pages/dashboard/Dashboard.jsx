import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../stylesheet/dashboard/Dashboard.css";
import "../../stylesheet/dashboard/Dmq.css";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
const Dashboard = () => {
  const { user, isLogin } = useContext(MyContext);
  const [pktinfo,setPktinfo]=useState(null);
  const nav = useNavigate();
  const loadpkt= async ()=>{
    const dt = await fetchreq("GET",`getpktinfo/${user?.Cid}`,{});
    dt?setPktinfo(dt.result[0]):setPktinfo(null);
  }
  useEffect(() => {
    if (!isLogin) {
      nav("/");
    }else{
      loadpkt()
    }
  }, []);
  return (
    <div id="dash-cont">
      <div id="dash">
        <div id="ds1">
          <div className="ol-pic">
            <div className="ds-top">
              <Link to="/dashboard/profile" className="ds-left">
                <small>Welcome</small>
                <br />
                <h1>{user?.Name}</h1>
              </Link>
              <div className="ds-right">
                <Link to="/plan" className="btn btn-b">
                  Upgrade your membership
                </Link>
              </div>
            </div>
            <div className="ds-bot">
              <div className="ds-left">
                <Link to="/dashboard/locker" className="row">
                  <div className="ico">
                    <WarehouseIcon />
                  </div>
                  <div className="ds-info">
                    Warehouses ID <br />1
                  </div>
                </Link>
              </div>
              <Link to="/Walete" className="ds-right">
                <div className="row">
                  <div className="ico ico-g">
                    <AccountBalanceWalletIcon />
                  </div>
                  <div className="ds-info">
                    Wallet Balance
                    <br /> ₹{user?.Wallete}
                  </div>
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div id="ds2">
          <div className="ds-c">
            <div className="ico ico-v">
              <FlightTakeoffIcon />
            </div>
            <small>Shipment</small>
            {pktinfo && <big>{pktinfo.Dispatched} packages</big>}
          </div>{" "}
          <div className="ds-c">
            <div className="ico ico-g">
              <WarehouseIcon />
            </div>
            <small>Locker</small>
            {pktinfo && <big>{pktinfo.Locker} packages</big>}
          </div>
          <div className="ds-c">
            <div className="ico ico-r">
              <LocalShippingIcon />
            </div>
            <small>Delivered </small>
            {pktinfo && <big>{pktinfo.Delivered} packages</big>}
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
