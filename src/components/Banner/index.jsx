import '../../scss/modules/banner.scss'

function Banner({ picture, title }) {
  return (
    <div className="banner-style banner-border">
      <img className="banner-img banner-border" src={picture} alt="banner" />
      <div className="banner-background banner-border"></div>
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default Banner
