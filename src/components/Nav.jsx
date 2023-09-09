import React, { useContext, useState, useRef } from "react";
import "../stylesheet/Nav.css";
import CloseIcon from "@mui/icons-material/Close";
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
  const [si, setSi] = useState("Sign In");
  const othenticate = async () => {
    if (isLogin) {
      localStorage.clear();
      setIsLogin(false);
      setUser(null);
    } else {
      setSi("Sign In...");
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
      setSi("Sign In");
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
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Track</a>
          <a href="/">Shop</a>
          <a href="/">Contact</a>
        </div>

        <div id="log" className="btn btn-o">
          <a onClick={othenticate}>{isLogin ? "LogOut" : si}</a>
        </div>
      </div>
      <nav>
        <div id="logo">
          <span id="blue">Your</span>
          &nbsp;
          <img
            src="./imgs/6.png"
            height={"35px"}
            alt=""
          />
          &nbsp;
          <span id="org">Shop</span>
        </div>
        <div id="links">
          <a href="#homesec">Home</a>
          <a href="#pop-ser">About</a>
          <a href="#service">Service</a>
          <a href="#comp">Track</a>
          <a href="#bl-feature">Shop</a>
          <a href="#offer">Contact</a>
        </div>

        <div className="nav-right">
          <Link to="/calc">
            <IconButton aria-label="Cost Calculator">
              <CalculateOutlinedIcon id="calc-icon" />
            </IconButton>
          </Link>
          <div id="log" className="btn btn-b">
            <a onClick={othenticate}>{isLogin ? "LogOut" : si}</a>
          </div>
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
