import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect } from "react";
import { fetchreq, uploadImageAws, jwtauth } from "../Helper/fetch";
import { MyContext } from "../App";

const SignIn = () => {
  const { user, setUser, setIsLogin, setWh, setWd } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignin] = useState("Sign In");
  const nav = useNavigate();
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

  useEffect(() => {
    window.localStorage.clear();
    setUser(null);
    setIsLogin(false);
    setWh(null);
    setWd(null);
  }, []);
  return (
    <>
      <section id="SpSignIn">
        <div className="left">
          <img src="./videos/lg.gif" alt="" />
        </div>
        <div className="right">
          <div className="data">
            <header>
              <span id="blue">SHIP</span>
              <img
                src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/Curior-service/shipping-site-imgs/logo/3.png"
                height="50px"
                alt=""
              />
              <span id="org">BOX</span>
            </header>
            <h1>Welcome back!</h1>
            <h2>Please sign in to continue.</h2>
            <form onSubmit={handlesubmit}>
              <h3>Email</h3>
              <input
                type="email"
                placeholder="abcd123@xyz.com"
                value={email}
                onChange={(d) => {
                  setEmail(d.target.value);
                }}
              />
              <h3>Password</h3>
              <input
                type="password"
                placeholder="●●●●●●●●●●●"
                value={password}
                onChange={(d) => {
                  setPassword(d.target.value);
                }}
              />
              <button type="submit" className="btn btn-b">
                {signin}
              </button>
            </form>

            <p>
              <span className="gray">Don't have an account?</span>
              <Link to="/signUp">Create an Account</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
