import React, { Component } from "react";
import "../css/footer.css";
import img1 from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={img1} alt="logo" />

        <p className="footer-links">
          <a href="#">Events</a> | <a href="#">Accomodations</a> |{" "}
          <a href="#">Timeline</a> | <a href="#"> Results</a>
        </p>

        <p className="footer-company-name">
          Copyright © 2023 <strong>Synapse</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Gandhinagar</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 74**9**258</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:sagar00001.co@gmail.com">synapse@daiict.ac.in</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Synapse</span>
          <strong>Synapse</strong> is a celebration - a celebration of culture,
          technology and life. It is about realising the underlying inherent
          junction of the three in an electrifying atmosphere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
