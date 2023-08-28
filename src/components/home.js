import React, { Component } from "react";
import "../css/home.css";
import img2 from "../images/crowd.jpg";
import img3 from "../images/colorful-stage-with-man-standing-front-it-drum-set-stage.jpg";
import img4 from "../images/professional-dj-woman-entertaining-night.jpg";
import img5 from "../images/unrecognizable-person-photographing-with-smart-phone-stage-performers-music-festival.jpg";
import img6 from "../images/dancing-concert-while-singer-is-performing-surrounded-with-lights.jpg";
import img7 from "../images/concert.png";
import img8 from "../images/JonitaGandhi.png";
import img9 from "../images/SachinJigar.png";
import img10 from "../images/VishalMishra.png";
import img11 from "../images/SamayRaina.png";
import img12 from "../images/DjSwizle.png";
import img13 from "../images/DjVanmoon.png";
import img14 from "../images/Amway.png";
import img15 from "../images/ClimateChangeDepartment.jpg";
import img16 from "../images/cubelelo.png";
import img17 from "../images/DST.jpg";
import img18 from "../images/Flashy.jpeg";
import img19 from "../images/GEDA.jpg";
import img20 from "../images/gfg.jpeg";
import img21 from "../images/Gil.png";
import img22 from "../images/glucose.jpeg";
import img23 from "../images/GujaratGas.png";
import img24 from "../images/GUJCOST-Logo.jpg";
import img25 from "../images/icici.jpg";
import img26 from "../images/indianbeautyinsititue.png";
import img27 from "../images/KCI.jpeg";
import img28 from "../images/Kd.jpg";
import img29 from "../images/KTM.jpg";
import img30 from "../images/Monster.jpg";
import img31 from "../images/Mukta.png";
import img32 from "../images/rrKabel.png";
import img33 from "../images/Sabarmati.png";
import img34 from "../images/Shreeji.jpeg";
import img35 from "../images/swiggy.png";
import img36 from "../images/Trionic.png";
import img37 from "../images/unity.png";
import Navbar from "./navbar";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_main_div">
        <div className="home_div1">
          <p className="text2">Unforgettable . Vibrant </p>
          <p className="text1">
            Experience Synapse, Where events come alive <br />
            2024
          </p>
        </div>
      </div>
      <img alt="crowd" src={img2} className="home_div2" />
      <div className="home_main_div2">
        <div className="photos_div">
          <div className="photos1">
            <img alt="crowd" src={img3} className="img3" />
            <img alt="crowd" src={img4} className="img4" />
          </div>
          <br />
          <div className="btw_img">
            <p id="text_div">
              <span id="tenPlus">10+</span>
              <br />
              Years of Experience
            </p>
          </div>
          <div className="photos2">
            <img alt="crowd" src={img5} className="img5" />
            <img alt="crowd" src={img6} className="img6" />
          </div>
        </div>
        <div className="text_div">
          <p id="top_college_events">Top College Events</p>
          <p id="welcome">Welcome to the Gujarat's largest college festival</p>
          <div id="text_seperator"></div>
          <p className="div2_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <ul className="u_list">
            <li className="u_listitems">Lorem ipsum dolor sit amet</li>
            <li className="u_listitems">Lorem ipsum dolor sit amet</li>
            <li className="u_listitems">Lorem ipsum dolor sit amet</li>
            <li className="u_listitems">Lorem ipsum dolor sit amet</li>
          </ul>
          <br />
          <p className="div2_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu.
          </p>
        </div>
      </div>
      <div className="home_main_div3">
        <img alt="concert" src={img7} id="img7" />
        <div className="div1_3">
          <div className="cards">
            <p className="cards_text">
              <span className="cards_number">20+</span>
              <br />
              Artists
            </p>
          </div>
          <div className="cards">
            <p className="cards_text">
              <span className="cards_number">90+</span>
              <br />
              Hours of fun
            </p>
          </div>
          <div className="cards">
            <p className="cards_text">
              <span className="cards_number">1000+</span>
              <br />
              Tickets
            </p>
          </div>
          <div className="cards">
            <p className="cards_text">
              <span className="cards_number">50+</span>
              <br />
              Events
            </p>
          </div>
        </div>
      </div>
      <div className="home_main_div4">
        <h3 className="sub_heading">
          Stand Up Comedians ,Composers, Singers & DJs
        </h3>
        <h1 className="heading">Event Artists Line Up for 2023</h1>
        <div className="photos_container">
          <img alt="jonita" src={img8} className="upimages" />
          <img alt="sachinjigar" src={img9} className="downimages" />
          <img alt="vishalmishra" src={img10} className="upimages" />
          <img alt="samayraina" src={img11} className="downimages" />
          <img alt="djswizle" src={img12} className="upimages" />
          <img alt="djvanmoon" src={img13} className="downimages" />
        </div>
      </div>
      <div className="home_main_div5">
        <h3 className="sub_heading">Sponsers</h3>
        <h1 className="heading">27+ World's Leading Companies with Us.</h1>
        <div className="sponser_images_container">
          <div className="sponsers_images_inner_container">
            <img src={img14} className="sponser_images" />
            <img src={img15} className="sponser_images" />
            <img src={img16} className="sponser_images" />
            <img src={img17} className="sponser_images" />
            <img src={img18} className="sponser_images" />
            <img src={img19} className="sponser_images" />
            <img src={img20} className="sponser_images" />
            <img src={img21} className="sponser_images" />
          </div>
          <div className="sponsers_images_inner_container">
            <img src={img22} className="sponser_images" />
            <img src={img23} className="sponser_images" />
            <img src={img24} className="sponser_images" />
            <img src={img25} className="sponser_images" />
            <img src={img26} className="sponser_images" />
            <img src={img27} className="sponser_images" />
            <img src={img28} className="sponser_images" />
            <img src={img29} className="sponser_images" />
          </div>
          <div className="sponsers_images_inner_container">
            <img src={img31} className="sponser_images" />
            <img src={img32} className="sponser_images" />
            <img src={img33} className="sponser_images" />
            <img src={img34} className="sponser_images" />
            <img src={img35} className="sponser_images" />
            <img src={img36} className="sponser_images" />
            <img src={img37} className="sponser_images" />
            <img src={img30} className="sponser_images" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
