import '../../scss/style.scss'
import '../../scss/housing.scss'
import React from 'react'
import housingData from '../../datas/housing.json'
import { useParams } from 'react-router-dom'
import TitleLocationTagsAccommodation from '../../components/TitleLocationTagsAccommodation'
import Host from '../../components/Host'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import RatingStarts from '../../components/Rating'

function Housing() {
  const { id } = useParams() // Récupère l'ID depuis l'URL
  const selectedHousing = housingData.find((housing) => housing.id === id)

  return (
    <div className="housing-container">
      <Slideshow key={selectedHousing.id} picture={selectedHousing.pictures} />
      <div className="housing-profil-container">
        <TitleLocationTagsAccommodation
          key={`${selectedHousing.id}-1`}
          title={selectedHousing.title}
          location={selectedHousing.location}
          tagsOne={selectedHousing.tags[0]}
          tagsTwo={selectedHousing.tags[1]}
          tagsthree={selectedHousing.tags[2]}
        />
        <div className="housing-host-container">
          <RatingStarts
            key={`${selectedHousing.id}-2`}
            rating={selectedHousing.rating}
          />
          <Host
            key={`${selectedHousing.id}-3`}
            name={selectedHousing.host.name}
            picture={selectedHousing.host.picture}
          />
        </div>
      </div>
      <div className="housing-collapse-container">
        <Collapse
          key={`${selectedHousing.id}-4`}
          title={'Description'}
          content={selectedHousing.description}
        />
        <Collapse
          key={`${selectedHousing.id}-5`}
          title={'Équipements'}
          content={selectedHousing.equipments}
        />
      </div>
    </div>
  )
}

export default Housing
