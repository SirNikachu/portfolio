import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Socialicons } from "../components/socialicons";
import Headermain from "../header";

import "./App.css";

import { Home } from "../pages/home";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";
import { Portfolio } from "../pages/portfolio";
// Project subpages
import DroneProject from "../pages/projects/DroneProject";
import IndyProject from "../pages/projects/IndyProject";
import AnkiProject from "../pages/projects/AnkiProject";
import GraceProject from "../pages/projects/GraceProject";
import EVBatteryProject from "../pages/projects/EVBatteryProject";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Headermain />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={400} classNames="fade" unmountOnExit>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Project subpages */}
            <Route path="/projects/drone" element={<DroneProject />} />
            <Route path="/projects/indy" element={<IndyProject />} />
            <Route path="/projects/anki" element={<AnkiProject />} />
            <Route path="/projects/grace" element={<GraceProject />} />
            <Route path="/projects/combat-robot" element={<CombatRobotProject />} />
            <Route path="/projects/ev-battery" element={<EVBatteryProject />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Socialicons />
    </div>
  );
}

export default App;