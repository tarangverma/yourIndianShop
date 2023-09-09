import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import "../stylesheet/SignUp.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import { fetchreq } from "../Helper/fetch";
import emailjs from "@emailjs/browser";
let code = Math.round(1000000 * Math.random()).toString();

const SignUp = () => {
  const nav = useNavigate();
  const [otp, setOtp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (name != "" && email != "" && password != "" && mobile != "") {
      setSubmit("Sending Verification  Mail...");
      emailjs
        .sendForm(
          "service_p4uzot9",
          "template_8w5j3hp",
          form.current,
          "L-oDXOLv_J9LSWIt2"
        )
        .then(
          (result) => {
            alert("code is send to your email");
            setSubmit("Submit Otp");
            setOtp(2);
          },
          (error) => {
            console.log(error.text);
            setSubmit("Continue");
          }
        );
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

  const handlesubmit = async () => {
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
    <>
      <form style={{ display: "none" }} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" value={email} onChange={() => {}} name="user_name" />
        <br />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={() => {}}
          name="user_email"
        />
        <br />
        <label>Message</label>
        <textarea value={code} onChange={() => {}} name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
      <section id="SpSignIn" className="spUp">
        <div className="left">
          <img src="./videos/lg2.gif" alt="" id="Aup" />
        </div>
        <div className="right">
          <div className="data" id="dataverify">
            <header>
              <span id="blue">Your</span>
              <img
                src="./imgs/6.png" height="50px"
                alt=""
              />
              <span id="org">Shop</span>
            </header>
            <h2>It's free to SignUp and only takes a minute.</h2>
            {!otp && otp !== 2 && (
              <form onSubmit={sendEmail}>
                <h3>Firstname & Lastname</h3>
                <input
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
                  type="email"
                  placeholder="abcd123@xyz.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <h3>Password</h3>
                <input
                  required
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <h3>Mobile No</h3>
                <input
                  required
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
            <form style={{ display: otp == true ? "block" : "none" }}>
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
                type="button"
                className="btn btn-b"
                onClick={handlesubmit}
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
    </>
  );
};

export default SignUp;
