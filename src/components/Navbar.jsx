
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        BC <span>Bhavya Charitha</span>
      </Link>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/certifications">Certifications</NavLink></li>
        <li><NavLink to="/achievements">Achievements</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Theme Toggle Button */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀ Light' : '☾ Dark'}
      </button>

      <Link to="/contact" className="connect-btn">
        Let's Connect →
      </Link>

    </nav>
  )
}

export default Navbar
