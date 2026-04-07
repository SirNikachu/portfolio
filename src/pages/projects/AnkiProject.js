import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function AnkiProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>Anki Overdrive Car Management System</h1>
          <p className="project-subtitle">
            Auburn University · May 2025
          </p>
          <div className="project-tags">
            {["Python", "C++", "Bluetooth LE", "Tkinter", "GUI", "Embedded Systems"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with track / car setup photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Anki Overdrive cars are slot-free toy racecars that communicate over Bluetooth Low
              Energy (BLE) and navigate modular track sections using magnetic guidance rails.
              While they ship with a consumer app, that app only supports one car at a time and
              gives minimal programmatic control. This project built an entirely custom control
              stack — from raw BLE command parsing all the way up to a graphical dashboard —
              to enable coordinated multi-car management and full track visualization.
            </p>
          </section>

          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Track layout photo</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>GUI screenshot</span>
            </div>
          </div>

          <section className="project-section">
            <h2>What I Built</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">📶</span>
                <div>
                  <strong>BLE Multi-Car Control System</strong>
                  <p>
                    Built a Python and C++ BLE control layer integrating with the OverdriveServer
                    framework. Each car is identified by its unique BLE MAC address and assigned
                    a control thread. Commands — speed, lane change, u-turn, lights — are
                    dispatched as raw BLE characteristic writes using the Anki protocol spec,
                    enabling simultaneous control of multiple cars with no collision between
                    command streams.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🎮</span>
                <div>
                  <strong>Dual Input Interfaces</strong>
                  <p>
                    Implemented two control modes: a joystick interface that maps analog stick
                    deflection to speed and d-pad to lane changes, and a GUI interface with
                    sliders, buttons, and per-car panels. Both interfaces run concurrently,
                    letting one operator manage the full fleet from a single station.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🗺</span>
                <div>
                  <strong>Dynamic Track Scanner & Visualizer</strong>
                  <p>
                    As cars drive, they report the track piece ID beneath them via BLE. The system
                    parses these segment IDs against the Overdrive track piece library (straights,
                    curves, intersections) and dynamically reconstructs the full track layout as
                    a 2D map using Python and Tkinter — updating in real time as new sections
                    are discovered. This produces an accurate top-down map of the physical track
                    without any manual input.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video placeholder */}
          <div className="media-placeholder video">
            <span className="media-placeholder-icon">🎬</span>
            <span>Replace with demo video — multi-car control or track scan</span>
          </div>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["Python", "C++", "Bluetooth Low Energy (BLE)", "Tkinter", "OverdriveServer", "Joystick API", "Threading"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/indy" className="nav-btn nav-btn-secondary">← Previous: Indy Autonomous Challenge</Link>
          <Link to="/projects/grace" className="nav-btn">Next: GRACE Website →</Link>
        </div>
      </div>
    </div>
  );
}
