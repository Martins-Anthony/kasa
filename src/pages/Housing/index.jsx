// eslint-disable-next-line react-hooks/exhaustive-deps
import '../../scss/housing.scss'
import React from 'react'
import housingData from '../../datas/housing.json'
import { useParams, Navigate } from 'react-router-dom'
import TitleLocalization from '../../components/Label'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import RatingStarts from '../../components/Rating'

function Housing() {
  const { id } = useParams() // Récupère l'ID depuis l'URL
  const selectedHousing = housingData.find((housing) => housing.id === id)

  if (!selectedHousing) {
    return <Navigate to="error" />
  }

  return (
    <section className="housing-container">
      <Slideshow key={selectedHousing.id} picture={selectedHousing.pictures} />
      <div className="housing-profil-container">
        <div className="accommodation-container">
          <TitleLocalization
            title={selectedHousing.title}
            location={selectedHousing.location}
          />
          <Tags arrays={selectedHousing.tags} id={`${selectedHousing.id}-1`} />
        </div>
        <div className="housing-host-container">
          <RatingStarts rating={selectedHousing.rating} />
          <Host
            name={selectedHousing.host.name}
            picture={selectedHousing.host.picture}
          />
        </div>
      </div>
      <div className="housing-collapse-container">
        <Collapse
          key={selectedHousing.id}
          title={'Description'}
          content={selectedHousing.description}
          pageSpecificStyle="housing-collapse-title"
        />
        <Collapse
          key={`${selectedHousing.id}-2`}
          title={'Équipements'}
          content={selectedHousing.equipments}
          pageSpecificStyle={'housing-collapse-title'}
        />
      </div>
    </section>
  )
}

export default Housing
