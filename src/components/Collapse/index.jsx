import ArrowBack from '../../assets/collapse/arrow_back.svg'
import '../../scss/modules/collapse.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, content, pageSpecificStyle }) {
  const [isArrowDown, setIsArrowDown] = useState(false)

  const handleArrowClick = () => {
    setIsArrowDown(!isArrowDown)
  }

  const collapseTitleClass = `collapse-title ${pageSpecificStyle}`

  let contentElement

  if (typeof content === 'string') {
    contentElement = <p>{content}</p>
  } else if (typeof content === 'object') {
    contentElement = content.map((item) => <p key={item}>{item}</p>)
  }

  return (
    <div className={`collapse-container ${isArrowDown ? 'visible' : ''}`}>
      <div className={collapseTitleClass}>
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  pageSpecificStyle: PropTypes.string.isRequired,
}

export default Collapse
