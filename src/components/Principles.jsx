import './Principles.css'

const Principles = () => {
  const principles = [
    { title: 'Build with Dharma', description: 'Technology should serve responsibility, not impulse. Good systems are built with restraint, clarity, and consequences in mind.' },
    { title: 'Prefer Clarity Over Noise', description: 'Not every problem needs more features. Sometimes the highest form of design is what we choose not to build.' },
    { title: 'Attention Is Sacred', description: 'Products should not be designed to manipulate attention. Trust matters more than engagement metrics.' },
    { title: 'Long-Term > Short-Term', description: 'Quick growth without trust creates fragile systems. Durability matters.' },
    { title: 'AI Requires Governance', description: 'Capability without responsibility creates danger. AI must be aligned with human dignity, not only efficiency.' }
  ]

  return (
    <section id="principles" className="principles">
      <div className="principles-container">
        <h2>Principles</h2>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Principles