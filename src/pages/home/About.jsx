import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../stylesheet/About.css";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="Site" className="sttt">
      <header>
        <Nav />
      </header>

      <div id="ab-frame">About Us</div>
      <div id="abt-sec">
        <div className="abt-l">
          <h1>Best online shopping, great international shipping deals.</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            recusandae eum quidem laboriosam laudantium omnis blanditiis iusto,
            perferendis error alias obcaecati molestias velit beatae unde
            suscipit neque nobis harum dolor illum quaerat nulla quo
            necessitatibus.
          </p>
          <p>
            Alias obcaecati molestias velit beatae unde suscipit neque nobis
            harum dolor illum quaerat nulla quo necessitatibus.
          </p>
          <Link to="/signUp">
            <div className="btn btn-og">Join Now</div>
          </Link>
        </div>
        <div className="abt-r">
          <img src="./imgs/sd3.png" alt="" />
        </div>
      </div>

      {/* <PgTitle
        pageName="About Us"
        tabName="ABOUT"
        bgImg="./imgs/home1-section-4.jpg"
      /> */}
      {/* <div id="vidd">
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
      </div> */}
    </div>
  );
};

export default About;
