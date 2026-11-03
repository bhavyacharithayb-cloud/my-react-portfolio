
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">

      {/* Scroll indicator */}
      <div className="scroll-down">
        <span>SCROLL DOWN</span>
        <span className="scroll-arrow">↓</span>
      </div>

      {/* Section heading */}
      <div className="about-heading">
        <div className="section-badge">
          <span>♙</span> GET TO KNOW ME
        </div>

        <h2>
          About <span>Y B Bhavya Charitha</span>
        </h2>

        <div className="heading-underline"></div>
      </div>

      {/* About content */}
      <div className="about-container">

        <div className="about-main-card">
          <h3>✧ Passionate AI Developer & Data Analytics Enthusiast</h3>

          <p>
            I am a Bachelor of Technology student at
            <strong> Amrita Vishwa Vidyapeetham</strong>,
            with an interest in Artificial Intelligence,
            Machine Learning, and Data Analytics.
          </p>

          <p>
            I enjoy working with Python, exploring data,
            developing machine learning solutions, and
            building practical software projects.
            I am continuously improving my technical
            skills through hands-on learning.
          </p>

          <p>
            My goal is to use technology and data to solve
            real-world problems and create meaningful solutions.
          </p>
        </div>

        <div className="about-cards">

          <div className="about-info-card">
            <div className="about-icon">🧠</div>
            <div>
              <h3>Artificial Intelligence & ML</h3>
              <p>
                Exploring machine learning algorithms,
                predictive modelling, and intelligent
                applications.
              </p>
            </div>
          </div>

          <div className="about-info-card">
            <div className="about-icon">📈</div>
            <div>
              <h3>Data Analytics & BI</h3>
              <p>
                Working with datasets, data visualization,
                and analytical techniques to discover
                meaningful insights.
              </p>
            </div>
          </div>

          <div className="about-info-card">
            <div className="about-icon">💻</div>
            <div>
              <h3>Python Ecosystem</h3>
              <p>
                Learning and building projects using
                Python, Pandas, Scikit-learn, and other
                development tools.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About
