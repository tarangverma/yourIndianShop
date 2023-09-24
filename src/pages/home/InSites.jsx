import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../stylesheet/About.css";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
const InSites = () => {
  return (
    <div id="Site" className="sttt">
      <header>
        <Nav />
      </header>
      <br />
      <br />
      <PgTitle
        pageName="Shop From Following Sites"
        tabName="Indian Sites"
        bgImg="./imgs/wh.jpg"
      />
      <section id="comp" className="insite-st">
        <a href="/" class="cp-site">
          <img src="./comp/1.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/2.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/3.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/4.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/5.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/6.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/7.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/8.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/9.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/10.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/11.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/12.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/13.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/14.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/15.png" alt="" />
        </a>
        <a href="/" class="cp-site">
          <img src="./comp/16.png" alt="" />
        </a>
      </section>
    </div>
  );
};

export default InSites;
