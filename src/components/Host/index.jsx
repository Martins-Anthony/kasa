import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profil/host.png'
import '../../scss/modules/host.scss'
import React from 'react'
function Host({ name, picture }) {
  const spliteName = name.split(' ')
  const formatedName = spliteName.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      <br />
    </React.Fragment>
  ))

  return (
    <div className="host-profil">
      <p>{formatedName}</p>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  )
}

Host.protoTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

Host.defaultProps = {
  name: '',
  picture: DefaultPicture,
  rating: '0',
}

export default Host
