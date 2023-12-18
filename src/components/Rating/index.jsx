import StartOn from '../../assets/profil/star-active-one.png'
import StartOff from '../../assets/profil/star-active-two.png'

function RatingStarts({ rating }) {
  const countRating = parseInt(rating)
  const maxRating = 5
  const stars = []

  for (let i = 1; i <= maxRating; i++) {
    if (i <= countRating) {
      stars.push(<img key={i} src={StartOn} alt="étoile" />)
    } else {
      stars.push(<img key={i} src={StartOff} alt="étoile" />)
    }
  }

  return <div>{stars}</div>
}

export default RatingStarts
