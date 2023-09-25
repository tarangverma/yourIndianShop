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
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import PgTitle from "../../components/PgTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import PopAd from "../../components/PopAd";
import { fetchreq } from "../../Helper/fetch";
const Home = () => {
  const [photos,setPhotos]=useState([]);
  const loadlandingPhoto = async ()=>{
    const dt = await fetchreq("GET","landingpagePhotos",{});
    dt?setPhotos(JSON.parse(dt.result[0].Details)):setPhotos([]);
    console.log(JSON.parse(dt.result[0].Details))
  }
  const url = process.env.REACT_APP_URL;
  const temp = ['./imgs/sd1.png','./imgs/sd2.png']
  useEffect(()=>{
    loadlandingPhoto()
  },[]);
   const [value, setValue] = useState(
     window.innerWidth < 900
       ? 1
       : window.innerWidth >= 900 && window.innerWidth <= 1300
       ? 2
       : 3
   );

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
          <div id="soc">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </div>
          <div id="ver-in">
            <Link to="/signIn">LOG IN </Link>
            <Link to="/signUp">SIGN UP </Link>
          </div>
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {photos.map((pt, index) => {
              return (
                <SwiperSlide key={index}>
                  <HomeSlide bgimg={`${url}/${pt}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>{" "}
        <section id="ship">
          <div id="sec-head">
            <div className="t-title">
              <span id="org">How </span>
              <span>Does It</span>
              <span id="lime"> Work</span>
            </div>
          </div>
          <div id="steps">
            <div className="s-cd">
              <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsk5oYdrz90ep76a9y96qlXMHnaLpb4ZBpg1TEcrh74lsYfe6KbGUHfJOJ3o6ntf6y1No"
                alt=""
              />

              <div className="st">SIGN-UP TO GET VIRTUAL ADDRESS</div>
            </div>
            <div className="s-cd">
              <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div>
              <img
                src="https://unblast.com/wp-content/uploads/2021/09/Online-App-Shopping-Illustration.jpg"
                alt=""
              />
              <div className="st">SHOP FROM INDIAN SITES</div>
            </div>
            <div className="s-cd">
              <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div>
              <img
                src="https://images.template.net/77281/Warehouse-Cartoon-Illustration-1.jpg"
                alt=""
              />
              <div className="st">SHIP PARCELS TO YOUR WAREHOUSE</div>
            </div>
            <div className="s-cd">
              <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2848/2848906.png"
                alt=""
              />
              <div className="st">RECEIVE WITHIN 7 / 8 WORKING DAYS</div>
            </div>
          </div>
        </section>
        <section id="service" className="ser-sec-1">
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
            <Link to="/offers" className="sh2">
              <div className="btn btn-b">Explore More</div>
            </Link>
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
                    | View Plans |
                  </Link>
                </div>
              </div>
            </div>
            <div className="ps">
              <div className="ps-l">
                <FlightTakeoff />
              </div>
              <div className="ps-r">
                <div className="st wt" >International Courier</div>
                <div className="s-txt">
                  A versatile price calculator, factoring in product weight or
                  dimensions, simplifying cost estimation for efficient shipping
                </div>
                <a href="/comming_soon" rel="noopener noreferrer">
                  <div className="rm " id="org">
                    | View More |
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="pop-ser" className="pop-2">
            <div className="ps">
              <div className="ps-l">
                <ShoppingCartOutlinedIcon />
              </div>
              <div className="ps-r">
                <div className="st">Indian Shop Cart</div>
                <div className="s-txt">
                  A versatile price calculator, factoring in product weight or
                  dimensions, simplifying cost estimation for efficient shipping
                  and pricing.
                </div>
                <Link to="/in-sites" rel="noopener noreferrer">
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
                <div className="st wt">Offer Coupons</div>
                <div className="s-txt">
                  We offer a range of plans to suit your needs, from basic to
                  premium and business , ensuring affordability and flexibility.
                </div>
                <div className="rm " id="org">
                  <Link to="/offers" rel="noopener noreferrer">
                    | View Coupons |
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="Site" className="bkl">
          <div id="indianshopcart" style={{ padding: "30px 0px" }}>
            <div className="t-title" style={{ marginBottom: "20px" }}>
              <span id="org">Shop From</span>
              <span id="blue"> Following</span>
              <span id="lime"> Sites</span>
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
          </div>
        </div>
        <section id="service" className="ser-sec-2">
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
              <a href="/comming_soon" className="btn btn-o">
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
              <a href="/comming_soon" className="btn btn-o">
                {" "}
                Comming Soon
              </a>
            </div>
          </div>
        </section>
        <section id="cal">
          <div className="cal-head">
            <div className="t-title">Shipping Rate Calculator </div>
            <Link to="/calc" rel="noopener noreferrer">
              <div className="btn btn-b">Calculate Now</div>
            </Link>
          </div>
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
              // spaceBetween={120}
              slidesPerView={value}
              autoplay={{
                delay: 1500,
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
                    <div id="blue" className="btn btn-b">
                      Liza Smith
                    </div>
                    <div id="org">CLIENT OF COMPANY</div>
                  </div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-title">"Great Work"</div>
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
                    <div id="blue" className="btn btn-b">
                      Liza Smith
                    </div>
                    <div id="org">CLIENT OF COMPANY</div>
                  </div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-title">"Great Work."</div>
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
                    <div id="blue" className="btn btn-b">
                      Liza Smith
                    </div>
                    <div id="org">CLIENT OF COMPANY</div>
                  </div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-title">"Great Work"</div>
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
                    <div id="blue" className="btn btn-b">
                      Liza Smith
                    </div>
                    <div id="org">CLIENT OF COMPANY</div>
                  </div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-title">"Great Work"</div>
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
                    <div id="blue" className="btn btn-b">
                      Liza Smith
                    </div>
                    <div id="org">CLIENT OF COMPANY</div>
                  </div>
                  <div className="msg-desc">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </div>
                  <div className="msg-title">"Great Work"</div>
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
          <div  className="pop-3">
            <div className="ps">
              <div className="ps-l">
                <ShoppingCartOutlinedIcon />
                <div className="st wt">View Festival Offers</div>
              </div>
              <div className="ps-r">
                <Link to="/offers">
                  <div className="btn btn-o">View Offers</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
