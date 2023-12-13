import '../../scss/modules/navBar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav-style">
      <Link to="/">ACCUEIL</Link>
      <Link to="/about">A PROPOS</Link>
    </nav>
  )
}

export default Navbar
