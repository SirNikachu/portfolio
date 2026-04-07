import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function IndyProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>Indy Autonomous Challenge</h1>
          <p className="project-subtitle">
            Auburn University · GPS & Vehicle Dynamics Laboratory (GAVLab) · January 2025 – February 2026
          </p>
          <div className="project-tags">
            {["ROS2", "C++", "Python", "LiDAR", "Radar", "GPS", "Camera Fusion", "UML", "Autonomous Racing"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* HERO — replace with your own photo */}
        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with car / track / team photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              The Indy Autonomous Challenge (IAC) is a university racing competition where teams
              field fully autonomous Dallara AV-21 racecars — the same chassis used in the Indy
              Lights series — and compete at real racetracks including Indianapolis Motor Speedway
              and Laguna Seca. There are no safety drivers. The cars run at full racing speeds,
              making it one of the most demanding proving grounds for autonomous vehicle technology
              in the world.
            </p>
            <p>
              I joined Auburn's Autonomous Tiger Racing (ATR) team as a Student Researcher in the
              GPS and Vehicle Dynamics Laboratory (GAVLab), contributing to the localization and
              motion planning systems that keep the car on track at speed.
            </p>
          </section>

          {/* Photo grid */}
          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>AV-21 racecar photo</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Team / lab photo</span>
            </div>
          </div>

          <section className="project-section">
            <h2>The Technical Challenge</h2>
            <p>
              Autonomous racing at high speeds is fundamentally different from low-speed autonomy.
              At racing speeds, sensor latency, localization drift, and planning delays that would
              be trivial in a parking lot become safety-critical. The AV-21 uses a suite of sensors —
              LiDAR, radar, GPS/GNSS, and cameras — that must be fused in real time to produce a
              reliable state estimate and safe trajectory.
            </p>
            <p>
              A key challenge is robustness: the car must handle sensor dropouts, adversarial
              conditions (other cars on track, variable lighting, track surface changes), and
              maintain timing guarantees on all software modules running in ROS2.
            </p>
          </section>

          <section className="project-section">
            <h2>My Contributions</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">🚗</span>
                <div>
                  <strong>Localization & Motion Planning Support</strong>
                  <p>
                    Supported development and testing of vehicle localization and motion planning
                    systems using multi-sensor fusion across LiDAR, radar, GPS/GNSS, and cameras.
                    Worked on improving state estimation robustness at racing speeds — where a
                    localization error of even a few centimeters can push the car outside its
                    safe corridor.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">⚙️</span>
                <div>
                  <strong>ROS2 Algorithm Development</strong>
                  <p>
                    Used ROS2, C++, and Python to improve the timing and robustness of localization
                    algorithms — optimizing node scheduling, reducing message latency in the
                    perception-to-planning pipeline, and ensuring deterministic behavior under
                    high CPU load conditions during competition.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">📐</span>
                <div>
                  <strong>UML System Architecture Diagrams</strong>
                  <p>
                    Created detailed UML diagrams documenting the relationships between hardware
                    components (sensor ECUs, compute platforms, actuators), sensor data flows,
                    and software module interfaces. These diagrams served as living documentation
                    for cross-functional team communication and onboarding new members.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video placeholder */}
          <div className="media-placeholder video">
            <span className="media-placeholder-icon">🎬</span>
            <span>Replace with competition / test run video</span>
          </div>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["ROS2", "C++", "Python", "LiDAR", "Radar", "GPS / GNSS", "Camera Fusion", "UML", "Ubuntu / Linux"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/drone" className="nav-btn nav-btn-secondary">← Previous: Autonomous Drone</Link>
          <Link to="/projects/anki" className="nav-btn">Next: Anki Overdrive →</Link>
        </div>
      </div>
    </div>
  );
}
