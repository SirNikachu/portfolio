import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function DroneProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>Autonomous Drone Localization</h1>
          <p className="project-subtitle">
            Auburn University · SURE 2025 · May 2025 – August 2025 · Under Prof. Bosen Lian
          </p>
          <div className="project-tags">
            {["Python", "C++", "Java", "MATLAB", "Simulink", "OptiTrack", "PX4", "MAVLink"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hero — drone photo */}
        <div className="project-hero">
          <img
            src={`${process.env.PUBLIC_URL}/media/drones.jpg`}
            alt="Autonomous drones in flight space"
            className="hero-img"
          />
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Standard drones rely on GPS for positioning — which completely fails indoors, in
              tunnels, or in any signal-blocked environment. As part of Auburn's Summer
              Undergraduate Research Experience (SURE 2025), I collaborated with James Byard
              under Prof. Bosen Lian to build an end-to-end indoor drone localization and
              control framework from scratch.
            </p>
            <p>
              The system uses an array of OptiTrack infrared motion capture cameras to track
              a drone's 3D position with sub-millimeter precision — no GPS required. The position
              data is fed into a PX4-based flight controller via MAVLink, closing the loop for
              autonomous indoor flight. Our work placed 2nd at the SURE poster presentation and
              earned a cash bonus award.
            </p>
          </section>

          {/* Camera placement + presentation photo */}
          <div className="media-grid">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/media/poster.png`}
                alt="SURE 2025 research poster"
                className="hero-img"
                style={{ height: "220px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/media/presentation.jpeg`}
                alt="SURE 2025 poster presentation"
                className="hero-img"
                style={{ height: "220px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>

          <section className="project-section">
            <h2>How It Works</h2>
            <p>
              OptiTrack cameras emit and detect infrared light reflected off retroreflective
              markers attached to the drone. The Motive software triangulates the drone's exact
              3D position and orientation at high frequency. This pose data is streamed over
              a local network to our Python middleware, which reformats it as MAVLink VISION_POSITION_ESTIMATE
              messages and sends it to the PX4 autopilot running on the drone. PX4 fuses this
              with its onboard IMU data to produce a stable, low-latency state estimate for
              autonomous control.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/media/camera_placement.png`}
              alt="OptiTrack camera placement diagram"
              style={{ width: "100%", borderRadius: "12px", marginTop: "16px" }}
            />
          </section>

          <section className="project-section">
            <h2>What I Built</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">📡</span>
                <div>
                  <strong>Real-Time Localization Framework</strong>
                  <p>
                    Designed and implemented the full pipeline from OptiTrack camera array → Python
                    middleware → MAVLink → PX4, achieving sub-millimeter tracking accuracy across
                    the defined indoor flight space. Handled clock synchronization, frame rate
                    matching, and coordinate frame transforms between OptiTrack's NED frame and
                    PX4's body frame.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🛠</span>
                <div>
                  <strong>Simulink & MATLAB Simulation Pipelines</strong>
                  <p>
                    Built simulation pipelines in Simulink to model drone kinematics (rigid body
                    dynamics, rotor thrust, drag) and validate PID and LQR control algorithms
                    before deploying to hardware. This cut algorithm deployment time by 83% by
                    eliminating iterative hardware debugging cycles.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🖥</span>
                <div>
                  <strong>Custom Python GUI</strong>
                  <p>
                    Built a real-time visualization GUI in Python that displays the drone's live
                    3D position, heading, altitude, and flight status. The GUI interfaces directly
                    with the OptiTrack data stream and PX4 telemetry over MAVLink, giving operators
                    full situational awareness during indoor flights.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🔗</span>
                <div>
                  <strong>Multi-Drone Architecture Groundwork</strong>
                  <p>
                    Designed the system architecture to support multiple drones simultaneously —
                    each assigned a unique OptiTrack rigid body ID and MAVLink system ID. Laid the
                    groundwork for future SLAM integration to extend operation beyond the camera
                    coverage area.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Results</h2>
            <div className="results-grid">
              <div className="result-card">
                <h3>&lt;1mm</h3>
                <p>Tracking accuracy in the indoor flight space</p>
              </div>
              <div className="result-card">
                <h3>83%</h3>
                <p>Reduction in algorithm deployment time via simulation</p>
              </div>
              <div className="result-card">
                <h3>2nd Place</h3>
                <p>SURE 2025 Poster Presentation + cash bonus award</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["Python", "C++", "Java", "MATLAB", "Simulink", "OptiTrack / Motive", "PX4 Autopilot", "MAVLink", "Ubuntu / Linux"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/indy" className="nav-btn">
            Next: Indy Autonomous Challenge →
          </Link>
        </div>
      </div>
    </div>
  );
}