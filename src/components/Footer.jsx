import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
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
            <span id="blue">SHIP</span>
            <img
              src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/Curior-service/shipping-site-imgs/logo/2.png"
              height="35PX"
              alt=""
            />
            <span id="org">BOX</span>
          </div>
          <div className="loc">
            <div className="titl">
              <span id="blue">Transforming </span>
              <span id="org"> Ideas Into </span>
              <span id="blue"> Reality</span>
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
      <div className="ftr2">
        <input
          type="text"
          placeholder="Enter your email to contact us via email ..."
        />
        <a
          className="btn btn-b"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
          target="_blank"
        >
          Send Mail
          {/* <AlternateEmailIcon /> */}
        </a>
        {/* <input type="submit" value="Sign Up" className="btn" /> */}
      </div>
      <div className="ftr3">
        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#service">services</a>
          <a href="#tec">PLANS</a>
          <a href="#contact">contact</a>
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
