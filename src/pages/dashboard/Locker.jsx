import React, { useContext, useEffect, useState } from "react";
import Warehouse from "../../components/Warehouse2";
import { fetchreq } from "../../Helper/fetch";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";


const Locker = () => {
  const [warehouse,setWareHouses]=useState([]);
  const {user,isLogin}=useContext(MyContext);
  const nav = useNavigate()
  const handleSelect = (id) => {
    // Handle warehouse selection here, e.g., store the selected warehouse ID in state.
    console.log(`Selected warehouse ID: ${id}`);
  };
  const getWarehose = async ()=>{
    const dt = await fetchreq('GET',`Warehouse/${user?.Cid}`,{})
    dt?setWareHouses(dt?.result):setWareHouses([]);
  }
  useEffect(()=>{
    if(!isLogin){
      nav("/")
    }else{
      getWarehose()
    }
  },[])
  return (
    <>
      <center>
        <div className="plan-page-title">
          <span id="blue">Your </span>
          <span id="org">WareHouse</span>
        </div>
      </center>
      <div className="warehouse-container locker">
        {warehouse.map((warehouse) => (
          <Warehouse
            key={warehouse.Wid}
            warehouse={warehouse}
          />
        ))}
      </div>
    </>
  );
};

export default Locker;
