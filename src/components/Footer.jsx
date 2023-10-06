import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Link } from "@mui/material";
const footer = () => {
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      {" "}
      <div className="ftr3">
        <div className="links">
          {/* <Link */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/disp-plan">Our Plans</Link>
          <Link to="/offers">Offers</Link>
          <a id="wt" href="#offer">
            Contact
          </a>
        </div>
        <div className="policy">
          <span>
            <span className="social-m">
              <IconButton>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </span>
          </span>
        </div>
        {/* <div></div> */}
      </div>
      <div className="ftr1">
        <div className="f1r">
          <div className="logo lg">
            <div id="dg">YOUR INDIAN SHOP</div>
          </div>
          <div className="loc">
            <div className="titl">Transforming Ideas Into Reality</div>
          </div>
          {/* <div className="tm">
            info@techiota.co.in <br /> +919903581809
          </div> */}
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
      <center>
        Copyright © 2023
        {/* info@techiota.co.in */}
        &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; &nbsp; Terms & Conditions
        &nbsp;&nbsp; &nbsp;
      </center>
    </footer>
  );
};

export default footer;
