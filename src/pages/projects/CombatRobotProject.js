import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function CombatRobotProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>Combat Robot</h1>
          <p className="project-subtitle">
            Auburn University · Designer & Programmer · May 2024
          </p>
          <div className="project-tags">
            {["Autodesk Inventor", "CAD", "C++", "Mechanical Design", "Torque Analysis", "Embedded Systems"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with robot photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Combat robotics is engineering under pressure — literally. Robots enter an arena
              and attempt to disable, flip, or destroy each other. Every design decision has
              a direct, immediate consequence: a weapon that's too heavy slows the drivetrain;
              a chassis that's too thin shatters on the first hit; a weapon motor that's
              undersized never reaches full spin speed.
            </p>
            <p>
              I designed and programmed a combat robot for competition, taking ownership of
              both the mechanical weapon system design in Autodesk Inventor and the onboard
              control logic in C++. The design process was grounded in real physics — every
              major dimension was derived from force, torque, and energy calculations rather
              than guesswork.
            </p>
          </section>

          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>CAD model / render</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Physical robot photo</span>
            </div>
          </div>

          <section className="project-section">
            <h2>Design Process</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">⚔️</span>
                <div>
                  <strong>Weapon System Design</strong>
                  <p>
                    Designed the primary weapon — a spinning mass weapon — in Autodesk Inventor,
                    iterating on geometry to maximize rotational kinetic energy (KE = ½Iω²) while
                    staying within weight class limits. Calculated moment of inertia for each
                    design iteration and selected motor specs to achieve target spin-up time
                    within the opening seconds of a match.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">📐</span>
                <div>
                  <strong>Physics-Driven Optimization</strong>
                  <p>
                    Applied force analysis to size weapon mounts and chassis attachment points
                    for impact loads — modeling the impulse force during a weapon-on-armor hit
                    to ensure structural integrity. Used torque calculations to match gear ratios
                    between the weapon motor and weapon shaft, optimizing for both spin-up
                    acceleration and top-end angular velocity.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🔩</span>
                <div>
                  <strong>Full CAD Assembly</strong>
                  <p>
                    Built a complete parametric 3D assembly in Autodesk Inventor covering the
                    chassis, weapon assembly, drivetrain, electronics bay, and armor panels.
                    Generated technical drawings for each fabricated part, specifying tolerances,
                    material, and finish — ready for machining and 3D printing.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">💻</span>
                <div>
                  <strong>Onboard C++ Control</strong>
                  <p>
                    Wrote the robot's control firmware in C++, handling RC receiver input parsing,
                    weapon motor ESC control, drivetrain mixing (tank drive), and weapon
                    enable/disable safety logic. Implemented a spin-down interlock that prevents
                    the weapon from being re-armed until it has fully stopped — a required safety
                    feature in competition rules.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video placeholder */}
          <div className="media-placeholder video">
            <span className="media-placeholder-icon">🎬</span>
            <span>Replace with competition / test video</span>
          </div>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["Autodesk Inventor", "CAD / Technical Drawings", "C++", "Embedded Firmware", "RC ESC Control", "Torque & Force Analysis"].map(t => (
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
