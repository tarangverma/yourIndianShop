import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtUp from "./components/ArtUp";
import ArtistSignIn from "./components/ArtistSignIn";
import Shipment from "./pages/dashboard/Shipment";
import Shop from "./pages/dashboard/Shop";
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

export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div>
      <MyContext.Provider
        value={{
          isLogin,
          setIsLogin,
          user,
          setUser,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<ArtUp />} />
            <Route path="/signIn" element={<ArtistSignIn />} />
            <Route path="/plan" element={<PlanPage />} />
            {/* <Route path="/dashboard/" element={<Dashboard />} /> */}
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
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
};

export default App;
