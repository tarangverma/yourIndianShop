import React from "react";
import Product from "../../components/Product";
import "../../stylesheet/dashboard/Shop.css";
const Shop = () => {
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  return (
    <div id="shop-sec">
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="t-title dark">SHOP PRODUCTS</div>
        </center>
      </div>

      <div id="displayProducts">
        {pr.map((e) => {
          return (
            <Product
              // proImg={`./imgs/btt${e}.webp`}
              proImg={`https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/we_go_gym/sp${e}.webp`}
              proName={`Sport Bottle ${e}`}
              proPrice=" $12.00"
            />
          );
        })}
      </div>
      <div id="ad2"></div>
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="t-title dark">SHOP SPORT ITEMS</div>
        </center>
      </div>
      <div id="displayProducts" style={{ flexDirection: "row-reverse" }}>
        {ar.map((e) => {
          return (
            <Product
              // proImg={`./imgs/btt${e}.webp`}
              proImg={`https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/we_go_gym/btt${e}.webp`}
              proName="Sport Bottle"
              proPrice=" $12.00"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
