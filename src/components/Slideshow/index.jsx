/* eslint-disable jsx-a11y/img-redundant-alt */
import ArrowLeft from '../../assets/slideshow/arrow_left.svg'
import ArrowRight from '../../assets/slideshow/arrow_right.svg'
import '../../scss/modules/slideshow.scss'
import React, { useState } from 'react'

function Slideshow({ picture }) {
  let totalSlides = picture.length
  let visibleArrowAndCounter = true

  const [currentSlide, setCurrentSlide] = useState(0)

  if (totalSlides <= 1) {
    visibleArrowAndCounter = false
  }

  const goToNextSlide = () => {
    setCurrentSlide((precSlide) => (precSlide + 1) % totalSlides)
  }
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="slideshow-container slideshow-border">
      <div className="slideshow-background slideshow-border"></div>
      <img
        className="slideshow-picture slideshow-border"
        src={picture[currentSlide]}
        alt="image logement"
      />
      <img
        className={`slideshow-arrow arrow-left ${
          visibleArrowAndCounter ? '' : 'hide-arrow-and-counter'
        }`}
        src={ArrowLeft}
        alt="Flèche gauche"
        onClick={goToPrevSlide}
      />
      <img
        className={`slideshow-arrow arrow-right ${
          visibleArrowAndCounter ? '' : 'hide-arrow-and-counter'
        }`}
        src={ArrowRight}
        alt="Flèche droite"
        onClick={goToNextSlide}
      />
      <div
        className={`slideshow-count ${
          visibleArrowAndCounter ? '' : 'hide-arrow-and-counter'
        }`}
      >
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}

export default Slideshow
