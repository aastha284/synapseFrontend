import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Footloose.jpg";
import img3 from "../images/Naach.jpg";
import img4 from "../images/ShowDown.jpg";

const Dance = () => {
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
          <h1 className="heading_events">Dance</h1>
        </center>
        <div className="inner_div">
          <div class="card">
            <div class="overlay">
              <h2>Footloose</h2>
              <p>
                From Hip-Hop to Contemporary, Salsa to Breakdance, get ready to
                feel the contagious energy at Synapse '23
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Naach</h2>
              <p>
                Step into the vibrant world of Indian dance, where every move is
                a celebration of culture and tradition. Garba,
                Bhangra,Bharatnatyam, Kathak - it's all here at Naach
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>ShowDown</h2>
              <p>
                Get ready for some fiercely energetic dance face-offs !! Strike
                a pose and show the world you’ve got what it takes !!
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

export default Dance;
