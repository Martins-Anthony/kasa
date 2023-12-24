import ArrowBack from '../../assets/collapse/arrow_back.svg'
import '../../scss/modules/collapse.scss'
import React, { useState } from 'react'

function Collapse({ title, content }) {
  const [isArrowDown, setIsArrowDown] = useState(false)

  const handleArrowClick = () => {
    setIsArrowDown(!isArrowDown)
  }

  let contentElement

  if (typeof content === 'string') {
    contentElement = <p>{content}</p>
  } else if (typeof content === 'object') {
    contentElement = content.map((item) => <p key={item}>{item}</p>)
  }

  return (
    <div className={`collapse-container ${isArrowDown ? 'visible' : ''}`}>
      <div className="collapse-title">
        <h2>{title}</h2>
        <img
          src={ArrowBack}
          alt="fléche"
          className={`arrow-icon ${isArrowDown ? 'down' : 'up'}`}
          onClick={handleArrowClick}
        />
      </div>
      <div
        className={`animated-container ${
          isArrowDown ? 'visible' : ''
        } collapse-content `}
      >
        {contentElement}
      </div>
    </div>
  )
}

export default Collapse
