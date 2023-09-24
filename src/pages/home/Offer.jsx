import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
const Offer = () => {
  return (
    <div id="Site" className="sttt">
      <header>
        <Nav />
      </header>
      <br />
      <br />
      <PgTitle
        pageName="Get Amazing Offers"
        tabName="Offers"
        bgImg="./imgs/wh2.jpg"
      />
      <section id="offer">
        <div className="t-title">
          <span id="org"> Use </span>
          exclusive
          <span id="org"> code </span>
          for
          <span id="org"> offers</span>
        </div>
        <div id="of-g">
          <img src="./imgs/of1.png" alt="" />
          <img src="./imgs/of2.png" alt="" />
          <img src="./imgs/of3.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Offer;
