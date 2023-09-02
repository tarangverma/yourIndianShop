import React, { useContext, useEffect, useState } from 'react'
import { fetchreq, getDate } from '../../Helper/fetch';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const {DateTime} = require('luxon');

function PAR() {
    const imgurl = process.env.REACT_APP_URL;
    const [par,setPar]=useState([]);
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
    <div>
        <h1> Your Product Acceptance Requests in {wh?.Name}</h1>
        <div>
            {par.length!=0 && par.map((r)=>{
                const fdt = getDate(r.time)

                return <div key={r.Rid} style={{border:'2px solid orange',margin:"20px"}}>
                    <div className="wh-img-ol">
                        <img src={`${imgurl}/${r.proof}`} alt="Image" className="warehouse-image" />
                    </div>
                    <p>Name: {r.productName}</p>
                    <p>Desc: {r.Description}</p>
                    <p>Status: {r.Verify==0?"Not Verify":"Verify"}</p>
                    <p>Date: {fdt}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default PAR