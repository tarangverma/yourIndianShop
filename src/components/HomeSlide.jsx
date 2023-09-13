import React from "react";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export const HomeSlide = ({ title, desc, bgimg }) => {
  const sliderStyle = {
    backgroundImage: `url(${bgimg})`,
    // background: `url(${bgimg})`,
  };
  console.log({ bgimg });
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <section id="hero" style={sliderStyle}>
      <div className="hero-data">
        <h1>{title}</h1>
        <h3>{desc}</h3>
        {/* <div className="btn btn-o">Explore More</div> */}
      </div>
    </section>
  );
};
