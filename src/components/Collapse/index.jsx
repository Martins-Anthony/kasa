import ArrowBack from '../../assets/collapse/arrow_back.png'
import '../../scss/modules/collapse.scss'
import React, { useState } from 'react'

function Collapse({ title, content }) {
  const [isArrowDown, setIsArrowDown] = useState(false)
  const [isContainerVisible, setIsContainerVisible] = useState(false)

  const handleArrowClick = () => {
    setIsArrowDown(!isArrowDown)
    setIsContainerVisible(!isContainerVisible)
  }

  return (
    <div className={'collapse-container'}>
      <div className="collapse-title">
        <h2>{title}</h2>
        <img
          src={ArrowBack}
          alt="fléche"
          className={`arrow-icon ${isArrowDown ? 'down' : 'up'}`}
          onClick={handleArrowClick}
        />
      </div>
      <p
        className={`animated-container ${
          isContainerVisible ? 'visible' : ''
        } collapse-content`}
      >
        {content}
      </p>
    </div>
  )
}

export default Collapse
