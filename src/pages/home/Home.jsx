import React from "react";
import Nav from "../../components/Nav";
import "../../stylesheet/Home.css";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
const Home = () => {
  return (
    <>
      <div id="Site">
        <header>
          <Nav />
        </header>
        <section id="hero">
          <div className="hero-data">
            <h1>fast and secure courier for all your packages</h1>
            <h3>
              We carry clearness to intricacy, separating basic subtleties from
              confounded data to make modern, direct arrangements.{" "}
            </h3>
            <div className="btn btn-o">Explore More</div>
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
        </section>
        <section id="ship">
          <div id="sec-head">
            <div className="t-title">
              <span id="blue">SHIP</span>
              <span id="org"> NOW</span>
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
          </div>
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
            <div className="sc">
              <div id="org">
                <LocalShippingOutlinedIcon />
              </div>
              <div className="t-title">Land Transport</div>
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
              <div id="org">
                <AirplanemodeActiveOutlinedIcon />
              </div>
              <div className="t-title">Air Freight</div>
              <p>
                We help transport your load anyplace on the planet, making your
                business run easily regardless of where products.{" "}
              </p>
              <ul>
                <li>General Air Freight Products</li>
                <li>Charter Services</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
            <div className="sc">
              <div id="org">
                <DirectionsBoatOutlinedIcon />
              </div>
              <div className="t-title">Ocean Freight</div>
              <p>
                Sea cargo dispatches in excess of 5,500 holders per day to ports
                all around the globe, making us a top forwarder.{" "}
              </p>
              <ul>
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="bl-feature">
          <div className="ftr-cd">
            <div id="org">01</div>
            <div className="t-title">Quality Management System</div>
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
            <div className="t-title">E-commerce Logistics Solutions</div>
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
            <div className="t-title">Service & Aftermarket Logistics</div>
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
            <div className="t-title">Industry-Specific Competence</div>
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
      </div>
    </>
  );
};

export default Home;
