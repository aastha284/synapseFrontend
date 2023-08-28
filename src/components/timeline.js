import React, { Component, useEffect, useState } from "react";
import "../css/events.css";
import "../css/home.css";
import "../css/dance.css";
import "../css/timeline.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/poster.png";
import img2 from "../images/Raga&Rhyme.png";
import img3 from "../images/RapBattle.jpg";
import img4 from "../images/Battleofbands.jpg";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(null);
  useEffect(() => {
    const timelineTitles = document.querySelectorAll(".timeline-title");
    const timelineDays = document.querySelectorAll(".timeline-day");

    timelineTitles.forEach((title) => {
      title.addEventListener("click", () => {
        const dayNumber = title.id.replace("timeline_title", "");

        // Hide all timelines
        timelineDays.forEach((day) => {
          day.style.display = "none";
        });

        // Show the clicked day's timeline
        const dayTimeline = document.querySelector(`.timeline-day${dayNumber}`);
        dayTimeline.style.display = "block";

        // Update the active day
        setActiveDay(dayNumber);
      });
    });
  }, []);

  useEffect(() => {
    const timelineTitles = document.querySelectorAll(".timeline-title");
    const timelineDays = document.querySelectorAll(".timeline-day");
    // Change background color of clicked day
    if (activeDay !== null) {
      timelineTitles.forEach((title) => {
        if (title.id === `timeline_title${activeDay}`) {
          title.classList.add("active");
        } else {
          title.classList.remove("active");
        }
      });
    }
  }, [activeDay]);

  return (
    <>
      <Navbar />
      <div className="timeline_main_div">
        <h3 className="sub_heading">Schedule of event</h3>
        <h1 className="heading">List of planned events that are expected.</h1>
        <div className="timeline">
          <div className="timeline_left_div">
            <div id="timeline_title1" className="timeline-title">
              <h2 className="day-number">Day 01</h2>
              <p className="days">Monday, May 08, 2023</p>
            </div>
            <div id="timeline_title2" className="timeline-title">
              <h2 className="day-number">Day 02</h2>
              <p className="days">Tuesday, May 09, 2023</p>
            </div>
            <div id="timeline_title3" className="timeline-title">
              <h2 className="day-number">Day 03</h2>
              <p className="days">Wednesday, May 10, 2023</p>
            </div>
            <div id="timeline_title4" className="timeline-title">
              <h2 className="day-number">Day 04</h2>
              <p className="days">Thursday, May 11, 2023</p>
            </div>
          </div>
          <div className="timeline_right_div">
            <div className="timeline-day1 timeline-day">
              <div className="event">
                <div className="time">5:00 PM - 6:00 PM</div>
                <div className="event-name">Graffiti Registration</div>
                <div className="venue">LP</div>
              </div>
              <div className="event">
                <div className="time">6:30 PM - 7:30 PM</div>
                <div className="event-name">Inaugral Night</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">7:45 PM onwards</div>
                <div className="event-name">Samay Raina</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">9:00 PM - 11:00 PM</div>
                <div className="event-name">Prom Night</div>
                <div className="venue">Basket Ball Court</div>
              </div>
              <div className="event">
                <div className="time">10:00 PM - 1:00 AM</div>
                <div className="event-name">Stage Play + MIME</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">1:00 AM onwards</div>
                <div className="event-name">DJ wars</div>
                <div className="venue">OAT</div>
              </div>
            </div>
            <div className="timeline-day2 timeline-day">
              <div className="event">
                <div className="time">9:00 AM - 12:00 PM</div>
                <div className="event-name">Raaga Prelims</div>
                <div className="venue">LT-2</div>
              </div>
              <div className="event">
                <div className="time">9:00 AM - 7:00 PM</div>
                <div className="event-name">Battle Drome</div>
                <div className="venue">LAB & LT-3</div>
              </div>
              <div className="event">
                <div className="time">10:00 AM onwards</div>
                <div className="event-name">Conceive</div>
                <div className="venue">Cafetaria</div>
              </div>
              <div className="event">
                <div className="time">10:00 AM - 1:00 PM</div>
                <div className="event-name">Crimes and Clues</div>
                <div className="venue">LAB</div>
              </div>
              <div className="event">
                <div className="time">10:30 AM - 2:30 AM</div>
                <div className="event-name">Carzy Maths</div>
                <div className="venue">Mini Auditorium</div>
              </div>
              <div className="event">
                <div className="time">11:00 AM - 12:30 PM</div>
                <div className="event-name">Shailee Jumble Word</div>
                <div className="venue">LT-1</div>
              </div>
              <div className="event">
                <div className="time">12:30 PM - 2:30 PM</div>
                <div className="event-name">Shailee Poem Competition</div>
                <div className="venue">LT-1</div>
              </div>
              <div className="event">
                <div className="time">3:00 PM - 6:00 PM</div>
                <div className="event-name">Code Mutant</div>
                <div className="venue">LAB</div>
              </div>
              <div className="event">
                <div className="time">3:00 PM - 5:00 PM</div>
                <div className="event-name">Gir Poaching Case</div>
                <div className="venue">CEP</div>
              </div>
              <div className="event">
                <div className="time">3:30 PM - 5:30 PM</div>
                <div className="event-name">Open Mic</div>
                <div className="venue">Backside of Cafetaria</div>
              </div>
              <div className="event">
                <div className="time">4:00 PM - 7:00 PM</div>
                <div className="event-name">Mono Acting</div>
                <div className="venue">LT-2</div>
              </div>
              <div className="event">
                <div className="time">5:00 PM - 7:30 PM</div>
                <div className="event-name">Rampage</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">6:00 PM</div>
                <div className="event-name">Memenation</div>
                <div className="venue">MemeUpload</div>
              </div>
              <div className="event">
                <div className="time">7:00 PM onwards</div>
                <div className="event-name">Aseem Sharma</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">8:00 PM onwards</div>
                <div className="event-name">Vishal Mishra</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">12:00 AM onwards</div>
                <div className="event-name">Raaga Finals</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">2:30 AM onwards</div>
                <div className="event-name">Battle of Bands</div>
                <div className="venue">OAT</div>
              </div>
            </div>
            <div className="timeline-day3 timeline-day">
              <div className="event">
                <div className="time">9:00 AM - 5:00 PM</div>
                <div className="event-name">Synocubix</div>
                <div className="venue">LT-3</div>
              </div>
              <div className="event">
                <div className="time">6:30 PM - 7:30 PM</div>
                <div className="event-name">Showdown Prelims</div>
                <div className="venue">CEP 1st Floor</div>
              </div>
              <div className="event">
                <div className="time">9:00 AM - 7:00 PM</div>
                <div className="event-name">Battle Drome</div>
                <div className="venue">LAB & LT-2</div>
              </div>
              <div className="event">
                <div className="time">11:00 AM - 4:00 PM</div>
                <div className="event-name">Hunger Hikes</div>
                <div className="venue">Backside Cafetaria</div>
              </div>
              <div className="event">
                <div className="time">12:00 PM - 3:00 PM</div>
                <div className="event-name">Samwaad</div>
                <div className="venue">CEP 104,105,106,107</div>
              </div>
              <div className="event">
                <div className="time">2:00 PM - 6:00 PM</div>
                <div className="event-name">Tech Hunt</div>
                <div className="venue">LAB</div>
              </div>
              <div className="event">
                <div className="time">3:00 PM - 5:00 PM</div>
                <div className="event-name">Nukkad Natak</div>
                <div className="venue">Front of CEP</div>
              </div>
              <div className="event">
                <div className="time">4:00 PM - 7:00 PM</div>
                <div className="event-name">Footloose Finals</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">7:00 PM - 7:30 PM</div>
                <div className="event-name">Music Club</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">7:30 PM onwards</div>
                <div className="event-name">Sanchin Jigar</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">10:00 PM onwards</div>
                <div className="event-name">EDM night-Vanmoon</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">12:00 AM - 2:00 AM</div>
                <div className="event-name">Showdown Finals</div>
                <div className="venue">CEP/Cafetaria</div>
              </div>
            </div>
            <div className="timeline-day4 timeline-day">
              <div className="event">
                <div className="time">8:30 AM - 2:00 PM</div>
                <div className="event-name">Naac Prelims</div>
                <div className="venue">SAC-1</div>
              </div>
              <div className="event">
                <div className="time">9:00 AM - 7:00 PM</div>
                <div className="event-name">Battle Drome</div>
                <div className="venue">LAB & LT-2</div>
              </div>
              <div className="event">
                <div className="time">9:00 AM - 12:00 PM</div>
                <div className="event-name">Anweshan</div>
                <div className="venue">Mini Auditorium</div>
              </div>
              <div className="event">
                <div className="time">10:00 AM - 1:00 PM</div>
                <div className="event-name">Stroke of Genius</div>
                <div className="venue">LT Garden</div>
              </div>
              <div className="event">
                <div className="time">2:00 PM - 5:00 PM</div>
                <div className="event-name">Quiz-A-Palloza</div>
                <div className="venue">Mini Auditorium</div>
              </div>
              <div className="event">
                <div className="time">10:00 PM onwards</div>
                <div className="event-name">EDM night-Vanmoon</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">2:00 PM - 4:00 PM</div>
                <div className="event-name">Alumni Talk</div>
                <div className="venue">LT-1</div>
              </div>
              <div className="event">
                <div className="time">3:00 PM - 5:00 PM</div>
                <div className="event-name">KTM Bike Show</div>
                <div className="venue">Faculty Parking</div>
              </div>
              <div className="event">
                <div className="time">4:00 PM - 7:00 PM</div>
                <div className="event-name">Naach Finals</div>
                <div className="venue">OAT</div>
              </div>
              <div className="event">
                <div className="time">4:00 PM - 6:00 PM</div>
                <div className="event-name">Rap Battle</div>
                <div className="venue">Front of CEP</div>
              </div>
              <div className="event">
                <div className="time">7:00 PM - 7:30 PM</div>
                <div className="event-name">Fatpicric</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">8:00 PM onwards</div>
                <div className="event-name">Jonita Gandhi</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">10:00 PM onwards</div>
                <div className="event-name">EDM night-Swizzle</div>
                <div className="venue">Ground</div>
              </div>
              <div className="event">
                <div className="time">11:30 PM onwards</div>
                <div className="event-name">DJ-Night</div>
                <div className="venue">OAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Timeline;
