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
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 // Update the windowWidth state when the window is resized
 useEffect(() => {
   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   };

   window.addEventListener("resize", handleResize);

   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);

 // Determine the src for the img element based on the windowWidth
 const imgSrc = windowWidth < 600 ? "/banner/ph-sd.jpg" : "/home/shop.png";

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
         <div class="swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <Link to={"/disp-plan"}>
                 {windowWidth < 600 ? (
                   <img src={imgSrc} alt="Small Image" />
                 ) : (
                   <img src={imgSrc} alt="Large Image" />
                 )}
               </Link>
             </div>
             <div class="swiper-slide">
               <img src={"/banner/banner.png"} alt="no"></img>
             </div>
             <div class="swiper-slide">
               <img src={"/banner/banner2.png"} alt="no"></img>
             </div>
           </div>
         </div>{" "}
       </div>
       <div></div>
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
               WE PROVIDE A FREE INDIAN VIRTUAL ADDRESS. SIMPLY SIGN UP & GET IT
               TODAY.
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
             <span className="sites">Various Indian Sites</span>
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

       <div className="section-m">
         <div id="service-we-offer">
           <div className="ser-head">
             <center className="sh1">
               <h1 id="dg">
                 Services We
                 <span id="org" style={{ color: "var(--blue)" }}>
                   {" "}
                   Offer
                 </span>
               </h1>
               <img
                 className="service-img"
                 src="/home/service.png"
                 alt="no"
               ></img>
             </center>
           </div>
         </div>

         <div id="lnl">
           <div id="pop-ser">
             <div className="ps">
               <div className="ps-l">
                 <SellIcon />
               </div>
               <div className="ps-r">
                 <div className="st">Plans We Offer</div>
                 <div className="s-txt">
                   We offer a range of plans to suit your needs, from basic to
                   premium and business , ensuring affordability and
                   flexibility.
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
                   WE PROVIDE SEVERAL OFFER COUPONS. ALL YOU HAVE TO DO IS
                   BROWSE AND APPLY THE COUPON CODE OF YOUR CHOICE IN ORDER TO
                   REDEEM IT.{" "}
                 </div>
                 <div className="rm " id="org">
                   <Link to="/offers" rel="noopener noreferrer">
                     View Coupons
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="festival">
         <Link to="/in-sites">
           <img src="/banner/banner4.png" alt="no"></img>
         </Link>
       </div>
       <div id="service" className="ser-sec-2">
         <div className="ser-head">
           <center className="sh1">
             <h1 id="dg">
               Our Enterprise And Business
               <span id="org" style={{ color: "var(--blue)" }}>
                 {" "}
                 Plans
               </span>
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
       </div>
       <center>
         <Link to="/in-sites" className="btn btn-og">
           Shop Now
         </Link>
       </center>
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
           <div className="t-title border">Recognition </div>
         </div>
         <div className="reco">
           <div>
             <img src="./ftrd/1.png" alt="" />
           </div>
           <div class=" ">
             <img src="./ftrd/3.png" alt="" />
           </div>
           <div class=" ">
             <img src="./ftrd/4.png" alt="" />
           </div>

           <div class="">
             <img src="./ftrd/5.png" alt="" />
           </div>
           <div class=" ">
             <img src="./ftrd/6.png" alt="" />
           </div>
         </div>
       </section>

       <Footer />
     </div>
   </>
 );
};

export default Home;
