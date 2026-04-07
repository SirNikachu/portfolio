import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function CombatRobotProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>VEX Robotics</h1>
          <p className="project-subtitle">
            Auburn University · VEXU Auburn Robotics · August 2023 – Present
          </p>
          <div className="project-tags">
            {["C++", "Autodesk Inventor", "CAD", "PID Control", "Odometry", "Embedded Systems", "Technical Documentation"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with robot hero photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              I've competed in VEX Robotics for 5 years — 4 years through high school and
              continuing into college with VEXU Auburn Robotics. Over that time I've built
              and programmed robots across multiple game seasons, developing deep experience
              in mechanical design, autonomous programming, and real-time control systems.
            </p>
            <p>
              VEX U is the collegiate division — teams design and build two fully custom
              robots from scratch each season to compete in a new game challenge. Unlike
              high school VEX, VEX U allows custom fabrication, any programming language,
              and significantly more design freedom. Every robot is a full engineering
              project: mechanical design, electronics integration, and software — all
              built and iterated on within a single season. 
            </p>
          </section>

          {/* Photo grid */}
          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Robot on field photo</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>CAD model / render</span>
            </div>
          </div>

          <section className="project-section">
            <h2>What I Built</h2>
            <div className="project-bullets">

              <div className="bullet-item">
                <span className="bullet-icon">📐</span>
                <div>
                  <strong>Full Robot CAD in Autodesk Inventor</strong>
                  <p>
                    Designed complete robot assemblies in Autodesk Inventor, modeling the
                    drivetrain, intake mechanisms, scoring subsystems, and structural chassis.
                    Each design went through multiple iterations — adjusting geometry for
                    weight distribution, center of mass, and mechanical advantage before
                    committing to fabrication. Generated detailed technical drawings for
                    every custom part, specifying tolerances and material for machining
                    and 3D printing.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-icon">💻</span>
                <div>
                  <strong>Autonomous Programming in C++</strong>
                  <p>
                    Wrote all autonomous routines in C++ using the PROS (Purdue Robotics
                    Operating System) framework. Autonomous routines must execute a precise
                    sequence of movements and actions in under 15 seconds with no driver
                    input — requiring accurate motion control and reliable state management
                    to score consistently across different field conditions.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-icon">🎯</span>
                <div>
                  <strong>PID Controllers for Motion Control</strong>
                  <p>
                    Implemented PID (Proportional-Integral-Derivative) controllers for
                    precise drive control — tuning separate PID loops for forward/backward
                    translation and point turns. Tuned Kp, Ki, and Kd gains empirically
                    through iterative testing, achieving consistent stopping accuracy within
                    a few millimeters across straight-line moves and turns. Also applied
                    PID to mechanism control for consistent, repeatable subsystem actuation.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-icon">📍</span>
                <div>
                  <strong>Real-Time Localization with Odometry</strong>
                  <p>
                    Built a full odometry system for real-time robot position tracking on
                    the field. Using two perpendicular tracking wheels (dead wheels) and
                    an IMU, the system integrates wheel encoder deltas at high frequency
                    to maintain a continuous (x, y, θ) pose estimate throughout the
                    autonomous period. This enabled absolute-position-based motion commands —
                    "drive to coordinate (24, 48)" — rather than purely relative moves,
                    dramatically improving autonomous consistency and allowing complex
                    multi-point paths to be executed reliably.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-icon">📓</span>
                <div>
                  <strong>500+ Page Engineering Notebook</strong>
                  <p>
                    In VEXU, I took on the role of Documentation Lead, maintaining a 500+
                    page engineering notebook — one of the most heavily weighted judged
                    criteria in VEX competitions. The notebook documented every design
                    decision using the full engineering design process: problem
                    identification, brainstorming, design matrix evaluation, CAD
                    development, build notes, test results, and iteration rationale across
                    the entire season.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Video placeholder */}
          <div className="media-placeholder video">
            <span className="media-placeholder-icon">🎬</span>
            <span>Replace with autonomous run or match video</span>
          </div>

          {/* Additional photo grid */}
          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Engineering notebook pages</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Competition / awards photo</span>
            </div>
          </div>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["C++", "PROS Framework", "PID Control", "Odometry", "IMU / Encoder Fusion", "Autodesk Inventor", "CAD / Technical Drawings", "Engineering Notebook"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/grace" className="nav-btn nav-btn-secondary">← Previous: GRACE Website</Link>
          <Link to="/projects/ev-battery" className="nav-btn">Next: EV Battery Research →</Link>
        </div>
      </div>
    </div>
  );
}