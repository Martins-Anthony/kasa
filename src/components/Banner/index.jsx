import '../../scss/modules/banner.scss'

function Banner({ picture, title }) {
  return (
    <div className="banner-style">
      <img src={picture} alt="banner" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
