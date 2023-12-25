import '../../../scss/modules/layout/navBar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav-style">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? 'underline' : 'none',
          }
        }}
      >
        accueil
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? 'underline' : 'none',
          }
        }}
      >
        a propos
      </NavLink>
    </nav>
  )
}

export default Navbar
