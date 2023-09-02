import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Curiours";
import "../../stylesheet/dashboard/Shop.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
import { MyContext } from "../../App";
const Shop = () => {
  const {user,wh,isLogin}=useContext(MyContext);
  const [wd,setWd]=useState([]);
  const nav = useNavigate();
  const [selectP,setSelectP]=useState([]);
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  const loadCouriers = async ()=>{
    const dt = await fetchreq("GET",`getWareHouseData/${wh?.Wid}/${user?.Cid}`,{});
    setWd(dt?.result);
  }
  
  const selectProduct = (Did)=>{
    if(selectP.includes(Did)){
      let ind =  selectP.indexOf(Did)
      setSelectP([...selectP.splice(0,ind),...selectP.splice(ind+1,selectP.length)])
    }else{
      setSelectP([...selectP,Did]);
    }
  }
  const dispactchAll= ()=>{
    
  }
  useEffect(()=>{
    if(isLogin){
      loadCouriers();
    }else{
      nav("/");
    }
  },[])
  return (
    <div id="shop-sec">
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="t-title dark">Your Curiors</div>
        </center>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <Link className="btn btn-b" to="/dashboard/product-acceptance">Add Products Acceptace Request</Link>
        <Link className="btn btn-b" to="/PAR">Your Product Acceptace Request</Link>
        <Link className="btn btn-b" to="/DispachRequests">Your Dispach Requests</Link> 
        <Link className="btn btn-b" to="/ReturnRequests">Your Return Requests</Link> 
      </div>
      <div id="displayProducts">
        {wd.map((e) => {
          const isselect = selectP.includes(e.Did);
          return (
            <div style={{border:`${selectP.includes(e.Did)?"3px solid #FF7D44":"none"}`}}>
              <Product  wd={e} selectProduct={selectProduct} isselect={isselect} />
            </div>
          );
        })}
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        { selectP.length>1 && <button className="btn btn-b" onClick={dispactchAll}>Dispatch all selected</button>}
      </div>
    </div>
  );
};

export default Shop;
