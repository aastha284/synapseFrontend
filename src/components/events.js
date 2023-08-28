import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/dance.jpg";
import img3 from "../images/music.jpg";
import img4 from "../images/threatre.jpg";
import img5 from "../images/fashion.jpg";
import img6 from "../images/photo&Art.jpg";
import img7 from "../images/tech.jpg";
import img8 from "../images/fun.jpg";
import img9 from "../images/formal.jpg";
import img10 from "../images/informal.jpg";

const Events = () => {
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
      <div className="events_main_div2">
        <div className="inner_div2">
          <div className="events_image_container">
            <img src={img2} className="events-img" />
            <div class="text-overlay">
              <p>Dance</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img3} className="events-img" />
            <div class="text-overlay">
              <p>Music</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img4} className="events-img" />
            <div class="text-overlay">
              <p>threatre</p>
              <button class="button">Explore</button>
            </div>
          </div>
        </div>
        <div className="inner_div2">
          <div className="events_image_container">
            <img src={img5} className="events-img" />
            <div class="text-overlay">
              <p>Fashion</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img6} className="events-img" />
            <div class="text-overlay">
              <p>Photo & Art</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img7} className="events-img" />
            <div class="text-overlay">
              <p>Technical</p>
              <button class="button">Explore</button>
            </div>
          </div>
        </div>
        <div className="inner_div2">
          <div className="events_image_container">
            <img src={img8} className="events-img" />
            <div class="text-overlay">
              <p>Fun</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img9} className="events-img" />
            <div class="text-overlay">
              <p>Formal</p>
              <button class="button">Explore</button>
            </div>
          </div>
          <div className="events_image_container">
            <img src={img10} className="events-img" />
            <div class="text-overlay">
              <p>Informal</p>
              <button class="button">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
