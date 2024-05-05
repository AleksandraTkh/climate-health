// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/HomePage";
import ClimateZonesMapPage from "./components/pages/ClimateZonesMapPage";
import LearnMorePage from "./components/pages/LearnMorePage";
import Indicators from "./components/pages/Indicators";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/indicators" element={<Indicators />} />
            <Route
              path="/climate-zones-map"
              element={<ClimateZonesMapPage />}
            />
            <Route path="/learn-more" element={<LearnMorePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
