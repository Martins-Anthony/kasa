import Logo from '../../../assets/logo/logo-header.svg'
import Navbar from '../Navbar'
import '../../../scss/modules/layout/header.scss'

function Header() {
  return (
    <header className="header-style">
      <img src={Logo} alt="logo kasa" />
      <Navbar />
    </header>
  )
}

export default Header
