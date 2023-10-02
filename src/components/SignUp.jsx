import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import "../stylesheet/SignUp.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import { fetchreq } from "../Helper/fetch";
import emailjs from "@emailjs/browser";

const SignUp = () => {
  const nav = useNavigate();
  const [otp, setOtp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mobile, setMobile] = useState("");
  const [submit, setSubmit] = useState("Continue");
  const [Address, setAddress] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [State, setState] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [code,setCode]=useState(null);
  const form = useRef();
  const sendEmail =async (e) => {
    e.preventDefault();
    if(password!=password2){
      alert("password not Matched...")
      return;
    }else if (name != "" && email != "" && password != "" && mobile != "") {
      setSubmit("Sending Verification  Mail...");
      let tempcode = Math.round(1000000 * Math.random()).toString();
      const dt = await fetchreq("POST","sendMail",{email,subject:"Verification Mail",html:`<p>Your Verification Code is ${tempcode}</p>`});
      if(dt){
        setSubmit("Submit Otp");
        setCode(tempcode); 
        setOtp(2);
        alert("email is send to Your Email");
      }else{
        alert("Something Went Wrong...");
        setSubmit("Continue");
      }
     
    } else {
      alert("please Fill all Details");
    }
  };

  const submitOTP = () => {
    console.log(code + " " + inputOTP);
    if (code == inputOTP) {
      setOtp(true);
    } else {
      alert("invalid code...");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (submit === "Creating...") {
      return;
    }
    setSubmit("Creating...");
    const body = {
      Name: name,
      email,
      phoneNo: mobile,
      password,
      Address,
      Address2,
      Landmark,
      City,
      Contry: Country,
      State,
      pincode,
    };
    const allKeysAreNotNull = Object.keys(body).every(
      (key) => body[key] !== null && body[key] !== ""
    );
    if (allKeysAreNotNull && otp) {
      const res = await fetchreq("POST", "addUser", body);
      if (res) {
        alert("SignUp Successfully");
        nav("/SignIn");
      } else {
        alert("Email Already used");
      }
    } else {
      alert("please Fill all details");
    }
  };

  return (
    <div id="mcd">
     
      <section id="SpSignIn" className="spUp">
        <div className="left">
          <img src="./imgs/sup.png" alt="" />
        </div>
        <div className="right">
          <div className="data" id="dataverify">
            <header>
              <span id="blue">Your</span>
              <img src="./imgs/6.png" height="50px" alt="" />
              <span id="org">Shop</span>
            </header>
            <h2>It's free to SignUp and only takes a minute.</h2>
            {!otp && otp !== 2 && (
              <form onSubmit={sendEmail}>
                <h3>Firstname & Lastname</h3>
                <input
                  minLength={2}
                  required
                  type="text"
                  placeholder="Enter your first and last name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <h3>Email</h3>
                <input
                  required
                  maxLength={45}
                  minLength={4}
                  type="email"
                  placeholder="abcd123@xyz.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <h3>Password</h3>
                <input
                  maxLength={25}
                  minLength={4}
                  required
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <h3>Confirm Password</h3>
                <input
                  maxLength={25}
                  minLength={4}
                  required
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
                <h3>Mobile No</h3>
                <input
                  required
                  maxLength={10}
                  minLength={10}
                  type="tel"
                  placeholder="Enter Your number"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <button type="submit" className="btn btn-b">
                  {submit}
                </button>
              </form>
            )}
            {otp == 2 && (
              <div>
                <input
                  type="number"
                  value={inputOTP}
                  onChange={(e) => {
                    setInputOTP(e.target.value);
                  }}
                  placeholder="Enter OTP here"
                />
                <button onClick={submitOTP} className="btn btn-b">
                  Submit OTP
                </button>
              </div>
            )}
          </div>
          <div id="verify">
            <form style={{ display: otp == true ? "block" : "none" }} onSubmit={handlesubmit}>
              <h3>Address Line 1</h3>
              <input
                required
                type="text"
                placeholder="Enter Address Line 1"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <h3>Address Line 2</h3>
              <input
                required
                type="text"
                placeholder="Enter Address Line 2"
                value={Address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              <h3>State</h3>
              <input
                required
                type="text"
                placeholder="Enter State"
                value={State}
                onChange={(e) => setState(e.target.value)}
              />
              <h3>Landmark</h3>
              <input
                required
                type="text"
                placeholder="Enter Landmark"
                value={Landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
              <h3>City</h3>
              <input
                required
                type="text"
                placeholder="Enter City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
              <h3>Country</h3>
              <input
                required
                type="text"
                placeholder="Enter Country"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <h3>Pincode</h3>
              <input
                required
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-b"
              >
                Create Account
              </button>
            </form>
          </div>
          <p>
            <span>Already have an account?</span>
            <Link to="/signIn">Sign In</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
