
import "./Education.css";

function Education() {
  const educationList = [
    {
      status: "In Progress",
      period: "2023 - Present",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Amrita Vishwa Vidyapeetham",
      description:
        "Pursuing an undergraduate degree in Artificial Intelligence and Data Science, with an interest in machine learning, data analytics, and software development.",
      subjects: [
        "AI & ML Algorithms",
        "Data Analytics",
        "Database Systems",
        "Python Development",
      ],
    },
    {
      status: "Completed",
      period: "2021 - 2023",
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      description:
        "Completed intermediate education with Mathematics, Physics, and Chemistry.",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
      ],
    },
    {
      status: "Completed",
      period: "2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Deepthi E.M High School",
      description:
        "Completed secondary school education, building a foundation in science and mathematics.",
      subjects: [
        "Academic Foundation",
        "Science",
        "Mathematics",
      ],
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <span className="education-badge">
          ♧ &nbsp; ACADEMIC BACKGROUND
        </span>

        <h2>
          My <span>Education</span> Journey
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="education-timeline">
        {educationList.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="timeline-dot"></div>

            <div className="education-card-top">
              <span className={`education-status status-${index}`}>
                {item.status}
              </span>

              <span className="education-period">
                ▢ &nbsp; {item.period}
              </span>
            </div>

            <h3>{item.degree}</h3>

            <h4>▣ &nbsp; {item.institution}</h4>

            <p>{item.description}</p>

            <div className="education-divider"></div>

            <div className="education-subjects">
              {item.subjects.map((subject, i) => (
                <span key={i}>
                  <b>●</b> {subject}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
