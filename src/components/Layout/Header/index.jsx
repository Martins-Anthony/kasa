import Logo from '../../../assets/logo/logo-header.svg'
import Navbar from '../Navbar'
import '../../../scss/modules/layout/header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header-style">
      <div>
        <Link to={'/'}>
          <img src={Logo} alt="logo kasa" />
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
