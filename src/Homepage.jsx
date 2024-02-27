import React from "react";

import ListItem from "./components/ListItem";
import criEquipments from "./assets/3.png";
import criAwardPresentation from "./assets/2.png";
import criAward from "./assets/1.png";
import logo from "./assets/logo.png";
import phone from "./assets/phone.svg";
import facebook from "./assets/facebook.svg";
import web from "./assets/web.svg";
import ImageContainer from "./components/ImageContainer";

import "./App.css";

function Homepage() {
  const items = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    "MARINE & DEFENCE",
    "METAL & MINING",
    "FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];

  return (
    <>
      <section className="accolades">
        <ImageContainer
          image={criAward}
          description="Image of C.R.I 4th National Energy Conservation award trophy"
          elementStyles="cri-award"
        />
        <div className="cri-award-info">
          <ImageContainer
            image={logo}
            description="C.R.I fluid system logo"
            elementStyles="cri-logo"
          />
          <p>
            <strong>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </strong>
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <ImageContainer
            image={criAwardPresentation}
            description="Image of C.R.I award presentation"
            elementStyles="award-presentation"
          />
          {/* <img src={criAwardPresentation} alt="Image of C.R.I award presentation" /> */}
          <p>
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </section>
      <section className="equipments-container">
        <div>
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </p>
          <ImageContainer
            image={criEquipments}
            description="Image of equipment of C.R.I"
            elementStyles="cri-equipments"
          />
          <p className="center">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr />
        <div className="list-item center">
          <p>
            <strong>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </strong>
          </p>
          <span>CHEMICALS & PROCESS</span>
          <ListItem items={items} />
        </div>
      </section>
      <footer>
        <div style={{ width: "25px" }}>
            <ImageContainer image={phone} description='C.R.I phone logo' />
          <p>
            Toll free <b>1800 200 1234</b>
          </p>
        </div>
        <div style={{ width: "25px" }}>
            <ImageContainer image={facebook} description='C.R.I facebook logo' />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div style={{ width: "25px" }}>
            <ImageContainer image={web} description='C.R.I website logo' />
          <p>www.crigroups.com</p>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
