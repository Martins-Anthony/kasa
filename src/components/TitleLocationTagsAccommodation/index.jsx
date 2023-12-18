import PropTypes from 'prop-types'
import '../../scss/modules/titleLocationTagsAccommodation.scss'

function TitleLocationTagsAccommodation({
  title,
  location,
  tagsOne,
  tagsTwo,
  tagsthree,
}) {
  return (
    <div className="accommodation-container">
      <h1 className="accommodation-title">{title}</h1>
      <p className="accommodation-location">{location}</p>
      <div className="tags-container">
        <div>{tagsOne}</div> <div>{tagsTwo}</div> <div>{tagsthree}</div>
      </div>
    </div>
  )
}

TitleLocationTagsAccommodation.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tagsOne: PropTypes.string.isRequired,
  tagsTwo: PropTypes.string.isRequired,
  tagsthree: PropTypes.string.isRequired,
}

TitleLocationTagsAccommodation.defaultProps = {
  title: '',
  location: '',
  tagsOne: '',
  tagsTwo: '',
  tagsthree: '',
}

export default TitleLocationTagsAccommodation
