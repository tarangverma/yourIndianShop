import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtUp from "./components/ArtUp";
import ArtistSignIn from "./components/ArtistSignIn";
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
    </div>
  );
};

export default App;
