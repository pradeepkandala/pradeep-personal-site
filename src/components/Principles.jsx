import './Principles.css'

const Principles = () => {
  const experiences = [
    {
      title: 'Allstate Insurance — Modernization',
      details: [
        'Atos · Senior Application Developer · Jan 2024–present. Client: Allstate Insurance.',
        'Previously with Compunnel Inc., Sep 2021–Dec 2023, serving Allstate with Atos as implementation partner.',
        'Led a distributed team of approximately 15 engineers across the USA and India through the ARS modernization. Modernized a legacy Oracle Forms application into Java/Spring Boot microservices with a React frontend. ARS modernization was completed 20 days ahead of schedule.',
        'Technologies: Java, Spring Boot, REST APIs, MongoDB, Kafka, JUnit, Mockito, Jenkins, Gradle, Git/GitHub, SonarQube, PCF, Datadog and Splunk.'
      ]
    },
    {
      title: 'Aptiv — Technical Lead / Architect',
      details: [
        'Aug 2016–Sep 2021.',
        'Worked on the Global Shared Data platform serving 7,000+ users, with a legacy estate of approximately 800 Oracle Forms and a program team of approximately 40 people.',
        'Modernized toward Angular and Spring Boot microservices. Responsibilities included architecture, requirements, design, implementation, estimation, release planning, production support and mentoring.'
      ]
    },
    {
      title: 'Western Union — Technical Lead / Transition Lead / Senior Developer',
      details: [
        'Worked on WUPOS, WUTA, Agent Payment Systems and prepaid money-transfer systems using Java and Spring.',
        'Led the transition of Western Union Agent Payment Systems from an outgoing vendor, including transition planning, knowledge transfer and stabilization. Worked on this transition across Ireland and the United States.',
        'Worked on authentication and security systems, including certificate-based authentication, F5 and iRules.'
      ]
    },
    {
      title: 'Earlier Experience — Telecom, Virtual Labs and Teaching',
      details: [
        'Ericsson: Core Java, multithreading and CORBA for telecom systems.',
        'IIIT Hyderabad: Developer and mentor on Government of India MHRD Virtual Labs, using Java and Java 2D/3D.',
        'Served as an Assistant Professor before beginning my software career.'
      ]
    }
  ]

  return (
    <section id="experience" className="principles">
      <div className="principles-container">
        <h2>Experience / Impact</h2>
        <div className="principles-grid">
          {experiences.map((experience) => (
            <div key={experience.title} className="principle-card">
              <h3>{experience.title}</h3>
              {experience.details.map((detail) => <p key={detail}>{detail}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Principles
