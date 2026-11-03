
import './Achievements.css'

const achievements = [
  {
    icon: '🏆',
    badge: 'Gold Medal 🥇',
    category: 'ATHLETICS & TRACK',
    title: '1st Place — District-Level Athletics',
    description:
      'Secured 1st rank in the 200-meter track event at the District Athletics Championship through disciplined endurance and sprint training.',
    focus: '200m Sprint Race',
    highlight: true,
  },
  {
    icon: '🏅',
    badge: 'Mandal • District • State',
    category: 'MANDAL, DISTRICT & STATE LEVELS',
    title: 'Multi-Level Champion',
    description:
      'Achieved 1st place positions across Mandal, District, and State sports tournaments, demonstrating leadership and competitive perseverance.',
    focus: 'Sports & Competition Excellence',
  },
  {
    icon: '🎖️',
    badge: 'National Podium 🥉',
    category: 'MARTIAL ARTS',
    title: '3rd Place — National Karate Championship',
    description:
      'Earned 3rd place bronze honor in the National Karate Championship, reflecting focus, mental discipline, and martial arts mastery.',
    focus: 'National Kumite / Kata',
  },
  {
    icon: '🔥',
    badge: 'Finisher 🏃',
    category: 'ENDURANCE & FITNESS',
    title: '5K Marathon Finisher',
    description:
      'Successfully completed the 5K Marathon, demonstrating commitment to physical fitness and personal endurance goals.',
    focus: 'Distance Running',
  },
  {
    icon: '🎵',
    badge: 'Silver Award 🥈',
    category: 'CULTURAL & PERFORMING ARTS',
    title: '2nd Place — Dance Competition',
    description:
      'Awarded 2nd place in a dance competition for choreography, rhythm precision, and creative expression.',
    focus: 'Performing Arts',
  },
]

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-heading">
        <span className="achievements-label">
          🏆 &nbsp; HONORS & EXTRA-CURRICULAR
        </span>

        <h2>
          Achievements & <span>Leadership</span>
        </h2>

        <div className="achievements-underline"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div
            className={`achievement-card ${item.highlight ? 'highlight-card' : ''}`}
            key={index}
          >
            <div className="achievement-top">
              <div className="achievement-icon">{item.icon}</div>
              <span className="achievement-badge">{item.badge}</span>
            </div>

            <p className="achievement-category">{item.category}</p>

            <h3>{item.title}</h3>

            <p className="achievement-description">
              {item.description}
            </p>

            <div className="achievement-footer">
              <span>Event Focus</span>
              <strong>{item.focus}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
