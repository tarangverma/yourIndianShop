import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App';
import { fetchreq, getDate } from '../Helper/fetch';
import { useNavigate } from 'react-router-dom';

function DispachRequest() {
    const {user,wh,isLogin}=useContext(MyContext);
    const [dr,setDr]=useState([]);
    const nav = useNavigate()
    const loadRequsts = async  ()=> {
        const dt = await fetchreq("GET",`getDispachReq/${user.Cid}/${wh.Wid}`,{})
        dt?setDr(dt.result):setDr([])
    }
    useEffect(()=>{
        if(isLogin){
            loadRequsts()
        }else{
            nav("/");
        }
    },[])
  return (
    <div>DispachRequest
        {dr.length!=0 && dr.map((d)=>{
            const time = getDate(d.Time)
            return <div style={{margin:"20px",padding:"20px",border:"2px solid orange"}}>
                <p>ProductId: {d.Did}</p>
                <p>Name: {d.Name}</p>
                <p>Address Line1: {d.Address}</p>
                <p>Address Line2: {d.Address2}</p>
                <p>City: {d.City}</p>
                <p>State: {d.State}</p>
                <p>Country: {d.Country}</p>
                <p>pincode: {d.pincode}</p>
                <p>Time: {time}</p>
                <p>Email: {d.Email}</p>
                <p>phoneNo: {d.phoneNo}</p>
                <p>Delivery Instruction: {d.Dinstruct}</p>
                <p>Status: {d.Status==0?"Not seen":"Dispached"}</p>
            </div>
        })}
    </div>

  )
}

export default DispachRequest;