import React, { Component } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import "../css/result.css";
import Navbar from "./navbar";
import Footer from "./footer";
const data = [
  {
    _id: "64cf31db2360b8b7e37004e9",
    contestantName: "Ravi Shah",
    position: "First",
    eventName: "Footloose",
    __v: 0,
  },
  {
    _id: "64cf31eb2360b8b7e37006ee",
    contestantName: "Arjun Gupta",
    position: "Second",
    eventName: "Footloose",
    __v: 0,
  },
  {
    _id: "64cf31fc2360b8b7e37008d9",
    contestantName: "Swati Khanna",
    position: "Third",
    eventName: "Footloose",
    __v: 0,
  },
  {
    _id: "64cf32112360b8b7e3700b00",
    contestantName: "Ishita Joshi",
    position: "First",
    eventName: "Raga & Ryme",
    __v: 0,
  },
  {
    _id: "64cf322f2360b8b7e3700e3d",
    contestantName: "Aisha Singh",
    position: "Second",
    eventName: "Raga & Ryme",
    __v: 0,
  },
  {
    _id: "64cf32682360b8b7e370135a",
    contestantName: "Arya Verma",
    position: "Third",
    eventName: "Raga & Ryme",
    __v: 0,
  },
];

const Result = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <center>
          <h1>Congratulation to the Winners!</h1>
        </center>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Event</div>
            <div class="col col-2">Contestant Name</div>
            <div class="col col-3">Position</div>
          </li>
          {data.map((value) => {
            return (
              <>
                <li class="table-row">
                  <div class="col col-1" data-label="Job Id">
                    {value.eventName}
                  </div>
                  <div class="col col-2" data-label="Customer Name">
                    {value.contestantName}
                  </div>
                  <div class="col col-3" data-label="Amount">
                    {value.position}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Result;
