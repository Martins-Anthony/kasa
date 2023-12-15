import React from 'react'
import housingData from '../../datas/housing.json'
import '../../scss/modules/card.scss'

function Card() {
  const itemList = housingData.map((item) => {
    const spliteTitle = item.title.split(' - ')
    const formatedTitle = spliteTitle.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        <br />
      </React.Fragment>
    ))

    return (
      <div key={item.id} className="card-style">
        <img src={item.cover} alt={item.title} />
        <h2>{formatedTitle}</h2>
      </div>
    )
  })

  return <div className="card-container">{itemList}</div>
}

export default Card
