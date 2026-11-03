
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      icon: "‹ ›",
      title: "Programming Languages",
      description:
        "Core languages for AI development, algorithm design, and web interfaces.",
      skills: [
        ["Python", "Core"],
        ["Java", "Programming"],
        ["HTML5", "Web"],
        ["CSS3", "Styling"],
        ["JavaScript", "Scripting"],
      ],
    },
    {
      icon: "▣",
      title: "Frameworks & Libraries",
      description:
        "Machine learning, deep learning, and data processing libraries.",
      skills: [
        ["TensorFlow", "Deep Learning"],
        ["PyTorch", "AI Models"],
        ["Scikit-learn", "ML Pipeline"],
        ["Pandas", "Data Science"],
        ["React", "Frontend"],
      ],
    },
    {
      icon: "▱",
      title: "Development Platforms",
      description:
        "Development environments, interactive notebooks, and scientific computing tools.",
      skills: [
        ["Jupyter Notebook", "Data Prep"],
        ["Google Colab", "GPU Cloud"],
        ["VS Code", "IDE"],
        ["MATLAB", "Numerical"],
      ],
    },
    {
      icon: "▤",
      title: "Databases & Tools",
      description:
        "Relational databases, data management, dashboard building, and data presentation.",
      skills: [
        ["MySQL", "Relational DB"],
        ["MongoDB", "NoSQL"],
        ["SQL", "Queries"],
        ["Git & GitHub", "Version Control"],
        ["Streamlit", "Web Apps"],
        ["Excel", "Data Analysis"],
        ["PowerPoint", "Presentations"],
      ],
    },
    {
      icon: "✧",
      title: "Core Focus Areas",
      description:
        "Primary domains of specialization and engineering application.",
      skills: [
        ["Artificial Intelligence", "Specialization"],
        ["Machine Learning", "Specialization"],
        ["Data Analytics", "Specialization"],
        ["Business Intelligence", "Specialization"],
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="skills-badge">
          ◈ &nbsp; TECHNICAL CAPABILITIES
        </span>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <p>
          Technologies, tools, and domains I use to build and explore
          intelligent solutions.
        </p>

        <div className="skills-heading-line"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category-card" key={index}>
            <div className="skill-category-header">
              <div className={`skill-category-icon icon-${index}`}>
                {category.icon}
              </div>

              <div className="skill-category-title">
                <h3>{category.title}</h3>
                <span>{category.skills.length} competencies</span>
              </div>
            </div>

            <p className="skill-category-description">
              {category.description}
            </p>

            <div className="skill-tags">
              {category.skills.map(([name, type], skillIndex) => (
                <div className="skill-tag" key={skillIndex}>
                  <span className="skill-dot"></span>
                  <strong>{name}</strong>
                  <span className="skill-type">{type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

