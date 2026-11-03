
import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = [
    "All Projects",
    "AI & Machine Learning",
    "Business Intelligence",
    "Web Applications",
  ];

  const projects = [
    {
      title: "RecoverAI — AI Revenue Recovery Agent",
      category: "AI & Machine Learning",
      label: "Razorpay Track 3",
      subtitle: "Razorpay Track 3 Challenge",
      description:
        "An AI-powered system designed to analyze failed payment transactions and identify high-value recovery opportunities.",
      features: [
        "Machine Learning recovery probability prediction",
        "High, Medium and Low transaction prioritization",
        "Automated actionable recovery recommendations",
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    },
    {
      title: "Smart Irrigation System",
      category: "AI & Machine Learning",
      label: "IoT Project",
      subtitle: "Weather Forecasting & Soil Moisture Analysis",
      description:
        "An intelligent irrigation system using weather forecasting and soil moisture analysis to support efficient water management.",
      features: [
        "Soil moisture monitoring using sensors",
        "Weather-based irrigation decisions",
        "Arduino-based IoT implementation",
      ],
      technologies: ["Python", "Arduino UNO", "IoT", "Sensors"],
    },
    {
      title: "Paraphrase Detection",
      category: "AI & Machine Learning",
      label: "Text Analytics",
      subtitle: "Plagiarism Detection Project",
      description:
        "A text analytics project that identifies semantically similar sentences to support paraphrase and plagiarism detection.",
      features: [
        "Text preprocessing and analysis",
        "Semantic similarity detection",
        "Machine Learning classification",
      ],
      technologies: ["Python", "NLTK", "BERT", "SVM"],
    },
    {
      title: "E-Governance Demo",
      category: "Web Applications",
      label: "Blockchain Project",
      subtitle: "B92 Quantum Key Distribution",
      description:
        "A demonstration project exploring secure communication concepts for an e-governance application.",
      features: [
        "B92 quantum key distribution concepts",
        "Secure communication demonstration",
        "Blockchain-based application concepts",
      ],
      technologies: ["Python", "Blockchain", "B92", "Web"],
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <span className="section-label">⚑ PORTFOLIO WORK</span>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-label">{project.label}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>

            <p className="project-description">
              {project.description}
            </p>

            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>✧ {feature}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-card-bottom">
              <a href="#contact">
                View Project Details <span>→</span>
              </a>
              <div className="github-icon">⌘</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
