import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="flagship-project">
          <div className="flagship-header">
            <h3>Maitri — Independent Social Platform</h3>
            <p className="flagship-tagline">An independently designed and built social platform spanning backend, web and mobile applications.</p>
          </div>
          <div className="flagship-content">
            <div className="flagship-description">
              <h4>End-to-End Product Development</h4>
              <p>Maitri is my end-to-end product engineering project — from backend APIs and application architecture through web and mobile clients, deployment and ongoing product development.</p>
              <p>It gives me a different engineering perspective from enterprise development: making architectural and product decisions, building across the stack, shipping releases, and operating a real application.</p>
            </div>
            <div className="flagship-sidebar">
              <div className="architecture">
                <h4>My Role</h4>
                <p>Founder &amp; Independent Engineer</p>
              </div>
              <div className="project-links">
                <a href="https://www.maitri.social/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Maitri</a>
                <a href="https://play.google.com/store/apps/details?id=social.maitri.mandala" className="project-link" target="_blank" rel="noopener noreferrer">Google Play</a>
                <a href="https://apps.apple.com/app/maitri-by-mandala/id6802904809" className="project-link" target="_blank" rel="noopener noreferrer">App Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
