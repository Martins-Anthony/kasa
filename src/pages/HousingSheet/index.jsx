import '../../scss/style.scss'
import React from 'react'
import housingData from '../../datas/housing.json'
import { useParams } from 'react-router-dom'
import TitleLocationTagsAccommodation from '../../components/TitleLocationTagsAccommodation'

function HousingSheet() {
  const { id } = useParams() // Récupère l'ID depuis l'URL
  const selectedHousing = housingData.find((housing) => housing.id === id)

  return (
    <div>
      <TitleLocationTagsAccommodation
        key={selectedHousing.id}
        title={selectedHousing.title}
        location={selectedHousing.location}
        tagsOne={selectedHousing.tags[0]}
        tagsTwo={selectedHousing.tags[1]}
        tagsthree={selectedHousing.tags[2]}
      />
    </div>
  )
}

export default HousingSheet
