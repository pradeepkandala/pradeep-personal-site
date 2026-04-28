import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-name">Pradeep Kandala</h1>
        <p className="hero-title">Senior Software Engineer | Systems Builder | AI & Ethics Learner</p>
        <div className="hero-copy">
          <p>I build systems with responsibility.</p>
          <p>Seventeen years in engineering taught me that good technology is not only about scale—it is about trust, restraint, and long-term thinking.</p>
          <p>I work across backend systems, APIs, automation, and product building, while exploring how technology, ethics, and civilizational values must evolve together.</p>
        </div>
        <div className="hero-ctas">
          <a href="#projects" className="cta-button primary">View Projects</a>
          <a href="#writing" className="cta-button secondary">Read My Thinking</a>
        </div>
      </div>
    </section>
  )
}

export default Hero