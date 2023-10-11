import React, { useEffect, useState } from "react";
import "../../stylesheet/Home.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
// import Tilt from "react-parallax-tilt";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import SellIcon from "@mui/icons-material/Sell";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// import CalculateIcon from "@mui/icons-material/Calculate";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
// import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
// import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HomeSlide } from "../../components/HomeSlide";
// import Calc from "../../components/Calc";
import {
  // Calculate,
  FlightTakeoff,
  Instagram,
  Star,
  StarBorder,
  StarHalf,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import PgTitle from "../../components/PgTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import PopAd from "../../components/PopAd";
import { fetchreq } from "../../Helper/fetch";
const Home = () => {
  const [photos, setPhotos] = useState([]);
  const loadlandingPhoto = async () => {
    const dt = await fetchreq("GET", "landingpagePhotos", {});
    dt ? setPhotos(JSON.parse(dt.result[0].Details)) : setPhotos([]);
    // console.log("hi",dt.result[0]?.Details);
  };
  const url = process.env.REACT_APP_URL;
  const temp = ["./imgs/sd1.png", "./imgs/sd2.png", "/home/home.png"];
  useEffect(() => {
    loadlandingPhoto();
  }, []);
  const [value, setValue] = useState(
    window.innerWidth < 900
      ? 1
      : window.innerWidth >= 900 && window.innerWidth <= 1300
      ? 2
      : 3
  );
  const handelsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Iterate through form data and log each field's name and value
    const arr = [];
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      arr.push(value);
    });
    // name: adgtafasf 
    // email: ads@iau.o 
    // subject: asjdkfjafjajf 
    // message: 45487547578445
    const dt =await fetchreq("POST", "sendMail", {
      email: "connect.qubit@gmail.com",
      subject: arr[2],
      html: `<h3>Name: ${arr[0]} \n\n email: ${arr[1]} \n </h3><p>Message: ${arr[3]}</p>`,
    });
    if(dt){alert("Submit Successfully...")}
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newValue;

      if (width < 900) {
        newValue = 1;
      } else if (width >= 900 && width <= 1300) {
        newValue = 2;
      } else {
        newValue = 3;
      }

      setValue(newValue);
    };

    // Listen for the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div id="Site">
        <header>
          <Nav />
        </header>
        <PopAd />
        <div id="homesec" className="hero-cont">
          </div>
          <div class="swiper">
          <div class="swiper-wrapper">
          <div class="swiper-slide"><Link to={"/disp-plan"}><img src={"/home/explore.png"} alt="no"></img></Link></div>
          <div class="swiper-slide"><img src={"/banner/banner.png"} alt="no"></img></div>
          <div class="swiper-slide"><img src={"/banner/banner2.png"} alt="no"></img></div>
          </div>
          </div>
              <div>
                
              </div>
              {/* <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd2.png" />
              </SwiperSlide> */}
            
          
        <section>
          <div id="sec-head">
            <div className="t-title" id="dg">
              HOW IT WORKS
            </div>
          </div>
          <div id="steps">
            <div className="s-cd">
              {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsk5oYdrz90ep76a9y96qlXMHnaLpb4ZBpg1TEcrh74lsYfe6KbGUHfJOJ3o6ntf6y1No"
                alt=""
              />

              {/* <div className="st">SIGN-UP TO GET VIRTUAL ADDRESS</div> */}
              <div className="st">
                WE PROVIDE A FREE INDIAN VIRTUAL ADDRESS. SIMPLY SIGN UP & GET
                IT TODAY.
              </div>
            </div>
            <div className="s-cd">
              {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
              <img
                src="https://unblast.com/wp-content/uploads/2021/09/Online-App-Shopping-Illustration.jpg"
                alt=""
              />
              {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
              <div className="st">
                BROWSE AND SHOP FROM TOP INDIAN E-COMMERCE STORES AND AMAZING
                BRANDS.
              </div>
            </div>
            <div className="s-cd">
              {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
              <img
                src="https://images.template.net/77281/Warehouse-Cartoon-Illustration-1.jpg"
                alt=""
              />
              {/* <div className="st">SHIP PARCELS TO YOUR WAREHOUSE</div> */}
              <div className="st">
                SHIP YOUR CONSOLIDATED PARCELS TO YOUR ANY GLOBAL ADDRESS.
              </div>
            </div>
            <div className="s-cd">
              {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2848/2848906.png"
                alt=""
              />
              {/* <div className="st">RECEIVE WITHIN 7 / 8 WORKING DAYS</div> */}
              <div className="st">
                {" "}
                GET YOUR PARCELS AT YOUR ADDRESS WITHIN 3-6 WORKING DAYS FROM
                INDIA.
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <center>
            <Link to="/in-sites" className="btn btn-og">
              Explore More
            </Link>
          </center>
        </section>
        <div id="Site" className="bkl">
          <div id="indianshopcart" style={{ padding: "10vh 0px" }}>
            <div className="t-title" style={{ marginBottom: "20px" }}>
              <span id="dg">Various Indian Sites</span>
            </div>

            <div class="client-slider">
              <div class="client-slide-track">
                <div class="client-slide">
                  <img src="./comp/1.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/2.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/3.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/4.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/5.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/6.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/7.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/8.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/9.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/10.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/11.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/12.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/13.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/14.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/15.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/16.png" alt="" />
                </div>
              </div>
            </div>
            <div class="client-slider cl-cd-2">
              <div class="client-slide-track">
                <div class="client-slide">
                  <img src="./comp/1.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/2.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/3.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/4.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/5.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/6.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/7.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/8.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/9.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/10.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/11.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/12.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/13.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/14.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/15.png" alt="" />
                </div>
                <div class="client-slide">
                  <img src="./comp/16.png" alt="" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <center>
              <Link to="/in-sites" className="btn btn-og">
                Shop Now
              </Link>
            </center>
            <br />
          </div>
        </div>
        {/*   <section id="ship">
          <svg
            id="wave-y"
            viewBox="0 0 1440 140"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#00a1b8"
              // fill="#44A08D"
              // d="M0,126L24,119C48,112,96,98,144,88.7C192,79,240,75,288,63C336,51,384,33,432,37.3C480,42,528,70,576,88.7C624,107,672,117,720,114.3C768,112,816,98,864,95.7C912,93,960,103,1008,98C1056,93,1104,75,1152,72.3C1200,70,1248,84,1296,91C1344,98,1392,98,1440,102.7C1488,107,1536,117,1584,121.3C1632,126,1680,126,1728,126C1776,126,1824,126,1872,116.7C1920,107,1968,89,2016,84C2064,79,2112,89,2160,95.7C2208,103,2256,107,2304,109.7C2352,112,2400,112,2448,98C2496,84,2544,56,2592,39.7C2640,23,2688,19,2736,30.3C2784,42,2832,70,2880,84C2928,98,2976,98,3024,86.3C3072,75,3120,51,3168,35C3216,19,3264,9,3312,25.7C3360,42,3408,84,3432,105L3456,126L3456,140L3432,140C3408,140,3360,140,3312,140C3264,140,3216,140,3168,140C3120,140,3072,140,3024,140C2976,140,2928,140,2880,140C2832,140,2784,140,2736,140C2688,140,2640,140,2592,140C2544,140,2496,140,2448,140C2400,140,2352,140,2304,140C2256,140,2208,140,2160,140C2112,140,2064,140,2016,140C1968,140,1920,140,1872,140C1824,140,1776,140,1728,140C1680,140,1632,140,1584,140C1536,140,1488,140,1440,140C1392,140,1344,140,1296,140C1248,140,1200,140,1152,140C1104,140,1056,140,1008,140C960,140,912,140,864,140C816,140,768,140,720,140C672,140,624,140,576,140C528,140,480,140,432,140C384,140,336,140,288,140C240,140,192,140,144,140C96,140,48,140,24,140L0,140Z"
              d="M0,126L34.3,119C68.6,112,137,98,206,88.7C274.3,79,343,75,411,63C480,51,549,33,617,37.3C685.7,42,754,70,823,88.7C891.4,107,960,117,1029,114.3C1097.1,112,1166,98,1234,95.7C1302.9,93,1371,103,1440,98C1508.6,93,1577,75,1646,72.3C1714.3,70,1783,84,1851,91C1920,98,1989,98,2057,102.7C2125.7,107,2194,117,2263,121.3C2331.4,126,2400,126,2469,126C2537.1,126,2606,126,2674,116.7C2742.9,107,2811,89,2880,84C2948.6,79,3017,89,3086,95.7C3154.3,103,3223,107,3291,109.7C3360,112,3429,112,3497,98C3565.7,84,3634,56,3703,39.7C3771.4,23,3840,19,3909,30.3C3977.1,42,4046,70,4114,84C4182.9,98,4251,98,4320,86.3C4388.6,75,4457,51,4526,35C4594.3,19,4663,9,4731,25.7C4800,42,4869,84,4903,105L4937.1,126L4937.1,140L4902.9,140C4868.6,140,4800,140,4731,140C4662.9,140,4594,140,4526,140C4457.1,140,4389,140,4320,140C4251.4,140,4183,140,4114,140C4045.7,140,3977,140,3909,140C3840,140,3771,140,3703,140C3634.3,140,3566,140,3497,140C3428.6,140,3360,140,3291,140C3222.9,140,3154,140,3086,140C3017.1,140,2949,140,2880,140C2811.4,140,2743,140,2674,140C2605.7,140,2537,140,2469,140C2400,140,2331,140,2263,140C2194.3,140,2126,140,2057,140C1988.6,140,1920,140,1851,140C1782.9,140,1714,140,1646,140C1577.1,140,1509,140,1440,140C1371.4,140,1303,140,1234,140C1165.7,140,1097,140,1029,140C960,140,891,140,823,140C754.3,140,686,140,617,140C548.6,140,480,140,411,140C342.9,140,274,140,206,140C137.1,140,69,140,34,140L0,140Z"
            ></path>
          </svg>
          <div id="how-it-works">
            <div id="hl">
              <h1 id="dg">
                HOW WE <br /> WORK
              </h1>
              <div className="st-h">
                <h2>1. Sign Up to Get Your Virtual Address</h2>
                <h2>2. Shop From Indian Sites</h2>
                <h2>3. Ship Parcels To Your Warehouse</h2>
                <h2>4. Receive within 7/8 Working Days</h2>
              </div>
              <div className="sup">SIGN UP</div>
            </div>
            <div id="hr">
               <div className="im-title">
                EXCLUSIVE FESTIVE OFFERS ONLY FOR YOU
              </div> 
              <div className="of-grd">
                <img src="./imgs/off1.jpg" id="lambo-ln" alt="" />

                <div className="updown">
                  <img
                    id="lambo-ln"
                    src="https://previews.123rf.com/images/zatletic/zatletic1811/zatletic181100085/112186843-mannequins-dressed-in-latest-indian-dresses-in-front-of-a-retail-cloth-shop-in-kolkata-india.jpg"
                    alt=""
                  />
                  <img
                    id="lambo-ln"
                    src="https://cdn.shopify.com/s/files/1/0083/4692/7181/files/cvcvc.jpg?v=1615190263"
                    alt=""
                  />
                </div>
              </div>
            </div>{" "}
          </div>
          <svg
            id="wave"
            viewBox="0 0 1440 140"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="#283c48" offset="0%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,98L48,86.3C96,75,192,51,288,51.3C384,51,480,75,576,81.7C672,89,768,79,864,72.3C960,65,1056,61,1152,56C1248,51,1344,47,1440,37.3C1536,28,1632,14,1728,14C1824,14,1920,28,2016,44.3C2112,61,2208,79,2304,88.7C2400,98,2496,98,2592,86.3C2688,75,2784,51,2880,51.3C2976,51,3072,75,3168,88.7C3264,103,3360,107,3456,109.7C3552,112,3648,112,3744,109.7C3840,107,3936,103,4032,100.3C4128,98,4224,98,4320,95.7C4416,93,4512,89,4608,79.3C4704,70,4800,56,4896,60.7C4992,65,5088,89,5184,98C5280,107,5376,103,5472,105C5568,107,5664,117,5760,102.7C5856,89,5952,51,6048,35C6144,19,6240,23,6336,23.3C6432,23,6528,19,6624,18.7C6720,19,6816,23,6864,25.7L6912,28L6912,140L6864,140C6816,140,6720,140,6624,140C6528,140,6432,140,6336,140C6240,140,6144,140,6048,140C5952,140,5856,140,5760,140C5664,140,5568,140,5472,140C5376,140,5280,140,5184,140C5088,140,4992,140,4896,140C4800,140,4704,140,4608,140C4512,140,4416,140,4320,140C4224,140,4128,140,4032,140C3936,140,3840,140,3744,140C3648,140,3552,140,3456,140C3360,140,3264,140,3168,140C3072,140,2976,140,2880,140C2784,140,2688,140,2592,140C2496,140,2400,140,2304,140C2208,140,2112,140,2016,140C1920,140,1824,140,1728,140C1632,140,1536,140,1440,140C1344,140,1248,140,1152,140C1056,140,960,140,864,140C768,140,672,140,576,140C480,140,384,140,288,140C192,140,96,140,48,140L0,140Z"
            ></path>
          </svg>
        </section>*/}
        <div id="service-we-offer">
          <div className="ser-head">
            <center className="sh1">
              <h1 id="dg">
                Services We
                <span id="org"> Offer</span>
              </h1>
            </center>
          </div>
          {/* <h1 id="dg">SERVICES WE OFFER</h1> */}
          {/* <div className="swo">
            <div className="ck-it">
              <h2 id="org">CHECK IT</h2>
              <div className="btn-br">NOW !!!</div>
            </div>
            <div id="arow">
              <img
                src="https://t3.ftcdn.net/jpg/05/20/63/40/360_F_520634009_bs5CRpewzUQELyzX7uYPzaTLwWGkVNBN.jpg"
                alt=""
              />
            </div>
            <div className="ser-imgs">
              <div className="si">
                <img src="./imgs/ser1.jpg" />
              </div>
              <div className="si">
                <img src="./imgs/ser2.jpg" alt="" />
              </div>
              <div className="si">
                <img src="./imgs/ser3.jpg" alt="" />
              </div>
            </div>
          </div> */}
          {/* <img src="./imgs/sp-of.png" id="sp-of" alt="" /> */}
        </div>
        <section id="service" className="ser-sec-1" style={{ display: "none" }}>
          <div className="ser-head">
            <div className="sh1">
              <center>
                <h1>
                  Services We
                  <span style={{color: "var(--blue)"}}> Offer</span>
                </h1>
              </center>
              {/* <p>
                SHIPBOX is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandise through land transport.
              </p> */}
            </div>
            {/* </div>
            <Link to="/offers" className="sh2">
              <div className="btn btn-b">Explore More</div>
            </Link> */}
          </div>
          <div className="ser-cards">
            <div className="sc">
              <span>
                <div id="org">
                  <LocalShippingOutlinedIcon />
                </div>
                <div className="t-title">Self Customer</div>
              </span>
              <p>
                With a worldwide organization and progressed coordination
                arrangements, our airship cargo sending items.
              </p>
              <ul>
                <li>Part & Full Loads</li>
                <li>Multimodal Solutions</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
            <div className="sc">
              <span>
                <div id="org">
                  <ShoppingBagOutlinedIcon />
                </div>
                <div className="t-title">Assisted Purchase</div>
              </span>
              <p>
                We help transport your load anyplace on the planet, making your
                business run easily regardless of where products.
              </p>
              <ul>
                <li>Air Freight Products</li>
                <li>Charter Services</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="lnl">
          {/* <video
            src="./imgs/main-vd-4.webm"
            id="bc-video"
            muted
            loop
            autoPlay
          ></video> */}
          
          <div id="pop-ser">
            <div className="ps">
              <div className="ps-l">
                <SellIcon />
              </div>
              <div className="ps-r">
                <div className="st">Plans We Offer</div>
                <div className="s-txt">
                  We offer a range of plans to suit your needs, from basic to
                  premium and business , ensuring affordability and flexibility.
                </div>
                <div className="rm " id="org">
                  <Link to="/disp-plan" rel="noopener noreferrer">
                     View Plans 
                  </Link>
                </div>
              </div>
            </div>
            <div className="ps">
              <div className="ps-l">
                <FlightTakeoff />
              </div>
              <div className="ps-r">
                <div className="st wt">International Courier</div>
                <div className="s-txt">
                  WE OFFER A HASSLE FREE, RELIABLE AND LOW-COST COURIER SERVICE
                  FROM INDIA INTERNATIONALLY.{" "}
                </div>
                <Link to="/coming-soon" rel="noopener noreferrer">
                  <div className="rm " id="org">
                     View More 
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div id="pop-ser" className="pop-2 pp2">
            <div className="ps">
              <div className="ps-l">
                <ShoppingCartOutlinedIcon />
              </div>
              <div className="ps-r">
                <div className="st">Indian Shop Cart</div>
                <div className="s-txt">
                  SHOP FROM THE BEST OF INDIA’S BRANDS, AND GET THEM DELIVERED
                  FROM INDIA INTERNATIONALLY.
                </div>
                <Link to="/in-sites" rel="noopener noreferrer">
                  <div className="rm " id="org">
                     View Sites
                  </div>
                </Link>
              </div>
            </div>
            <div className="ps">
              <div className="ps-l">
                <CardGiftcardOutlinedIcon />
                {/* <LocalShippingOutlinedIcon /> */}
              </div>
              <div className="ps-r">
                <div className="st wt">Offer Coupons</div>
                <div className="s-txt">
                  WE PROVIDE SEVERAL OFFER COUPONS. ALL YOU HAVE TO DO IS BROWSE
                  AND APPLY THE COUPON CODE OF YOUR CHOICE IN ORDER TO REDEEM
                  IT.{" "}
                </div>
                <div className="rm " id="org">
                  <Link to="/offers" rel="noopener noreferrer">
                     View Coupons 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <div className="festival" >
          <Link to="/in-sites">
          <img src="/banner/offer.png" alt="no"></img>
          </Link>
        </div>
        <section id="service" className="ser-sec-2">
          <div className="ser-head">
            <center className="sh1">
              <h1 id="dg">
                Our Enterprise And Business
                <span id="org"> Plans</span>
              </h1>
            </center>
          </div>
          <div className="ser-cards">
            <div className="sc">
              <span>
                <div id="org">
                  <EngineeringOutlinedIcon />
                </div>
                <div className="t-title">White Labelling</div>
              </span>
              <p>
                Sea cargo dispatches in excess of 5,500 holders per day to ports
                all around the globe, making us a top forwarder.
              </p>
              <ul>
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Inter-modal Solutions</li>
              </ul>
              <a href="/coming-soon" className="btn btn-db">
                {" "}
                Comming Soon
              </a>
            </div>

            <div className="sc">
              <span>
                <div id="org">
                  <ComputerIcon />
                </div>
                <div className="t-title">Wholesaler Plan</div>
              </span>
              <p>
                Sea cargo dispatches in excess of 5,500 holders per day to ports
                all around the globe, making us a top forwarder.
              </p>
              <ul>
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Inter-modal Solutions</li>
              </ul>
              <a href="/coming-soon" className="btn btn-db">
                {" "}
                Comming Soon
              </a>
            </div>
          </div>
        </section>
        <div className="calculator">
          <Link to="/calc">
          <img src="/banner/Calculate.png" alt="no"></img>
          </Link>
        </div>
        <section id="feed">
          <div id="feed-l">
            <center className="fd-title" id="dg">
              What People Say About Our Company
            </center>
          </div>
          <div id="feed-r">
            <Swiper
              id="fd-scr"
              // spaceBetween={120}
              slidesPerView={value}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              // loop={true}
            >
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="feed-info">
                    <div id="hd-fd">
                      <div id="blue" className="btn btn-b">
                        Liza Smith 1
                      </div>
                      <div className="msg-title">"Great Work"</div>
                      <div id="org">CLIENT OF COMPANY</div>
                      <div className="msg-desc">
                        I work in project management and joined Unicoach because
                        I get great courses for less. The instructors are
                        fantastic, interesting, and helpful. I plan to use for a
                        long time!
                      </div>
                      <div className="sitara">
                        <StarBorder />
                        <StarHalf />
                        <Star />
                        <Star />
                        <Star />
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aZ69I4WPZL_Cc4m890a_QgDjr2iR_BuNYg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="feed-info">
                    <div id="hd-fd">
                      {" "}
                      <div id="blue" className="btn btn-b">
                        Liza Smith 2
                      </div>
                      <div className="msg-title">"Great Work"</div>
                      <div id="org">CLIENT OF COMPANY</div>
                      <div className="msg-desc">
                        I work in project management and joined Unicoach because
                        I get great courses for less. The instructors are
                        fantastic, interesting, and helpful. I plan to use for a
                        long time!
                      </div>
                      <div className="sitara">
                        <StarBorder />
                        <StarHalf />
                        <Star />
                        <Star />
                        <Star />
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img
                        src="https://images.statusfacebook.com/profile_pictures/indian_boys/indian_boys_24.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="feed-info">
                    <div id="hd-fd">
                      <div id="blue" className="btn btn-b">
                        Liza Smith 3
                      </div>
                      <div className="msg-title">"Great Work"</div>
                      <div id="org">CLIENT OF COMPANY</div>
                      <div className="msg-desc">
                        I work in project management and joined Unicoach because
                        I get great courses for less. The instructors are
                        fantastic, interesting, and helpful. I plan to use for a
                        long time!
                      </div>
                      <div className="sitara">
                        <StarBorder />
                        <StarHalf />
                        <Star />
                        <Star />
                        <Star />
                      </div>{" "}
                    </div>
                  </div>{" "}
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img
                        src="https://images.statusfacebook.com/profile_pictures/indian_boys/indian_boys_13.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="feed-info">
                    <div id="hd-fd">
                      {" "}
                      <div id="blue" className="btn btn-b">
                        Liza Smith 4
                      </div>
                      <div className="msg-title">"Great Work"</div>
                      <div id="org">CLIENT OF COMPANY</div>
                      <div className="msg-desc">
                        I work in project management and joined Unicoach because
                        I get great courses for less. The instructors are
                        fantastic, interesting, and helpful. I plan to use for a
                        long time!
                      </div>
                      <div className="sitara">
                        <StarBorder />
                        <StarHalf />
                        <Star />
                        <Star />
                        <Star />
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img
                        src="https://e1.pxfuel.com/desktop-wallpaper/82/1002/desktop-wallpaper-cute-girl-foreign-girl.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="feed-info">
                    <div id="hd-fd">
                      {" "}
                      <div id="blue" className="btn btn-b">
                        Liza Smith 5
                      </div>
                      <div className="msg-title">"Great Work"</div>
                      <div id="org">CLIENT OF COMPANY</div>
                      <div className="msg-desc">
                        I work in project management and joined Unicoach because
                        I get great courses for less. The instructors are
                        fantastic, interesting, and helpful. I plan to use for a
                        long time!
                      </div>
                      <div className="sitara">
                        <StarBorder />
                        <StarHalf />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img
                        src="https://images.unsplash.com/photo-1612383543328-7033bcbaf8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWVufGVufDB8fDB8fHww&w=1000&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section id="fr-in">
          <div className="fr-title">
            <div className="t-title" id="dg">
              Recognition{" "}
            </div>
          </div>
            
              
              <div className="scroll">
                <div class="scrolling-element ">
                  <img src="./ftrd/1.png" alt="" />
                </div>
                <div class="scrolling-element ">
                  <img src="./ftrd/2.png" alt="" />
                </div>
                <div class="scrolling-element ">
                  <img src="./ftrd/3.png" alt="" />
                </div>
                <div class="scrolling-element ">
                  <img src="./ftrd/4.png" alt="" />
                </div>
              
                <div class="scrolling-element ">
                  <img src="./ftrd/5.png" alt="" />
                </div>
              
              
                <div class="scrolling-element ">
                  <img src="./ftrd/6.png" alt="" />
                </div>
                </div>
          
          
        </section>
        <div id="contact-sec">
          <div id="con-head">
            <h1 id="dg">YOUR INDIAN SHOP</h1>
            <div className="s-media">
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
            </div>{" "}
          </div>
          <div className="con-body">
            <div className="con-l">
              <h1 id="dg">Reach Us </h1>
              <i>Please fill out the form below to send us an email.</i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 id="dg">
                {/* E-mail: <br /> */}
                {/* info@techiota.co.in */}
              </h2>{" "}
              <div
                className="con-ftr"
                // style={{ justifySelf: "flex-end !important" }}
              >
                <Link to="/signUp">
                  <div className="btn btn-db">SIGN UP</div>
                </Link>
                <Link to="/offers">
                  <div className="btn btn-db">OFFERS</div>
                </Link>
                <Link to="/dis-plan">
                  <div className="btn btn-db">PLANS</div>
                </Link>
              </div>
            </div>
            <form className="col-r"  onSubmit={handelsubmit}>
              <input required name="name" minLength={4} maxLength={50} type="text" className="soneri" placeholder="NAME" />
              <input required name="email" minLength={4} maxLength={50} type="email" placeholder="E-mail" />
              <input required name="subject" minLength={4} maxLength={30} type="text" className="soneri" placeholder="SUBJECT" />
              <textarea
                minLength={10}
                maxLength={500}
                required
                name="message"
                placeholder="MESSAGE"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="btn btn-gd">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
