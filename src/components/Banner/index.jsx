import BannerHome from '../../assets/banner/bannerOne.jpeg'
import '../../scss/modules/banner.scss'

function Banner() {
  return (
    <div className="banner-style">
      <img src={BannerHome} alt="banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
