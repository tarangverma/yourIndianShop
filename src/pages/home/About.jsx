import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../stylesheet/About.css";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
const About = () => {
  return (
    <div id="Site" className="sttt">
      <header>
        <Nav />
      </header>

      <PgTitle
        pageName="About Us"
        tabName="ABOUT"
        bgImg="./imgs/home1-section-4.jpg"
      />
      <div id="vidd">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/YB67y0NepPs?si=cbSsgf37_Oirg198&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          autoPlay
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
