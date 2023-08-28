import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import "../css/fun.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/battleDrome.png";
import img3 from "../images/HungerHikes.png";
import img4 from "../images/CrimeAndClue.png";
import img5 from "../images/Memenation.png";
import img6 from "../images/reelMainFeel.png";
import img7 from "../images/OpenMic.jpg";

const Fun = () => {
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
      <div className="fun_main_div2">
        <center>
          <h1 className="heading_events">FUN</h1>
        </center>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Battle Drome</h2>
              <p>
                You are never too old for video games. Bring out the
                controllers, keep your thumbs rested, and join the showdown for
                ultimate glory....
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img2} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Hunger Hikes</h2>
              <p>
                "Come,eat,conquer!:trophy::hamburger::fries: Show them when the
                hunger hikes to what extent you will go to find food and with
                whom they are messing with:smirk:: hamburger::hotdog"
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img3} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Crimes & Clues</h2>
              <p>
                Borrow Sherlock Holmes’ hat and solve some of the trickiest
                riddles with Google by your side.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img4} alt="Image" />
          </div>
        </div>
        <div className="inner_div2">
          <div class="card">
            <div class="overlay">
              <h2>Memenation</h2>
              <p>
                The current online generation is all about being updated and the
                one with the best sense of humor will be the King of MemeNation.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img5} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Reel Mein Feel</h2>
              <p>
                UCapture the best moments of Synapse’23 on your phone and
                showcase your talented and creative minds to make a reel out of
                it.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img6} alt="Image" />
          </div>
          <div class="card">
            <div class="overlay">
              <h2>Open Mic</h2>
              <p>
                Tired of daily doses of classes? The Beacon Night brings you
                some sizzling trivia and open mic opportunities in this sizzling
                weather of cold. It can be a poem recital, song play , story
                recital or stand-up any talent you want to showcase.
              </p>
              <div class="buttons">
                <button class="button">Rule Book</button>
              </div>
            </div>
            <img src={img7} alt="Image" />
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

export default Fun;
