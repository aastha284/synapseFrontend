import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Synocubix.png";
import img3 from "../images/CrazyMath.png";
import img4 from "../images/Samwaad.png";

const Formal = () => {
  return (
    <>
      <Navbar />
      <div className="events_main_div">
        <div className="events_div2">
          <img alt="crowd" src={img1} className="crowd1" />
        </div>
        <div className="events_div1">
          <p className="text2">DA ka Tyohar</p>
          <p className="text3">EVENTS</p>
          <p className="text4">
            Synapse is a celebration - a celebration of culture, technology and
            life. It is about realising the underlying inherent junction of the
            three in an electrifing atmosphere.
          </p>
        </div>
      </div>
      <div className="dance_main_div2">
        <center>
          <h1 className="heading_events">FORMAL EVENTS</h1>
        </center>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Synocubix</h2>
              <p>
                Come show off your cubing skills when time is your worst enemy
                !! ⏱️ Solve one of the toughest puzzles of the Rubik's Cube
                known to man! 🧩
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>CrazyMath</h2>
              <p>
                Solve the nuttiest of problems math has to offer and bring out
                the geek in you.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Samwaad</h2>
              <p>
                A great platform for the debaters with varied political
                preferences, perspectives, and personalities out there to
                display.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img4} alt="Image" />
          </div>
        </div>
        <center>
          <button className="register_btn">REGISTER</button>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default Formal;
