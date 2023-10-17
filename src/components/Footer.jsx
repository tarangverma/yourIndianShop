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
      <div className="footer-main1" style={{display: "flex",flexDirection: "column", width: "35vh"}}>
        <p style={{fontSize: "25px"}}>YOUR INDIAN SHOP</p>
      <p style={{marginTop: "2rem"}}>Our shop provides you with best customer support</p>
      </div>
      <div className="footer-main3" style={{display: "flex",flexDirection: "column"}}>
      <p style={{fontSize: "25px", marginTop: "2rem"}}></p>
        <div>FAQ</div>
        <div>Our Policy</div>
        <div>Terms of Service</div>
        <div>Support</div>
      <h1> Our Works</h1>
      </div>
        <div style={{display: "flex",flexDirection: "column", width: "30vh"}}>
          <p style={{fontSize: "25px"}}>Contact Us</p>
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
          
            <div>we are here to solve your delivery problems</div>
          
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
      <div className="footer-main" style={{display: "flex",flexDirection: "row" , justifyContent: "space-between"}}>
       
     
      <p style={{fontSize: "25px",marginRight: "35px"}}></p>
      <div>
        <div>FAQ</div>
        <div>Our Policy</div>
        <div>Terms of Service</div>
        <div>Support</div>
      </div>
      <div style={{display: "flex",flexDirection: "column", width: "30vh"}}>
          <p style={{fontSize: "20px"}}>Contact Us</p>
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
