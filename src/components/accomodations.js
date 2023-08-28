import React, { Component } from "react";
import "../css/accomodations.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/accomodations.png";

const Accomodations = () => {
    const containerStyle = {
        margin:'10vh 0vh 10vh 70vh'
    };
  return (
    <>
      <Navbar />
      <div className="acc_main_div">
        <div className="acc_main_div1">
          <img src={img1} alt="acc" />
        </div>
        <div className="acc_main_div2">
          <p className="acc-text">Accomodations</p>
        </div>
      </div>
      <div className="acc_main_div3">
        <div className="acc_details">
          <h3>1 Day</h3>
          <p>Price 700/-</p>
        </div>
        <div className="acc_details">
          <h3>2 Days</h3>
          <p>Price 1300/-</p>
        </div>
        <div className="acc_details">
          <h3>3 Days</h3>
          <p>Price 1800/-</p>
        </div>
        <div className="acc_details">
          <h3>4 Days</h3>
          <p>Price 2200/-</p>
        </div>
      </div>
      <div class="container" style={containerStyle}>
        <center>
          <h2>Book Accomodations</h2>
        </center>
        <form id="myForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="college">College Name:</label>
            <input type="text" id="college" name="college" required />
          </div>
          <div class="form-group">
            <label for="event">Number of Days:</label>
            <input type="text" id="event" name="event" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" required />
          </div>
          <button type="submit">
            Pay Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Accomodations;
