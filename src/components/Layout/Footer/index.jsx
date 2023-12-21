import LogoFooter from '../../../assets/logo/logoFooter.png'
import '../../../scss/modules/layout/footer.scss'

function Footer() {
  return (
    <footer className="footer-style">
      <img src={LogoFooter} alt="logo Kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
