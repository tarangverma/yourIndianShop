import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/ArtistSignIn.css";
import "../stylesheet/ArtUp.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { fetchreq} from '../Helper/fetch'
// import swal from "sweetalert";
// import emailjs from "@emailjs/browser";

// let otp = Math.round(1000000 * Math.random()).toString();
const ArtUp = () => {
    const nav = useNavigate();
    const [otp,setOtp]=useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [submit, setSubmit] = useState("Create Account");
    const [Address, setAddress] = useState(null);
    const [Address2,addAddress2] = useState(null);
    const [Landmark, setLandmark] = useState(null);
    const [City, setCity] = useState(null);
    const [Country, setCountry] = useState(null);
    const [pincode, setpincode] = useState(null);
    const [State, setState] = useState(null);
    
  //   const [code, setCode] = useState("");
  //   const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_z80kdsc",
  //       "template_pkan5j9",
  //       form.current,
  //       "tAnIMRTGjOth0eHFS"
  //     )
  //     .then(
  //       (result) => {
  //         alert("code is send to your email");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  // const verifycode = async (e) => {
  //   document.getElementById("dataverify").style.display = "none";
  //   document.getElementById("verify").style.display = "flex";
  //   // e.preventDefault();
  //   alert("code is sending to your email");

  //   await emailjs
  //     .sendForm(
  //       "service_z80kdsc",
  //       "template_1g6p4vm",
  //       form.current,
  //       "tAnIMRTGjOth0eHFS"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("code is send");
  //         return true;
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         return false;
  //       }
  //     );
  // };
  // const getcodeandverify = (e) => {
  //   e.preventDefault();
  //   if (otp == code) {
  //     handlesubmit();
  //   } else {
  //     alert("invalid code");
  //   }
  // };
  const submithalf = async (e)=>{
    e.preventDefault()
    const res = await fetchreq("GET",`sendVerifyMail/${email}`,{});
    if(res){
      setOtp(res.OTP);
      alert("mail is send to your email")
    }else{
      alert("Something went wrong...")
    }
  }
  const handlesubmit = async () => {
    if (submit == "Creating...") {
      return;
    }
    setSubmit("Creating...");
    const body=  {
      Name:name,
      email,
      phoneNo:mobile,
      password,
      Address,
      Address2,
      Landmark,
      City,
      Country,
      State,
      pincode
    }
    const res = fetchreq("POST","addUser",body)
    setSubmit("Create Account");
  };
  // useEffect(() => {
  //   document.getElementById("dataverify").style.display = "flex";
  //   document.getElementById("verify").style.display = "none";
  // }, []);
  return (
    <>
      <section id="ArtSignIn">
        <div className="left">
          <img
            src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/siteimage/auppp.png"
            alt=""
            id="Aup"
          />
        </div>
        <div className="right">
          <div className="data" id="dataverify">
            <header>
              <AddCardIcon id="logo" className="gold" />
              My-ID
            </header>
            <h1>Get Started</h1>
            <h2>It's free to SignUp and only takes a minute.</h2>
            <form onSubmit={submithalf}>
              <h3>Firstname & Lastname</h3>
              <input
                type="text"
                placeholder="Enter your first and last name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <h3>Email</h3>
              <input
                type="text"
                placeholder="abcd123@xyz.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <h3>Password</h3>
              <input
                type="password"
                placeholder="●●●●●●●●●●●"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <h3>Mobile No</h3>
              <input
                type="text"
                placeholder="Enter Your number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <button
                type="submit"
                className="btn"
              >
                {submit}
              </button>
            </form>
            <p>
              <span className="gray">Already have an account?</span>
              <Link to="/signIn">Sign In</Link>
            </p>
          </div>
          <div id="verify">
            {/* <form style={{display:"none"}}  ref={form}>
                <label>Code</label>
                <input type="text" value={email} onChange={()=>{}} name="uemail" />
                <input type="email" value={otp} onChange={()=>{}} name="vcode" /><br />
              <button>Submit</button>
            </form> */}
            <form
              style={{ display: "none" }}
              // ref={form} onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                type="text"
                // value={email}
                // onChange={() => {}}
                name="user_name"
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                // value={email}
                // onChange={() => {}}
                name="user_email"
              />
              <br />
              <label>Message</label>
              <textarea
              // value={otp} onChange={() => {}} name="message"
              />
              <br />
              <input type="submit" value="Send" />
            </form>
            <form>
              <div className="otp">
                <input
                  // value={code}
                  // onChange={(e) => {
                  //   setCode(e.target.value);
                  // }}
                  placeholder="Enter the OTP"
                  type="text"
                />
                <button
                  className="btn"
                  // onClick={getcodeandverify}
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtUp;
