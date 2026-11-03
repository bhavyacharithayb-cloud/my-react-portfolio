
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      icon: '☁',
      category: 'Cloud Computing',
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      details: [
        'Fundamentals of cloud computing architecture',
        'Infrastructure as a Service (IaaS), PaaS & SaaS models',
        'AWS core services (EC2, S3, IAM, VPC, RDS)',
        'High availability, elasticity & scalability'
      ]
    },
    {
      icon: '▤',
      category: 'Database Systems',
      title: 'Databases for Developers: Foundations',
      issuer: 'Oracle Dev Gym',
      score: 'Score: 95% Excellence',
      details: [
        'Certificate of Excellence with 95% final score',
        'Relational database architecture & SQL querying',
        'Table creation, constraints, joins & data aggregation',
        'Data integrity, normalization & transaction control'
      ]
    }
  ];

  const workshops = [
    {
      category: 'Healthcare Tech & Analytics',
      title: 'Digital Healthcare Workshop',
      description:
        'Explored digital medical records, telemetry analytics, and modern software applications in health monitoring.'
    },
    {
      category: 'Emerging AI Technologies',
      title: 'Generative AI Workshop',
      description:
        'Hands-on exposure to foundational GenAI models, prompt engineering, and LLM applications.'
    },
    {
      category: 'Advanced Engineering',
      title: 'Introduction to Stealth Technology',
      description:
        'Understood electromagnetic wave absorption, radar cross-section (RCS) reduction, and defense systems.'
    }
  ];

  return (
    <section className="certifications-section" id="certifications">

      <div className="certifications-heading">
        <span className="section-label">
          ♙ CREDENTIALS & KNOWLEDGE
        </span>

        <h2>
          Certifications & <span>Workshops</span>
        </h2>

        <div className="heading-underline"></div>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>

            <div className="cert-top">
              <div className="cert-icon">{cert.icon}</div>

              <div className="cert-meta">
                <span className="cert-category">{cert.category}</span>

                {cert.score && (
                  <span className="cert-score">🏆 {cert.score}</span>
                )}
              </div>
            </div>

            <h3>{cert.title}</h3>
            <p className="cert-issuer">Issued by {cert.issuer}</p>

            <div className="cert-divider"></div>

            <ul className="cert-details">
              {cert.details.map((detail, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  {detail}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <div className="workshops-heading">
        <h3>♧ Technical Workshops & Seminars</h3>
      </div>

      <div className="workshops-grid">
        {workshops.map((workshop, index) => (
          <div className="workshop-card" key={index}>
            <span className="workshop-category">
              {workshop.category}
            </span>

            <h4>{workshop.title}</h4>

            <p>{workshop.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Certifications;
