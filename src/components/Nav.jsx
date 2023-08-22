import React from "react";
import "../stylesheet/Nav.css";
import IconButton from "@mui/material/IconButton";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// import CalculateIcon from "@mui/icons-material/Calculate";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div id="logo">
          <span id="blue">Ship</span>
          &nbsp;
          <img src="./imgs/3.png" height={"35px"} alt="" />
          &nbsp;
          <span id="org">Box</span>
        </div>
        <div id="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Track</a>
          <a href="/">Shop</a>
          <a href="/">Contact</a>
        </div>
        <div className="nav-right">
          <IconButton aria-label="Cost Calculator">
            <CalculateOutlinedIcon id="calc-icon" />
          </IconButton>
          <div id="log" className="btn btn-b">
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
