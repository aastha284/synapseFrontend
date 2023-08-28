import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Prom.png";
import img3 from "../images/Shailee.png";
import img4 from "../images/QuizAPalloza.png";

const Informal = () => {
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
          <h1 className="heading_events">INFORMAL EVENTS</h1>
        </center>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Prom Night</h2>
              <p>
                Get those dashing shirts and elegant dresses out and grove to
                your favorite romances with your partners. This is one of those
                quintessentially iconic events you have to experience at least
                once.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Shailee</h2>
              <p>
                Prove that the pen is mightier than the sword and joins this
                literary feast. Get a chance to meet authors and participate in
                spelling bees and captivating workshops.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Quiz-A-Palloza</h2>
              <p>
                Boost your knowledge and logic with tailored quizzes, and meet
                top participants from India's best universities at Gujarat's
                best quizzing events!
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

export default Informal;
