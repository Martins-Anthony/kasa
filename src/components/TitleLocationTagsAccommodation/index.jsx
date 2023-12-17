import PropTypes from 'prop-types'

function TitleLocationTagsAccommodation({
  title,
  location,
  tagsOne,
  tagsTwo,
  tagsthree,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <div>
        {tagsOne} {tagsTwo} {tagsthree}
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
