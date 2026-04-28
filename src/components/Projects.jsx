import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        {/* Flagship Project: Mandala */}
        <div className="flagship-project">
          <div className="flagship-header">
            <h3>Mandala — A Calm Social Space for Trusted Circles</h3>
            <p className="flagship-tagline">Mandala is a values-first social platform built around trusted circles instead of algorithmic addiction.</p>
          </div>

          <div className="flagship-content">
            <div className="flagship-description">
              <p>It rejects infinite scroll, behavioral profiling, manipulative engagement loops, and attention farming.</p>
              <p>The goal is simple: create a quieter digital space where people can share meaningfully without being turned into products.</p>

              <h4>Why I Built It</h4>
              <p>Most social platforms optimize for retention, outrage, and surveillance.</p>
              <p>I wanted to explore the opposite: what if software was designed for peace instead of dependency? Mandala is my attempt to answer that.</p>

              <h4>Key Features</h4>
              <ul>
                <li>Finite feed with “All Caught Up”</li>
                <li>Circles for trusted communities</li>
                <li>Quiet posting and meaningful reactions</li>
                <li>Invite-first onboarding</li>
                <li>Calm social experience instead of engagement farming</li>
              </ul>
            </div>

            <div className="flagship-sidebar">
              <div className="architecture">
                <h4>Architecture</h4>
                <p>Built using Java, Spring Boot, PostgreSQL, React, Vite, JWT Authentication, Google Sign-In, Render, and Vercel.</p>
              </div>

              <div className="project-links">
                <a href="https://www.maitri.social/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="projects-grid">
          <div className="project-card">
            <h3>Backend Systems & API Engineering</h3>
            <p>Building reliable, scalable systems with Java and Spring Boot. Focus on production thinking, automation, and testing that ensures systems serve users without breaking.</p>
            <div className="project-focus">
              <strong>Focus:</strong> Java + Spring Boot APIs, production reliability, scale considerations, Python automation and testing.
            </div>
          </div>

          <div className="project-card">
            <h3>AI Ethics & Governance Notes</h3>
            <p>Exploring the responsible development of artificial intelligence. Examining alignment, human dignity, and governance frameworks that prioritize long-term societal benefit over short-term capabilities.</p>
            <div className="project-focus">
              <strong>Focus:</strong> AI alignment, responsibility frameworks, human dignity in technology, governance over blind acceleration.
            </div>
          </div>

          <div className="project-card">
            <h3>Writing & Reflections</h3>
            <p>Thoughts on technology&apos;s role in civilization. Exploring dharma principles in software design, the value of quiet systems, and systems thinking for complex problems.</p>
            <div className="project-focus">
              <strong>Focus:</strong> Dharma and technology, quiet software design, civilization and systems thinking.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects