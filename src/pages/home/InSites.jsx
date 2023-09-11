import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../stylesheet/About.css";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
const InSites = () => {
  return (
    <div id="Site">
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
        <a target="_blank" href="https://www.amazon.in/">
          <img src="./imgs/c1.svg" alt="" />
        </a>{" "}
        <a target="_blank" href="https://www.flipkart.com/">
          <img src="./imgs/c2.png" alt="" />
        </a>{" "}
        <a target="_blank" href="https://www.snapdeal.com/">
          <img src="./imgs/c3.png" alt="" />
        </a>
        <a target="_blank" href="https://www.myntra.com/">
          <img src="./imgs/c4.png" alt="" />
        </a>
      </section>
    </div>
  );
};

export default InSites;
