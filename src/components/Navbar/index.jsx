import '../../scss/modules/navBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeLinkWelcome, setActiveLinkWelcome] = useState(true)
  const [activeLinkAbout, setActiveAbout] = useState(false)

  const handleClickWelcome = () => {
    setActiveLinkWelcome(true)
    setActiveAbout(false)
  }

  const handleClickAbout = () => {
    setActiveLinkWelcome(false)
    setActiveAbout(true)
  }

  return (
    <nav className="nav-style">
      <Link
        to="/"
        className={`${activeLinkWelcome ? 'style-link' : 'style-link-off'}`}
        onClick={handleClickWelcome}
        disabled={!activeLinkWelcome}
      >
        ACCUEIL
      </Link>
      <Link
        to="/about"
        className={`${activeLinkAbout ? 'style-link' : 'style-link-off'}`}
        onClick={handleClickAbout}
      >
        A PROPOS
      </Link>
    </nav>
  )
}

export default Navbar
