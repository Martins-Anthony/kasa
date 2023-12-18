import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profil/host.png'

function Host({ name, picture, rating }) {
  return (
    <div>
      <div>
        <p>{name}</p>
        <img src={picture} alt={name} />
      </div>
      <div>{rating}</div>
    </div>
  )
}

Host.protoTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}

Host.defaultProps = {
  name: '',
  picture: DefaultPicture,
  rating: '0',
}

export default Host
