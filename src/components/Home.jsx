
import './Home.css'

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        {/* Internship availability badge */}
        <div className="availability-badge">
          <span className="status-dot"></span>
          Open to AI / Data Analytics Internships & Roles
        </div>

        {/* Main introduction */}
        <h1>
          Hi, I'm Y B Bhavya Charitha
        </h1>

        {/* Professional tagline */}
        <h2>
          AI/ML Enthusiast | Data Analytics | Business Intelligence
        </h2>

        {/* Description */}
        <p className="description">
          Building practical AI-powered solutions that turn data
          into meaningful insights. Passionate about machine
          learning, predictive modeling, data visualization,
          and intelligent decision systems.
        </p>

        {/* Action buttons */}
        <div className="home-buttons">

          <a href="#projects">
            View Projects ✨
          </a>

          <a href="#contact">
            ✉ Contact Me
          </a>

          <a
            href="https://github.com/bhavyacharithayb-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </section>
  )
}

export default Home
