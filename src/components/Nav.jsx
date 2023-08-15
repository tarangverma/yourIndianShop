import React from "react";
import "../stylesheet/Nav.css";
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
        <div id="log" className="btn btn-b">
          Join Now
        </div>
      </nav>
    </>
  );
};

export default Nav;
