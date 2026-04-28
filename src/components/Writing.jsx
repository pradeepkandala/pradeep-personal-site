import './Writing.css'

const Writing = () => {
  const articles = [
    { title: 'Why Quiet Software Matters', description: 'Most software is designed for retention, not peace. I believe products should reduce noise, not manufacture it.' },
    { title: 'Dharma and Product Design', description: 'Restraint, responsibility, and consequences matter in product decisions. Sometimes what we choose not to build matters most.' },
    { title: 'AI, Responsibility, and Human Agency', description: 'The future of AI is not only capability—it is governance, alignment, and protecting human dignity.' },
    { title: 'Building Trust in an Addictive Internet', description: 'Trust is built when users are treated as people, not engagement metrics.' }
  ]

  return (
    <section id="writing" className="writing">
      <div className="writing-container">
        <h2>Writing / Thinking</h2>
        <p className="writing-intro">
          I write occasionally about technology, responsibility, civilization, and the systems we choose to normalize.
          Some thoughts deserve more than a timeline post.
        </p>
        <div className="writing-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing