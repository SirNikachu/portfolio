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
            {["Python", "C++", "Bluetooth LE", "Tkinter", "GUI", "Path Planning", "Embedded Systems"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hero — cars photo */}
        <div className="project-hero">
          <img
            src={`${process.env.PUBLIC_URL}/media/cars.jpg`}
            alt="Anki Overdrive cars"
            className="hero-img"
          />
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
              to enable coordinated multi-car management, full track visualization, and
              autonomous path planning across the scanned track layout.
            </p>
          </section>

          {/* Track IRL + track scan side by side */}
          <div className="media-grid">
            <div>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "8px" }}>Physical Track</p>
              <img
                src={`${process.env.PUBLIC_URL}/media/trackirl.webp`}
                alt="Physical Anki Overdrive track"
                style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "8px" }}>Scanned Track Map</p>
              <img
                src={`${process.env.PUBLIC_URL}/media/trackscan.webp`}
                alt="Dynamically scanned track layout"
                style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "12px" }}
              />
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
              <div className="bullet-item">
                <span className="bullet-icon">🧭</span>
                <div>
                  <strong>Autonomous Path Planning</strong>
                  <p>
                    Using the dynamically scanned track map as a graph, implemented a path
                    planning layer that computes optimal routes between any two track segments.
                    The planner treats each track piece as a node and lane change points as
                    edges, enabling a car to autonomously navigate from its current position
                    to a target segment — issuing the correct sequence of lane changes and
                    speed commands to follow the planned route without driver input.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two vertical iPhone videos side by side */}
          <section className="project-section">
            <h2>Demo</h2>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <video
                controls
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  borderRadius: "12px",
                  aspectRatio: "9/16",
                }}
              >
                <source src={`${process.env.PUBLIC_URL}/media/ankitest1.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                controls
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  borderRadius: "12px",
                  aspectRatio: "9/16",
                }}
              >
                <source src={`${process.env.PUBLIC_URL}/media/ankitest2.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["Python", "C++", "Bluetooth Low Energy (BLE)", "Tkinter", "OverdriveServer", "Joystick API", "Path Planning", "Graph Traversal", "Threading"].map(t => (
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