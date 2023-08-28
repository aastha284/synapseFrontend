import React, { Component } from "react";
import "../css/register.css";
import Navbar from "./navbar";
import Footer from "./footer";
const Register = () => {
  return (
    <>
      <Navbar />
      <div class="container">
      <center><h2>Registration Form</h2></center>
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
        <label for="event">Event Name:</label>
        <input type="text" id="event" name="event" required/>
      </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" required />
          </div>
          <button type="submit" onClick={alert("Registered Successfully")}>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
