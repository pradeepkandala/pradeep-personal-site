import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>
          For serious conversations around engineering, product building, AI governance, or thoughtful collaboration.
        </p>
        <p>
          I value depth over volume.
        </p>
        <p>
          If the work matters, I am always open to the conversation.
        </p>
        <div className="contact-links">
          <a href="mailto:pradeep@example.com">Email</a>
          <a href="https://linkedin.com/in/pradeepkandala">LinkedIn</a>
          <a href="https://github.com/pradeepkandala">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact