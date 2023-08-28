import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Tickets = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <center>
          <h2>Buy tickets</h2>
          <h3>To attends the events Pay 1200/-</h3>
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
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" required />
          </div>
          <button type="submit" onClick={alert("Registered Successfully")}>
            Pay Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Tickets;
