import StartOn from '../../assets/profil/star-active.svg'
import StartOff from '../../assets/profil/star-inactive.svg'
import '../../scss/modules/rating.scss'

function RatingStarts({ rating }) {
  const range = [1, 2, 3, 4, 5]
  const countRating = parseInt(rating)
  return (
    <div>
      {range.map((rangeElem) =>
        countRating >= rangeElem ? (
          <img
            className="star"
            key={rangeElem.toString()}
            src={StartOn}
            alt="étoile"
          />
        ) : (
          <img
            className="star"
            key={rangeElem.toString()}
            src={StartOff}
            alt="étoile"
          />
        ),
      )}
    </div>
  )
}

export default RatingStarts
