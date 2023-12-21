import PropTypes from 'prop-types'
import '../../scss/modules/titleLocation.scss'

function TitleLocalization({ title, location }) {
  return (
    <div className="accommodation-container">
      <h1 className="accommodation-title">{title}</h1>
      <p className="accommodation-location">{location}</p>
    </div>
  )
}

TitleLocalization.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

TitleLocalization.defaultProps = {
  title: '',
  location: '',
}

export default TitleLocalization
