import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-name">Pradeep Kumar Kandala</h1>
        <p className="hero-title">Senior Backend / Lead Software Engineer</p>
        <div className="hero-copy">
          <p>I design and modernize enterprise systems using Java, Spring Boot, microservices and distributed architectures.</p>
          <p>17+ years building backend systems across insurance, financial services, manufacturing and telecommunications — combining hands-on engineering, architecture and technical leadership.</p>
        </div>
        <div className="hero-ctas">
          <a href="#experience" className="cta-button primary">View Experience</a>
          <a href="#projects" className="cta-button secondary">View Projects</a>
        </div>
        <div className="hero-profile-actions">
          <a href={`${import.meta.env.BASE_URL}Pradeep_Kumar_Kandala_Master_CV.pdf`} className="hero-profile-link" download>Download Resume <span aria-hidden="true">↓</span></a>
          <a href="https://www.linkedin.com/in/kpradeepster/" className="hero-profile-link">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
