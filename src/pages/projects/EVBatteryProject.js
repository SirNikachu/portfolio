import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function EVBatteryProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>EV Battery Research</h1>
          <p className="project-subtitle">
            Advanced Vehicle Technology Competitions · Under Prof. Mehmet Arik · October 2025 – December 2025
          </p>
          <div className="project-tags">
            {["Python", "AI / ML", "Genetic Algorithms", "PSO", "Diffusion Models", "Thermal Management", "EV Systems"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with battery pack / lab photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Electric vehicle battery packs are one of the most complex engineering systems in
              a modern EV — hundreds or thousands of cells arranged in series/parallel
              configurations, generating significant heat during charge and discharge cycles.
              Thermal management is the critical challenge: too hot and cells degrade faster,
              lose capacity, and risk thermal runaway; too cold and they underperform.
            </p>
            <p>
              As part of Auburn's EcoCAR EV Challenge team under Prof. Mehmet Arik, I applied
              AI-driven optimization techniques to the battery pack layout problem —
              systematically exploring the design space to find configurations that minimize
              thermal hotspots while maximizing energy density.
            </p>
          </section>

          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Thermal simulation / heatmap</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Battery pack layout diagram</span>
            </div>
          </div>

          <section className="project-section">
            <h2>The Problem</h2>
            <p>
              Designing a battery pack layout is a high-dimensional optimization problem.
              Variables include cell arrangement geometry, cooling channel placement, inter-cell
              spacing, and thermal interface materials. The search space is enormous — even a
              modest pack design has thousands of feasible configurations. Traditional
              engineering intuition and manual iteration can't efficiently explore this space.
              AI-driven optimization methods can.
            </p>
          </section>

          <section className="project-section">
            <h2>What I Did</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">🔋</span>
                <div>
                  <strong>Next-Gen Battery Research</strong>
                  <p>
                    Conducted a literature review and technical analysis of next-generation
                    Li-Ion and solid-state battery chemistries, focusing on thermal behavior,
                    degradation mechanisms, and thermal management strategies. Identified the
                    key thermal constraints driving pack design for the EcoCAR competition
                    vehicle platform.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🧬</span>
                <div>
                  <strong>Genetic Algorithm (GA) Optimization</strong>
                  <p>
                    Implemented a Genetic Algorithm to evolve battery pack layouts over multiple
                    generations. Each "chromosome" encoded a candidate layout configuration;
                    fitness was evaluated based on simulated peak temperature and energy density.
                    The GA efficiently converged on high-performing regions of the design space
                    that manual search would have missed.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🌀</span>
                <div>
                  <strong>Particle Swarm Optimization (PSO)</strong>
                  <p>
                    Applied PSO as a complementary optimizer, treating each particle as a
                    candidate pack layout moving through the design space. PSO's swarm
                    intelligence was particularly effective at fine-tuning cooling channel
                    geometry once GA had identified promising layout regions.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🤖</span>
                <div>
                  <strong>Diffusion Model for Layout Generation</strong>
                  <p>
                    Explored the use of diffusion models to generate novel battery pack layout
                    candidates — training on the evaluated design space to generate high-quality
                    candidates directly, reducing the number of fitness evaluations needed and
                    accelerating convergence toward optimal designs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video / results placeholder */}
          <div className="media-placeholder video">
            <span className="media-placeholder-icon">🎬</span>
            <span>Replace with thermal simulation video or results presentation</span>
          </div>

          <section className="project-section">
            <h2>Results</h2>
            <div className="results-grid">
              <div className="result-card">
                <h3>−5°C</h3>
                <p>Reduction in average pack temperature during peak discharge</p>
              </div>
              <div className="result-card">
                <h3>35</h3>
                <p>Unique battery pack layouts explored by the optimizer</p>
              </div>
              <div className="result-card">
                <h3>Top 3</h3>
                <p>Optimal designs identified for thermal performance & energy density</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["Python", "Genetic Algorithms (GA)", "Particle Swarm Optimization (PSO)", "Diffusion Models", "Thermal Simulation", "NumPy", "Matplotlib"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/combat-robot" className="nav-btn nav-btn-secondary">← Previous: Combat Robot</Link>
          <Link to="/portfolio" className="nav-btn">Back to All Projects →</Link>
        </div>
      </div>
    </div>
  );
}
