import React, { useContext, useEffect, useState } from 'react'
import { fetchreq, getDate } from '../../Helper/fetch';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const {DateTime} = require('luxon');

function PAR() {
    const imgurl = process.env.REACT_APP_URL;
    const [par,setPar]=useState(null);
    const {user,wh,isLogin}=useContext(MyContext);
    const nav = useNavigate()
    const getReq = async ()=>{
        const dt = await fetchreq("GET",`getPAR/${user?.Cid}/${wh?.Wid}`,{});
        dt?setPar(dt.result):setPar([])
    }
    useEffect(()=>{
        if(isLogin){
            getReq()
        }else{
            nav("/")
        }
    },[])
  return (
    <div id="par-ct">
      <div className="t-title">
        <small>
          <span id="blue"> Your Product Acceptance Requests in</span>&nbsp;
          <span id="org">{wh?.Name}</span>
        </small>
      </div>
      <br />

      <div id="par-cards-box">
        {par && par.length != 0 &&
          par.map((r) => {
            const fdt = getDate(r.time);

            return (
              <div key={r.Rid}>
                <div className="wh-img-ol">
                  <img
                    src={`${imgurl}/${r.proof}`}
                    alt="Image"
                    className="warehouse-image"
                  />
                </div>
                <div className="par-da">
                  <p>
                    {" "}
                    <span id="org">Name:</span>
                    {r.productName}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Desc:</span>
                    {r.Description}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Status:</span>
                    {r.Verify == 0 ? "Not Verify" : "Verify"}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Date:</span>
                    {fdt}
                  </p>
                </div>
              </div>
            );
        }) }
        {par && par.length ==0 && <p>No data found</p> }
        {!par && <p>Loading...</p> }
      </div>
    </div>
  );
}

export default PAR