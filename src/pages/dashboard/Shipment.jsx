import React, { useContext, useEffect, useState } from "react";
import "../../stylesheet/dashboard/DispatchRequestForm.css";
import { MyContext } from "../../App";
import { fetchreq, walletTransaction } from "../../Helper/fetch";
import { useNavigate } from "react-router-dom";

function Shipment() {
  // State variables to store form data
 
  const nav = useNavigate()
  const {did,isLogin,user,setUser,wh}=useContext(MyContext);
  const [termsAgreed,setTermsAgreed]=useState(false);
  const [run,setRun]=useState(false);
  const [pland,setPland]=useState(null);
  const [form, setForm] = useState({
    Did:did,
    fullName: null,
    email: null,
    ad: null,
    ad2: null,
    phone: null,
    city: null,
    state: null,
    country: null,
    pincode: null,
    Di: null,
    Sp: 1,
  });

  // Handle form submissions
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Combine all form data into one object
    console.log(form)
    const allKeysAreNotNull = Object.keys(form).every(key => (form[key] !== null && form[key]!==""));
    if(!run && termsAgreed && allKeysAreNotNull){
      setRun(true)
      if(await walletTransaction(pland?.warehouse_pic,wh?.Wid,"Dispach Request",user,setUser,nav)){
        const dt = await fetchreq("POST","addDispachReq",{form:form});
        if(dt){
          alert("Request Made succesfully...");
          setForm(null);
          nav("/warehousedata");
        }else{
          alert("something went wrong");
        }
      }
    }else{
      alert("fill All details...");
    }
    setRun(false);
  };
  const loadPlanDetails = async ()=>{
    const dt = await fetchreq("GET",`getPlan/${user?.Cid}/${wh?.Wid}`,{});
    dt? setPland(dt.result[0]) : setPland(null);
  }
  useEffect(()=>{
    if(!isLogin){
      nav("/")
    }else{
      loadPlanDetails();
    }
  },[])
  return (
    <div id="dash-dreq" className="shipment-form">
      <h2>
        <span id="blue">Shipment </span>
        <span id="org">Request</span>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Information */}
        <h1>Reciver Details</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e)=>{setForm({...form,fullName:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder=" Email Address"
            value={form.email}
            onChange={(e)=>{setForm({...form,email:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e)=>{setForm({...form,phone:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address Line 1"
            value={form.ad}
            onChange={(e)=>{setForm({...form,ad:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address Line 2"
            value={form.ad2}
            onChange={(e)=>{setForm({...form,ad2:e.target.value})}}
          />
        </div>
        

        
       
        
        <div className="form-group">
          <input
            type="text"
            placeholder="City "
            value={form.city}
            onChange={(e)=>{setForm({...form,city:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="State"
            value={form.state}
            onChange={(e)=>{setForm({...form,state:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={(e)=>{setForm({...form,country:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Postal Code" 
            value={form.pincode}
            onChange={(e)=>{setForm({...form,pincode:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Delivery Instruction" 
            value={form.Di}
            onChange={(e)=>{setForm({...form,Di:e.target.value})}}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button disabled={run} className="btn btn-b" type="submit">
            { !run ? (pland ? (pland?.warehouse_pic==0?"Submit Request":`Submit Request and pay ${pland?.warehouse_pic}`): "..."): <p>Please Wait...</p> }
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shipment;
