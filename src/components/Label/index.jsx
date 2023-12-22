import PropTypes from 'prop-types'
import '../../scss/modules/label.scss'

function Label({ title, location }) {
  return (
    <div className="accommodation-container">
      <h1 className="accommodation-title">{title}</h1>
      <p className="accommodation-location">{location}</p>
    </div>
  )
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

Label.defaultProps = {
  title: '',
  location: '',
}

export default Label
