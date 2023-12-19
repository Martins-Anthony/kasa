import '../../scss/style.scss'
import React from 'react'
import housingData from '../../datas/housing.json'
import { useParams } from 'react-router-dom'
import TitleLocationTagsAccommodation from '../../components/TitleLocationTagsAccommodation'
import Host from '../../components/Host'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'

function Housing() {
  const { id } = useParams() // Récupère l'ID depuis l'URL
  const selectedHousing = housingData.find((housing) => housing.id === id)

  return (
    <div>
      <Slideshow key={selectedHousing.id} picture={selectedHousing.pictures} />
      <TitleLocationTagsAccommodation
        key={`${selectedHousing.id}-1`}
        title={selectedHousing.title}
        location={selectedHousing.location}
        tagsOne={selectedHousing.tags[0]}
        tagsTwo={selectedHousing.tags[1]}
        tagsthree={selectedHousing.tags[2]}
      />
      <Host
        key={`${selectedHousing.id}-2`}
        name={selectedHousing.host.name}
        picture={selectedHousing.host.picture}
        rating={selectedHousing.rating}
      />
      <div className="housing-collapse-container">
        <Collapse
          key={`${selectedHousing.id}-3`}
          title={'Description'}
          content={selectedHousing.description}
        />
        <Collapse
          key={`${selectedHousing.id}-4`}
          title={'Équipements'}
          content={selectedHousing.equipments}
        />
      </div>
    </div>
  )
}

export default Housing
