import React from 'react'
import housingData from '../../datas/housing.json'
import { Link } from 'react-router-dom'
import '../../scss/modules/card.scss'

function Card() {
  const itemList = housingData.map((item) => {
    return (
      <article className="card-style" key={item.id}>
        <div>
          <Link className="card-link" to={`/housing/${item.id}`} key={item.id}>
            <img className="card-img" src={item.cover} alt={item.title} />
            <h2 className="card-title">{item.title}</h2>
          </Link>
        </div>
      </article>
    )
  })

  return <section className="card-container">{itemList}</section>
}

export default Card
