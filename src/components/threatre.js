import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Mime.jpg";
import img3 from "../images/nukkadNaatak.png";
import img4 from "../images/StagePlay.jpg";

const Threatre = () => {
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
          <h1 className="heading_events">Threatre</h1>
        </center>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Mime</h2>
              <p>
                "Let actions speak louder than words" !! MIME OUT LOUD ~ Get
                ready to see the best art of mime at Synapse '23
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Nukkad Natak</h2>
              <p>
                Witness the conventional street play, a bold portrayal of the
                stigmas of society. Add fire to your nerve and put up a stand
                with courage and fervor.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Stage Play</h2>
              <p>Set the stage alive at the stage play event</p>
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

export default Threatre;
