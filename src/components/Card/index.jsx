import housingData from '../../datas/housing.json'
import '../../scss/modules/card.scss'

function Card() {
  const itemList = housingData.map((item) => (
    <div key={item.id} className="card-style">
      <img src={item.cover} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  ))

  return <div className="card-container">{itemList}</div>
}

export default Card
