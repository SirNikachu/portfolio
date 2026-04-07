import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

export default function GraceProject() {
  return (
    <div className="project-page">
      <div className="container">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <h1>GRACE Project Website</h1>
          <p className="project-subtitle">
            Auburn University · Green-Reimaging of Agriculture in Controlled Environments · September 2024 – January 2026
          </p>
          <div className="project-tags">
            {["HTML", "CSS", "JavaScript", "Bootstrap", "Cascade CMS", "Responsive Design", "SEO"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-hero">
          <div className="media-placeholder photo">
            <span className="media-placeholder-icon">📷</span>
            <span>Replace with website screenshot or GRACE lab photo</span>
          </div>
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              GRACE (Green-Reimaging of Agriculture in Controlled Environments) is an Auburn
              University research initiative focused on sustainable indoor farming — growing
              crops in controlled environments using optimized lighting, nutrients, and climate
              systems to maximize yield while minimizing resource use.
            </p>
            <p>
              The project needed a professional public-facing website to communicate its
              research goals, team, publications, and findings to academics, funding agencies,
              and the public. I joined as a Website Developer Intern and led the design and
              development of the site from the ground up, working closely with the graphic
              design team to bring their visual direction into a production-ready web experience.
            </p>
          </section>

          <div className="media-grid">
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Desktop homepage screenshot</span>
            </div>
            <div className="media-placeholder small">
              <span className="media-placeholder-icon">📷</span>
              <span>Mobile view screenshot</span>
            </div>
          </div>

          <section className="project-section">
            <h2>What I Built</h2>
            <div className="project-bullets">
              <div className="bullet-item">
                <span className="bullet-icon">🌱</span>
                <div>
                  <strong>Full Responsive Website</strong>
                  <p>
                    Designed and developed the complete site using HTML, JavaScript, and
                    Bootstrap's grid system. Pages include a project overview, research team
                    profiles, publications, news, and contact sections — all built to Auburn
                    University's branding standards using Cascade CMS.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">📱</span>
                <div>
                  <strong>Mobile Performance Overhaul</strong>
                  <p>
                    Diagnosed the original mobile performance bottlenecks — unoptimized images,
                    render-blocking resources, non-responsive layout components — and systematically
                    resolved each one. Improved the Google PageSpeed mobile score from 60 to 92,
                    a 53% improvement, ensuring the site loads fast on any device.
                  </p>
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon">🎨</span>
                <div>
                  <strong>Design Team Collaboration</strong>
                  <p>
                    Worked in close collaboration with the GRACE graphic design team, translating
                    their mockups and brand guidelines into pixel-accurate, production-ready pages.
                    Maintained design consistency across all pages while adapting layouts for
                    responsive breakpoints.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Results</h2>
            <div className="results-grid">
              <div className="result-card">
                <h3>60 → 92</h3>
                <p>Google PageSpeed mobile score</p>
              </div>
              <div className="result-card">
                <h3>+53%</h3>
                <p>Mobile performance improvement</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Live Site</h2>
            <a
              href="https://www.auburn.edu/research/grace/"
              target="_blank"
              rel="noreferrer"
              className="live-link"
            >
              Visit the GRACE Project Website ↗
            </a>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              {["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Cascade CMS", "Google PageSpeed"].map(t => (
                <span className="tech-item" key={t}>{t}</span>
              ))}
            </div>
          </section>

        </div>

        <div className="project-nav">
          <Link to="/projects/anki" className="nav-btn nav-btn-secondary">← Previous: Anki Overdrive</Link>
          <Link to="/projects/combat-robot" className="nav-btn">Next: Combat Robot →</Link>
        </div>
      </div>
    </div>
  );
}
