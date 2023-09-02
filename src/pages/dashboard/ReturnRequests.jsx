import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import { fetchreq, getDate } from '../../Helper/fetch';
function ReturnRequests() {
    const {user,wh,isLogin}= useContext(MyContext);
    const [dr,setDr]=useState(null);
    const nav = useNavigate()
    const loadRequsts = async  ()=> {
        const dt = await fetchreq("GET",`getReturnReq/${user?.Cid}/${wh?.Wid}`,{})
        dt?setDr(dt.result):setDr([]);
    }
    useEffect(()=>{
        if(isLogin){
            loadRequsts();
        }else{
            nav("/");
        }
    },[])
  return (
    <div>Return
        {dr && dr.length!=0 && dr.map((d)=>{
            const time = getDate(d.time)
            return <div style={{margin:"20px",padding:"20px",border:"2px solid orange"}}>
                <p>ProductId: {d.Did}</p>
                <p>Time: {time}</p>
            </div>
        })}
        {dr &&dr.length==0 && <p>No request found</p>}
    </div>
  )
}

export default ReturnRequests