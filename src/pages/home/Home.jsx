import React from "react";
import "../../stylesheet/Home.css";

import Tilt from "react-parallax-tilt";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SellIcon from "@mui/icons-material/Sell";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CalculateIcon from "@mui/icons-material/Calculate";
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
import { Calculate } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PgTitle from "../../components/PgTitle";


const Home = () => {
  return (
    <>
      <div id="Site">
        <header>
          <Nav />
        </header>
        <div id="homesec" className="hero-cont">
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
              <SellIcon />
              {/* <LocalShippingOutlinedIcon /> */}
            </div>
            <div className="ps-r">
              <div className="st">Plans We Offer</div>
              <div className="s-txt">
                We offer a range of plans to suit your needs, from basic to
                premium and business , ensuring affordability and flexibility.
              </div>
              <div className="rm " id="org">
                <Link to="/disp-plan" target="_blank" rel="noopener noreferrer">
                  | read more |
                </Link>
              </div>
            </div>
          </div>
          <div className="ps">
            <div className="ps-l">
              <CalculateIcon />
              {/* <WarehouseOutlinedIcon /> */}
            </div>
            <div className="ps-r">
              <div className="st">Price Calculator</div>
              <div className="s-txt">
                A versatile price calculator, factoring in product weight or
                dimensions, simplifying cost estimation for efficient shipping
                and pricing.{" "}
              </div>
              <Link to="/calc" target="_blank" rel="noopener noreferrer">
                <div className="rm " id="org">
                  | read more |
                </div>
              </Link>
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
            </div>
            <div className="s-cd">
              <div className="num">02</div>
              <div className="st">DESCRIBE YOUR SHIPMENT</div>
              <div className="txt">Specify shipment details as per form.</div>
            </div>
            <div className="s-cd">
              <div className="num">03</div>
              <div className="st">GET DELIVERY PRICES</div>
              <div className="txt">Fetch delivery rates based on pack.</div>
            </div>
            <div className="s-cd">
              <div className="num">04</div>
              <div className="st">PROCEED WITH ONLINE BOOKING</div>
              <div className="txt">Initiate web-based booking process.</div>
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
            <Tilt tiltMaxAngleX="24" tiltMaxAngleY="15">
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
            <Tilt tiltMaxAngleX="24" tiltMaxAngleY="15">
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
            <Tilt tiltMaxAngleX="24" tiltMaxAngleY="15">
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
        <div id="Site">
          <div  style={{padding:"30px 0px"}}>
            <div className="t-title" style={{marginBottom:"20px"}}>
              <span id="blue">Shop </span>
              <span id="org">From Following</span>
              <span id="blue"> Sites</span>
            </div>
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
        </div>
        <section id="feed">
          <div id="feed-l">
            <div className="fd-title">
              People Say About Our
              <span id="org">&nbsp;Company</span>
            </div>
            <p>
              E-commerce model where retailers sell products without holding
              inventory, relying on suppliers to ship directly to customers.
            </p>
            <div className="btn btn-b">Join Now</div>
          </div>
          <div id="feed-r">
            <Swiper
              id="fd-scr"
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="msg-title">"Great Work"</div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img src="./imgs/user-bg-80x80.jpg" alt="" />
                    </div>
                    <div className="feed-info">
                      <div id="blue">Liza Smith</div>
                      <div id="org">CLIENT OF COMPANY</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="msg-title">"Great Work"</div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img src="./imgs/user-bg-80x80.jpg" alt="" />
                    </div>
                    <div className="feed-info">
                      <div id="blue">Liza Smith</div>
                      <div id="org">CLIENT OF COMPANY</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="msg-title">"Great Work"</div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img src="./imgs/user-bg-80x80.jpg" alt="" />
                    </div>
                    <div className="feed-info">
                      <div id="blue">Liza Smith</div>
                      <div id="org">CLIENT OF COMPANY</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="msg-title">"Great Work"</div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img src="./imgs/user-bg-80x80.jpg" alt="" />
                    </div>
                    <div className="feed-info">
                      <div id="blue">Liza Smith</div>
                      <div id="org">CLIENT OF COMPANY</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fd-cd">
                  <div className="msg-title">"Great Work"</div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-bot">
                    <div className="zomm-dp">
                      <img src="./imgs/user-bg-80x80.jpg" alt="" />
                    </div>
                    <div className="feed-info">
                      <div id="blue">Liza Smith</div>
                      <div id="org">CLIENT OF COMPANY</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* <section id="asA">
          <Calc />
        </section> */}

        {/* <section id="bl-feature">
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
        </section> */}
        {/* <section id="offer">
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
        </section>{" "} */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
