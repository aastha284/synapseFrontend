import React from "react";
import img1 from "../images/logo.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="#" className="nav_logo">
        <img alt="logo" src={img1} />
      </a>

      <ul className="nav_menu">
        <li className="nav_item">
          <a href="#" className="nav_link">
            Events
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Accomodations
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Timeline
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Results
          </a>
        </li>
      </ul>

      <button className="nav_btn">BUY TICKETS</button>
    </div>
  );
};

export default Navbar;
