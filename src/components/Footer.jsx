import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";
const footer = () => {
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      {" "}
      <div className="ftr1">
        <div className="f1r">
          <div className="logo lg">
            <span id="wt">Your</span>
            <img src="./imgs/6.png" height="35PX" alt="" />
            <span id="org">Shop</span>
          </div>
          <div className="loc">
            <div className="titl">
              <span id="wt">Transforming </span>
              <span id="org"> Ideas Into </span>
              <span id="wt"> Reality</span>
            </div>
          </div>
          <div className="tm">
            info@techiota.co.in <br /> +919903581809
          </div>
        </div>
        {/* <div className="f1l">
          <a href="https://www.instagram.com/_qubit.tech/" target="_blank">
            <InstagramIcon />
          </a>{" "}
          <a href="">
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
            target="_blank"
          >
            <AlternateEmailIcon />
          </a>
        </div> */}
      </div>
      <div className="ftr3">
        <div className="links">
          {/* <Link */}
          <Link id="wt" to="/">
            Home
          </Link>
          <Link id="wt" to="/about">
            About
          </Link>
          <Link id="wt" to="/service">
            Service
          </Link>
          <Link id="wt" to="/offers">
            Offers
          </Link>
          <Link id="wt" to="/in-sites">
            Indian Sites
          </Link>
          <a id="wt" href="#offer">
            Contact
          </a>
        </div>
        <div className="policy">
          <span>
            Copyright © info@techiota.co.in &nbsp;&nbsp;&nbsp; Privacy Policy
            &nbsp;&nbsp; &nbsp; Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
