import React from "react";
import "../../stylesheet/Home.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import Tilt from "react-parallax-tilt";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
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
import { Calculate, FlightTakeoff } from "@mui/icons-material";
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
                //           title="fast and secure courier for all your packages"
                //           desc="  We carry clearness to intricacy, separating basic subtleties from
                //     confounded data to make modern, direct arrangements.
                //  "
                bgimg="./comp/sld1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide
                //   title="fast and secure courier for all your packages"
                //   desc="  We carry clearness to intricacy, separating basic subtleties from
                // confounded data to make modern, direct arrangements.
                // "
                bgimg="./comp/sld2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide
                //       title="fast and secure courier for all your packages"
                //       desc="  We carry clearness to intricacy, separating basic subtleties from
                // confounded data to make modern, direct arrangements.
                // "
                bgimg="./comp/sld3.jpg"
              />
            </SwiperSlide>
          </Swiper>
          {/* <aside>
            <video src="./videos/hero.mp4" autoPlay loop muted></video>
          </aside> */}
        </div>{" "}
        <section id="ship">
          <div id="sec-head">
            <div className="t-title">
              <span id="blue">How </span>
              <span id="org">Does It</span>
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
              <div className="st">
                SIGN-UP AND GET YOUR INDIAN VIRTUAL ADDRESS
              </div>
              <div className="txt">
                Input departure and arrival. To start shipping
              </div>
            </div>
            <div className="s-cd">
              <div className="num">02</div>
              <div className="st">
                START SHOPPING FROM INDIAN E-COMMERCE SITES
              </div>
              <div className="txt">Specify shipment details as per form.</div>
            </div>
            <div className="s-cd">
              <div className="num">03</div>
              <div className="st">
                SHIP YOUR PARCELS INTO YOUR WAREHOUSE/LOCKER
              </div>
              <div className="txt">Fetch delivery rates based on pack.</div>
            </div>
            <div className="s-cd">
              <div className="num">04</div>
              <div className="st">
                RECEIVE YOUR PARCELS IN 7 / 8 WORKING DAYS
              </div>
              <div className="txt">Initiate web-based booking process.</div>
            </div>
          </div>
        </section>
        <section id="service">
          <div className="ser-head">
            <div className="sh1">
              <h1>
                Services We
                <span id="org"> Offer</span>
              </h1>
              <p>
                SHIPBOX is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandise through land transport.
              </p>
            </div>
            <div className="sh2">
              <div className="btn btn-b">Explore More</div>
            </div>
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
                  | View Plans |
                </Link>
              </div>
            </div>
          </div>
          <div className="ps">
            <div className="ps-l">
              {/* <CalculateIcon /> */}
              <FlightTakeoff />
              {/* <WarehouseOutlinedIcon /> */}
            </div>
            <div className="ps-r">
              <div className="st">International Courier Service</div>
              <div className="s-txt">
                A versatile price calculator, factoring in product weight or
                dimensions, simplifying cost estimation for efficient shipping
                and pricing.
              </div>
              <Link to="/calc" target="_blank" rel="noopener noreferrer">
                <div className="rm " id="org">
                  | Calculate Now|
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="pop-ser" className="pop-2">
          <div className="ps">
            <div className="ps-l">
              <ShoppingCartOutlinedIcon />
              {/* <WarehouseOutlinedIcon /> */}
            </div>
            <div className="ps-r">
              <div className="st">Indian Shop Cart</div>
              <div className="s-txt">
                A versatile price calculator, factoring in product weight or
                dimensions, simplifying cost estimation for efficient shipping
                and pricing.
              </div>
              <Link to="/calc" target="_blank" rel="noopener noreferrer">
                <div className="rm " id="org">
                  | View Sites |
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
              <div className="st">Offer Coupons</div>
              <div className="s-txt">
                We offer a range of plans to suit your needs, from basic to
                premium and business , ensuring affordability and flexibility.
              </div>
              <div className="rm " id="org">
                <Link to="/disp-plan" target="_blank" rel="noopener noreferrer">
                  | View Coupons |
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="Site" className="bkl">
          <div style={{ padding: "30px 0px" }}>
            <div className="t-title" style={{ marginBottom: "20px" }}>
              <span id="blue">Shop </span>
              <span id="org">From Following</span>
              <span id="blue"> Sites</span>
            </div>

            {/* <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
              > */}
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
            {/* <Swiper
                slidesPerView={3}
                // spaceBetween={30}
                speed={1000}
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 0,
                  // disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <a target="_blank" href="https://www.amazon.in/">
                    <img src="./imgs/c1.svg" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a target="_blank" href="https://www.flipkart.com/">
                    <img src="./imgs/c2.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a target="_blank" href="https://www.snapdeal.com/">
                    <img src="./imgs/c3.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a target="_blank" href="https://www.myntra.com/">
                    <img src="./imgs/c4.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a target="_blank" href="https://www.myntra.com/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a target="_blank" href="https://www.myntra.com/">
                    <img
                      src="http://www.pngimagesfree.com/LOGO/R/Reliance-Trends/Reliance-Trends-Logo-Vector.png"
                      alt=""
                    />
                  </a>
                </SwiperSlide>
              </Swiper> */}
          </div>
        </div>
        <section id="service">
          <div className="ser-head">
            <center className="sh1">
              <h1>
                Wholesale & Business
                <span id="org"> Service</span>
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
              <div className="btn btn-o"> Read More </div>
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
              <div className="btn btn-o"> Read More </div>
            </div>
          </div>
        </section>
        <section id="cal">
          <div className="cal-head">
            <div className="t-title">Shipping Rate Calculator </div>
            <Link to="/calc" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-b">Calculate Now</div>
            </Link>
          </div>
          {/* <img src="./imgs/cc.png" alt="" /> */}
        </section>
        <section id="feed">
          <div id="feed-l">
            <center className="fd-title">
              What People Say About Our Company
            </center>
          </div>
          <div id="feed-r">
            <Swiper
              id="fd-scr"
              slidesPerView={3}
              // spaceBetween={30}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              // loop={true}
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
                  <div className="msg-title">"Great Work."</div>
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
        <section id="fr-in">
          <div className="fr-title">
            <div className="t-title">Featured IN </div>
          </div>
          <div id="fr-gal">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/2.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/3.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/5.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="frd-img">
                  <img src="./ftrd/6.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section id="fest-offer">
          <div id="pop-ser" className="pop-3">
            <div className="ps">
              <div className="ps-l">
                <ShoppingCartOutlinedIcon />
                {/* <WarehouseOutlinedIcon /> */}
              </div>
              <div className="ps-r">
                <div className="st">View Festival Offers</div>

                <div className="btn btn-o">View Offers</div>
              </div>
            </div>
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
        </section> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
