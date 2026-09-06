import './Writing.css'

const Writing = () => {
  const expertise = [
    { title: 'Backend & Distributed Systems', description: 'Java, Spring Boot, Spring MVC, Spring Batch, Microservices, REST APIs and Kafka.' },
    { title: 'Data & Persistence', description: 'Oracle, PL/SQL, MongoDB, MySQL, SQL Server, JPA and Hibernate.' },
    { title: 'Security & Testing', description: 'Spring Security, OAuth, JUnit and Mockito.' },
    { title: 'Delivery & Production Support', description: 'Jenkins, Gradle, Maven, Git/GitHub, SonarQube, PCF, Datadog, Splunk and Unix/Linux.' },
    { title: 'Web & Supporting Technologies', description: 'React, Angular, Python and BPMN 2.0.' },
    { title: 'Architecture & Technical Leadership', description: 'API Design, Distributed Systems, System Modernization, Technical Architecture, Production Troubleshooting and Mentoring. Requirements analysis, release planning and stakeholder collaboration.' }
  ]

  return (
    <section id="expertise" className="writing">
      <div className="writing-container">
        <h2>Technical Expertise</h2>
        <p className="writing-intro">Backend engineering, enterprise modernization and the tools used to build, test, deliver and support production systems.</p>
        <div className="writing-grid">
          {expertise.map((area) => (
            <div key={area.title} className="article-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing
