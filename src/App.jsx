import React, { createContext, useState } from "react";
import "./App.css";
import "./Mq.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtUp from "./components/SignUp";
import ArtistSignIn from "./components/SignIn";
import Shipment from "./pages/dashboard/Shipment";
import Shop from "./pages/dashboard/Shop";
import WarehouseData from "./pages/dashboard/WarehouseData";
import Coupon from "./pages/dashboard/Coupon";
import IndianSites from "./pages/dashboard/IndianSites";
import Calc from "./components/Calc";
import AssistedPurchase from "./pages/dashboard/AssistedPurchase";
import ProductAcceptanceForm from "./pages/dashboard/ProductAcceptanceForm";
import Profile from "./pages/dashboard/Profile";
import ProhibitedItems from "./pages/dashboard/ProhibitedItems";
import Nav from "./components/Nav";
import Plans from "./components/Plans";
import PlanPage from "./pages/Plan/PlanPage";
import SelectWareHouse from "./pages/dashboard/SelectWareHouse";
import SingleProduct from "./components/SingleProduct";
import Locker from "./pages/dashboard/Locker";
import PAR from "./pages/dashboard/PAR";
import DispachRequest from "./components/DispachRequest";
import Wallete from "./pages/dashboard/Wallete";
import Paypal from "./components/Paypal";
import YourAssistedReq from "./components/YourAssistedReq";
import ReturnRequests from "./pages/dashboard/ReturnRequests";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import DispPl from "./pages/home/DispPl";
import About from "./pages/home/About";
import Service from "./pages/home/Service";
import Offer from "./pages/home/Offer";
import InSites from "./pages/home/InSites";
import Billing from "./pages/dashboard/Billing";

export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [planId, setPlanId] = useState(null);
  const [wh, setWh] = useState(null);
  const [wd, setWd] = useState(null);
  const [did, setDid] = useState(null);
  const [muldis,setMuldis]=useState(null);
  return (
    <div>
      <MyContext.Provider
        value={{
          isLogin,
          setIsLogin,
          user,
          setUser,
          planId,
          setPlanId,
          wh,
          setWh,
          wd,
          setWd,
          did,
          setDid,
          muldis, setMuldis
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/plan" element={<PlanPage isBill={false} />} />
            <Route path="/select-warehouse" element={<SelectWareHouse />} />
            <Route
              path="/dashboard/"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Dashboard />
                  </main>
                </div>
              }
            />
            <Route
              path="/Walete"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Wallete />
                  </main>
                </div>
              }
            />
            <Route
              path="/Billing"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Billing />
                  </main>
                </div>
              }
            />
            <Route
              path="/ReturnRequests"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <ReturnRequests />
                  </main>
                </div>
              }
            />
            <Route
              path="/PAR"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <PAR />
                  </main>
                </div>
              }
            />
            <Route
              path="/DispachRequests"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <DispachRequest />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/shipment"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Shipment />
                  </main>
                </div>
              }
            />
            <Route
              path="/warehousedata"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <WarehouseData />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/locker"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Locker />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/shop"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Shop />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/single-product"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <SingleProduct />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/assisted-purchase"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <AssistedPurchase />
                  </main>
                </div>
              }
            />
            <Route
              path="/YourAssistedReq"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <YourAssistedReq />
                  </main>
                </div>
              }
            />

            <Route
              path="/dashboard/product-acceptance"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <ProductAcceptanceForm />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/coupon"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Coupon />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/sites"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <IndianSites />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/prohibited-items"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <ProhibitedItems />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Profile />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/ship"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Shipment />
                  </main>
                </div>
              }
            />
            <Route
              path="/dashboard/calc"
              element={
                <div id="app" className="row">
                  <Sidebar />
                  <main>
                    <Calc />
                  </main>
                </div>
              }
            />
            <Route
              path="/calc"
              element={
                <main>
                  <Calc />
                </main>
              }
            />
            <Route
              path="/about"
              element={
                <main>
                  <About />
                </main>
              }
            />
            <Route
              path="/service"
              element={
                <main>
                  <Service />
                </main>
              }
            />
            <Route
              path="/offers"
              element={
                <main>
                  <Offer />
                </main>
              }
            />
            <Route
              path="/in-sites"
              element={
                <main>
                  <InSites />
                </main>
              }
            />
            <Route
              path="/disp-plan"
              element={
                <main>
                  <DispPl />
                </main>
              }
            />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
};

export default App;
