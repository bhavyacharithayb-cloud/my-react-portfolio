
import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const subject = form.subject.value
    const message = form.message.value

    const mailtoLink = `mailto:ybbhavyaa@gmail.com?subject=${encodeURIComponent(
      subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`

    window.location.href = mailtoLink
  }

  const contactDetails = [
    {
      icon: '✉',
      label: 'Email Address',
      value: 'ybbhavyaa@gmail.com',
      link: 'mailto:ybbhavyaa@gmail.com',
    },
    {
      icon: '☎',
      label: 'Phone Number',
      value: '+91 9032018598',
      link: 'tel:+919032018598',
    },
    {
      icon: '⌘',
      label: 'GitHub Profile',
      value: 'github.com/bhavyacharithayb-cloud',
      link: 'https://github.com/bhavyacharithayb-cloud',
    },
    {
      icon: 'in',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/yb-bhavya-charitha',
      link: 'https://www.linkedin.com/in/yb-bhavya-585b5633b',
    },
  ]

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <span className="contact-label">✉ &nbsp; GET IN TOUCH</span>

        <h2>
          Let's Build <span>Together</span>
        </h2>

        <p>
          Open to internships, AI/ML engineering opportunities, data analytics
          roles, and project collaborations.
        </p>

        <div className="contact-underline"></div>
      </div>

      <div className="contact-container">

        <div className="contact-info-card">
          <h3>Y B Bhavya Charitha</h3>

          <p className="contact-role">
            AI/ML Enthusiast • Data Analytics • BI Specialist
          </p>

          <div className="contact-details">
            {contactDetails.map((item, index) => (
              <a
                href={item.link}
                target={index >= 2 ? '_blank' : undefined}
                rel={index >= 2 ? 'noreferrer' : undefined}
                className="contact-detail"
                key={index}
              >
                <div className={`contact-icon contact-icon-${index}`}>
                  {item.icon}
                </div>

                <div className="contact-detail-text">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <span className="contact-action">
                  {index < 2 ? '↗' : '✧'}
                </span>
              </a>
            ))}
          </div>

          <div className="availability-card">
            <span className="availability-dot"></span>
            <p>
              Currently looking for <strong>AI/ML & Data Science Internships</strong>
              and software roles. Feel free to reach out anytime!
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>
            <span className="message-icon">▢</span>
            Send a Direct Message
          </h3>

          <p className="form-subtitle">
            Fill out the form below and I will respond to your query as soon
            as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. alex@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry / Internship Opportunity"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Hello Bhavya, I would like to discuss..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-message-btn">
              ➤ &nbsp; Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
