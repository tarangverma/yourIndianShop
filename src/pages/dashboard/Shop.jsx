import React, { useDebugValue, useEffect, useState } from "react";
import Product from "../../components/Product";
import "../../stylesheet/dashboard/Shop.css";
import { Link } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
const Shop = () => {
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  const [products,setProducts]=useState([]);
  const url = process.env.REACT_APP_URL;
  const getProduct = async ()=>{
    const dt = await fetchreq("GET","Products",{});
    setProducts(dt.result);
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div id="shop-sec">
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="plan-page-title">
            <span id="blue">SHOP </span>
            <span id="org">PRODUCTS</span>
          </div>
        </center>
      </div>

      <div id="displayProducts">
        {products.map((p, e) => {
          const photo = JSON.parse(p.Images);

          return (
            <Product
              // proImg={`./imgs/btt${e}.webp`}
              proImg={`${url}/${photo[0]}`}
              proName={p.Name}
              proPrice={` $${p.Price}`}
            />
          );
        })}
      </div>
      <center>
        <Link className="btn btn-b" to="/dashboard/assisted-purchase">
          Assisted Purchase Request
        </Link>
      </center>
    </div>
  );
};

export default Shop;
