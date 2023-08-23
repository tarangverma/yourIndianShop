import React from "react";
import "../stylesheet/dashboard/Product.css";
const Product = (props) => {
  return (
    <div id="prod">
      <div className="proTop">
        <img src={props.proImg} alt="" />
      </div>
      <div id="proData">
        <div className="proName">{props.proName}</div>
        <div className="proPrice">{props.proPrice}</div>
      </div>
      <div className="atc">Buy Now</div>
    </div>
  );
};

export default Product;
