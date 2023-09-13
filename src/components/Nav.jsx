import React, { useContext, useState, useRef } from "react";
import "../stylesheet/Nav.css";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// import CalculateIcon from "@mui/icons-material/Calculate";
import { Link, useNavigate } from "react-router-dom";

import { fetchreq, uploadImageAws, jwtauth } from "../Helper/fetch";
import { MyContext } from "../App";
// import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Nav = () => {
  const { user, setUser, isLogin, setIsLogin } = useContext(MyContext);
  const nav = useNavigate();
  const [si, setSi] = useState("Log In");
  const othenticate = async () => {
    if (isLogin) {
      localStorage.clear();
      setIsLogin(false);
      setUser(null);
    } else {
      setSi("Log In...");
      const a = await jwtauth();
      if (a) {
        setIsLogin(true);
        const users = a.result[0];
        setUser(users);
        if (users.Status == 0) {
          nav("/plan");
        } else {
          nav("/dashboard");
        }
      } else {
        nav("/signIn");
      }
      setSi("Log In");
    }
  };
  const [toggle, setToggle] = useState("off");
  const sideNav = useRef();
  const handleToggle = () => {
    if (toggle === "off") {
      setToggle("on");
      sideNav.current.style.right = "0px";
    } else {
      setToggle("off");
      sideNav.current.style.right = "-300px";
    }
  };
  return (
    <>
      {" "}
      <div id="side-nav" ref={sideNav}>
        <div className="cl" onClick={handleToggle}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/in-sites">Indian Sites</Link>
          <a href="/">Contact</a>
        </div>

        <div id="log" className="btn btn-o">
          <a onClick={othenticate}>{isLogin ? "LogOut" : si}</a>
        </div>
        {!isLogin && (
          <div id="log" className="btn btn-o">
            <Link to="/signUp">Sign Up</Link>
          </div>
        )}
      </div>
      <nav>
        <div id="logo">
          <span id="wt">Your</span>
          &nbsp;
          <img src="./imgs/6.png" height={"35px"} alt="" />
          &nbsp;
          <span id="org">Shop</span>
        </div>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/disp-plan">Our Plans</Link>
          <Link to="/offers">Offers</Link>
          {/* <Link to="/in-sites">Indian Sites</Link> */}
          <a href="#offer">Contact</a>
        </div>
        <a
          href="https://www.youtube.com/watch?v=YB67y0NepPs&t=2s&pp=ygUbZHJvcHNoaXBwaW5nIGFuaW1hdGVkIHZpZGVv"
          target="_blank"
        >
          <IconButton id="yt-ico">
            <YouTubeIcon />
          </IconButton>
        </a>
        <div className="nav-right">
          {/* <Link to="/calc">
            <IconButton aria-label="Cost Calculator">
              <CalculateOutlinedIcon id="calc-icon" />
            </IconButton>
          </Link> */}
          <div id="log" className="btn btn-o">
            <a onClick={othenticate}>{isLogin ? "LogOut" : si}</a>
          </div>
          {!isLogin && (
            <div id="log" className="btn btn-o">
              <Link to="/signUp">Sign Up</Link>
            </div>
          )}
        </div>
        <div id="tog" onClick={handleToggle}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default Nav;
