import React, { useContext } from "react";
import "../stylesheet/Warehouse.css";
import Tilt from "react-parallax-tilt";
import { MyContext } from "../App";
import { fetchreq, walletTransaction } from "../Helper/fetch";
import { useNavigate } from "react-router-dom";
const Warehouse = ({warehouse}) => {
  const {planId,user,setUser}=useContext(MyContext);
  const nav = useNavigate();

const handleSelect = async ()=>{
  
  if(await walletTransaction(planId.Price,warehouse.Wid,"buy Plan",user,setUser,nav)){
    const body = {
      cid:user.Cid,
      pid:planId.Pid,
      wid:warehouse.Wid,
      paid:planId.Price,
      renew:planId.duration==0?-1:planId.duration,
      fs: planId.storage
    }
    const dt = await fetchreq("POST",'buyplan',body);
    if(dt){
      if(user.Status==0){
        await fetchreq("GET",`upadateUserStatus/${user.Cid}/1`,{});
      }
      nav("/dashboard");
    }
    else{
      alert("something went wrong");
    }
  }
}
  return (
    <Tilt
      glareEnable={true}
      glareColor="#ebe7ee3f"
      glarePosition="all"
      tiltMaxAngleX="12"
      tiltMaxAngleY="12"
      className="parallax-effect-glare-scale-wh bggg "
    >
      <div className="warehouse-card">
        {/* <div className="wh-img-ol">
          <img src={a.image} alt={warehouse.Name} className="warehouse-image" />
        </div> */}
        <div className="w-data">
          <h3 className="warehouse-name">{warehouse.Name}</h3>
          <p className="warehouse-details">
            <strong>Address:</strong> {warehouse.Address}<br />
            <strong>Strit:</strong> {warehouse.Address2}<br />
            <strong>Landmark:</strong> {warehouse.Landmark}<br />
            <strong>City:</strong> {warehouse.City}<br />
            <strong>Pincode:</strong> {warehouse.pincode}<br />
            <strong>State:</strong> {warehouse.State}<br />
            <strong>Country:</strong> {warehouse.Country}<br />
            <strong>Capacity:</strong> {warehouse.Capacity}<br />
          </p>
        </div>
        <button className="btn btn-b" onClick={handleSelect}>
          Select {planId.Price!=0 && "And Pay from Wallet"}
        </button>
      </div>
    </Tilt>
  );
};

export default Warehouse;
