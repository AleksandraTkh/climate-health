import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout/Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <NavLink
        to="/"
        className="logo-container"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={logo} alt="Logo" className="logo" />
        <h1>Climate & Health</h1>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
              end
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/indicators"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Indicators
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/climate-zones-map"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Climate Zones Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learn-more"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Learn More
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
