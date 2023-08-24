import React from "react";
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
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<ArtUp />} />
          <Route path="/signIn" element={<ArtistSignIn />} />
        </Routes>
      </Router>
      <Router>
        <Routes>
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
          {/* <Route path="/dashboard/shipment" element={<Shipment/>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Groups from "./pages/Groups";
// import Forums from "./pages/Forums";
// import Dashboard from "./pages/Dashboard";
// import Members from "./pages/Members";
// import Social from "./pages/Social";

// const App = () => {
//   return (
//     <Router>
//       <div id="app" className="row">

//           <Sidebar />

//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/groups" element={<Groups />} />
//             <Route path="/forums" element={<Forums />} />
//             <Route path="/members" element={<Members />} />
//             <Route path="/social" element={<Social />} />
//           </Routes>
//         </main>
//       </div>
//       {/* <div id="app" className="row">
//         <aside>
//           <Sidebar />
//         </aside>
//         <main>
//             <Home />

//         </main>
//       </div> */}
//     </Router>
//   );
// };

// export default App;
