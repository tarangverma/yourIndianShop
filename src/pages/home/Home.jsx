import React from "react";
import "../../stylesheet/Home.css";

import Tilt from "react-parallax-tilt";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HomeSlide } from "../../components/HomeSlide";
import Calc from "../../components/Calc";

const Home = () => {
  return (
    <>
      <div id="Site">
        <header>
          <Nav />
        </header>
        <div className="hero-cont">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <HomeSlide
                title="fast and secure courier for all your packages"
                desc="  We carry clearness to intricacy, separating basic subtleties from
          confounded data to make modern, direct arrangements.
       "
                bgimg="./imgs/home1-rev-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide
                title="fast and secure courier for all your packages"
                desc="  We carry clearness to intricacy, separating basic subtleties from
              confounded data to make modern, direct arrangements.
              "
                bgimg="./imgs/home1-rev-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide
                title="fast and secure courier for all your packages"
                desc="  We carry clearness to intricacy, separating basic subtleties from
          confounded data to make modern, direct arrangements.
          "
                bgimg="./imgs/home1-rev-3.jpg"
              />
            </SwiperSlide>
          </Swiper>
          {/* <aside>
            <video src="./videos/hero.mp4" autoPlay loop muted></video>
          </aside> */}
        </div>
        <div id="pop-ser">
          <div className="ps">
            <div className="ps-l">
              <LocalShippingOutlinedIcon />
            </div>
            <div className="ps-r">
              <div className="st">Transport Solutions</div>
              <div className="s-txt">
                Our Transport Solutions assist your business with keeping up
                degrees of administration
              </div>
              <div className="rm " id="org">
                | read more |
              </div>
            </div>
          </div>
          <div className="ps">
            <div className="ps-l">
              <WarehouseOutlinedIcon />
            </div>
            <div className="ps-r">
              <div className="st">Warehousing Solutions</div>
              <div className="s-txt">
                Our Transport Solutions assist your business with keeping up
                degrees of administration
              </div>
              <div className="rm " id="org">
                | read more |
              </div>
              <div className="dis">
                <img src="./imgs/home1-service-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <section id="ship">
          <div id="sec-head">
            <div className="t-title">
              <span id="blue">How </span>
              <span id="org">Do We</span>
              <span id="blue"> Work</span>
            </div>
            <p>
              Packages and pallets, big and small, we can offer you instant
              delivery options for your shipping needs, both domestically and
              internationally. Fill out your shipment details below and we’ll
              provide services tailored to your specific requirements. Simply
              pick the option that suits you best, and continue to book.
            </p>
          </div>
          <div id="steps">
            <div className="s-cd">
              <div className="num">01</div>
              <div className="st">ENTER ORIGIN AND DESTINATION</div>
              <div className="txt">
                Input departure and arrival. To start shipping
              </div>
              <span id="rm">
                <span id="org">| Read More |</span>
              </span>
            </div>
            <div className="s-cd">
              <div className="num">02</div>
              <div className="st">DESCRIBE YOUR SHIPMENT</div>
              <div className="txt">Specify shipment details as per form.</div>
              <span id="rm">
                <span id="org">| Read More |</span>
              </span>
            </div>
            <div className="s-cd">
              <div className="num">03</div>
              <div className="st">GET DELIVERY PRICES</div>
              <div className="txt">Fetch delivery rates based on pack.</div>
              <span id="rm">
                <span id="org">| Read More |</span>
              </span>
            </div>
            <div className="s-cd">
              <div className="num">04</div>
              <div className="st">PROCEED WITH ONLINE BOOKING</div>
              <div className="txt">Initiate web-based booking process.</div>
              <span id="rm">
                <span id="org">| Read More |</span>
              </span>
            </div>
          </div>{" "}
        </section>
        <section id="service">
          <div className="ser-head">
            <div className="sh1">
              <h1>
                Explore Our
                <span id="org"> Services</span>
              </h1>
              <p>
                SHIPBOX is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandise through land transport.
              </p>{" "}
            </div>
            <div className="sh2">
              <div className="btn btn-b">Explore More</div>
            </div>
          </div>
          <div className="ser-cards">
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="sc">
                <div id="org">
                  <LocalShippingOutlinedIcon />
                </div>
                <div className="t-title">Shop and Ship</div>
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
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="sc">
                <div id="org">
                  <ShoppingBagOutlinedIcon />
                  {/* <AirplanemodeActiveOutlinedIcon /> */}
                </div>
                <div className="t-title">Assisted Purchase</div>
                <p>
                  We help transport your load anyplace on the planet, making
                  your business run easily regardless of where products.{" "}
                </p>
                <ul>
                  <li>General Air Freight Products</li>
                  <li>Charter Services</li>
                  <li>Intermodal Solutions</li>
                </ul>
              </div>
            </Tilt>{" "}
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="sc">
                <div id="org">
                  <EngineeringOutlinedIcon />
                  {/* <LocalShippingOutlinedIcon /> */}
                  {/* <DirectionsBoatOutlinedIcon /> */}
                </div>
                <div className="t-title">Choose Courier Partner</div>
                <p>
                  Sea cargo dispatches in excess of 5,500 holders per day to
                  ports all around the globe, making us a top forwarder.{" "}
                </p>
                <ul>
                  <li>Less-than-container Load</li>
                  <li>Full Container Load</li>
                  <li>Intermodal Solutions</li>
                </ul>
              </div>
            </Tilt>
          </div>
        </section>
        {/* <section id="asA">
          <Calc />
        </section> */}
        <section id="comp">
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
        <section id="bl-feature">
          <div className="ftr-cd">
            <div id="org">01</div>
            <div className="t-title">SignUp and register your self</div>
            <p>
              With our worldwide inclusion, strong transportation organization
              and industry driving coordinations experience, our Service and
              Aftermarket Logistics arrangements.
            </p>
            <div className="arw">
              <ArrowRightAltOutlinedIcon />
            </div>
          </div>
          <div className="ftr-cd">
            <div id="org">02</div>
            <div className="t-title">Shop from exclusive Indian site</div>
            <p>
              With our worldwide inclusion, strong transportation organization
              and industry driving coordinations experience, our Service and
              Aftermarket Logistics arrangements.
            </p>
            <div className="arw">
              <ArrowRightAltOutlinedIcon />
            </div>
          </div>
          <div className="ftr-cd">
            <div id="org">03</div>
            <div className="t-title">Choose plan & shop according to it</div>
            <p>
              With our worldwide inclusion, strong transportation organization
              and industry driving coordinations experience, our Service and
              Aftermarket Logistics arrangements.
            </p>
            <div className="arw">
              <ArrowRightAltOutlinedIcon />
            </div>
          </div>
          <div className="ftr-cd">
            <div id="org">04</div>
            <div className="t-title">Get parcel as fast as possible</div>
            <p>
              With our worldwide inclusion, strong transportation organization
              and industry driving coordinations experience, our Service and
              Aftermarket Logistics arrangements.
            </p>
            <div className="arw">
              <ArrowRightAltOutlinedIcon />
            </div>
          </div>
        </section>
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
        </section>{" "}
        <Footer />
      </div>
    </>
  );
};

export default Home;
