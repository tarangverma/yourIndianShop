import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect } from "react";
import { fetchreq, uploadImageAws, jwtauth } from "../Helper/fetch";
import { MyContext } from "../App";
import { Google, WhatsApp } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  const { user, setUser, setIsLogin, setWh, setWd } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignin] = useState("Sign In");
  const [isfp, setIsfp] = useState(false);
  const [fpp, setFpp] = useState(false);
  const nav = useNavigate();
  const [check, setCheck] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (signin == "Just A Sec...") {
      return;
    }
    setSignin("Just A Sec...");
    const out = await fetchreq("POST", "loginUser", { email, password });
    if (out) {
      window.localStorage.setItem("token", JSON.stringify(out.token));
      setIsLogin(true);
      const users = out.user;
      setUser(users);
      if (users.Status == 0) {
        nav("/plan");
      } else {
        nav("/dashboard");
      }
    } else {
      alert("Invalid Credentials...");
    }
    setSignin("Sign In");
  };
  const forgotpass = async (e) => {
    e.preventDefault();
    setFpp(true);
    const dt = await fetchreq("GET", `forgotPass/${email}`, {});
    if (dt) {
      if (dt.msg == "ok") {
        alert(" Password Is Sended To your Mail...");
        setIsfp(false);
      } else {
        alert("No User Exists");
      }
    } else {
      alert("Server Error...");
    }
    setFpp(false);
  };
  useEffect(() => {
    window.localStorage.clear();
    setUser(null);
    setIsLogin(false);
    setWh(null);
    setWd(null);
  }, []);
  return (
    <div id="mcd">
      <section id="SpSignIn">
        <div className="left">
          <div className="w-pp">
            <span>
              <WhatsApp id="w-ico" /> WhatsApp
            </span>
            <br />
            If you have any queries or doubts
            <br />
            Contact us on WhatsApp
            <br />
          </div>
          <div className="qr-img">
            <img src="./imgs/wqr.jpg" alt="" />
          </div>
          <div className="wapp-info">
            scan above qr code to contact us on whatsapp
          </div>
          {/* <img src="./imgs/sup.png" alt="" /> */}
        </div>
        <div className="right">
          <div className="data">
            <header>
              <span id="dg">YourIndianShop</span>
            </header>
            {!isfp ? (
              <div>
                <h1>Sign in</h1>
                <h2>
                  Don't have account&nbsp;
                  <Link to="/signUp">Create an Account</Link>
                </h2>
                <form onSubmit={handlesubmit}>
                  <h3>Email</h3>
                  <input
                    required
                    maxLength={50}
                    minLength={4}
                    type="email"
                    placeholder="abcd123@xyz.com"
                    value={email}
                    onChange={(d) => {
                      setEmail(d.target.value);
                    }}
                  />
                  <h3>Password</h3>
                  <input
                    required
                    maxLength={30}
                    minLength={4}
                    type={check ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(d) => {
                      setPassword(d.target.value);
                    }}
                  />
                  {password.length >= 4 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "flex-start",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={check}
                        onClick={() => {
                          setCheck(!check);
                        }}
                        style={{ width: "20px" }}
                      />
                      <span>Show Password</span>
                    </div>
                  )}
                  <button type="submit" className="btn btn-blk">
                    {signin}
                  </button>
                  <center>
                    <small>or sign in with</small>
                  </center>

                  <center>
                    <div id="other-s-in">
                      <GoogleIcon />
                    </div>
                  </center>
                </form>
                <p>
                  Don't remember your password? &nbsp;
                  <Link
                    onClick={() => {
                      setIsfp(true);
                    }}
                    className="gray"
                  >
                    Forget Password
                  </Link>
                </p>
              </div>
            ) : (
              <div>
                <h2>Forgot Password</h2>
                <form onSubmit={forgotpass}>
                  <h3>Email</h3>
                  <input
                    required
                    maxLength={50}
                    minLength={4}
                    type="email"
                    placeholder="abcd123@xyz.com"
                    value={email}
                    onChange={(d) => {
                      setEmail(d.target.value);
                    }}
                  />
                  <button disabled={fpp} type="submit" className="btn btn-blk">
                    {!fpp ? "Send Email" : "Sending Mail..."}
                  </button>
                </form>
                <br />
                <br />
                <br />
                <p>
                  <Link
                    onClick={() => {
                      setIsfp(false);
                    }}
                    className="gray"
                  >
                    Back to Login?
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
