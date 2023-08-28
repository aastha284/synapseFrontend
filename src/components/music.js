import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Raga&Rhyme.png";
import img3 from "../images/RapBattle.jpg";
import img4 from "../images/Battleofbands.jpg";

const Music = () => {
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
        <h1 className="heading_events">Music</h1>
      </center>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Raga & Rhyme</h2>
              <p>
                Get into the symphonic ride of traditional, western and
                bollywood music and instruments. South your soul with various
                raagas and surs
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Rap Battle</h2>
              <p>
                Use your frustration, thoughts, and feelings as a weapon and lay
                it out through an open rap battle challenge, for the first time
                in DAIICT.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Battle of Bands</h2>
              <p>
                Experience the Thrill of the Battle where Bands Compete for
                Glory. Who Will be Crowned the Best Band? Find Out at the
                ultimate "Battle of the Bands!"
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

export default Music;
