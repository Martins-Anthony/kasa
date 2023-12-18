/* eslint-disable jsx-a11y/img-redundant-alt */
import ArrowLeft from '../../assets/slideshow/arrow_left.png'
import ArrowRight from '../../assets/slideshow/arrow_right.png'
import '../../scss/modules/slideshow.scss'
import React, { useState } from 'react'

function Slideshow({ picture }) {
  let totalSlides = picture.length

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide((precSlide) => (precSlide + 1) % totalSlides)
  }
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="slideshow-container">
      <img
        className="slideshow-picture"
        src={picture[currentSlide]}
        alt="image logement"
      />
      <img
        className="slideshow-arrow arrow-left"
        src={ArrowLeft}
        alt="Flèche gauche"
        onClick={goToPrevSlide}
      />
      <img
        className="slideshow-arrow arrow-right"
        src={ArrowRight}
        alt="Flèche droite"
        onClick={goToNextSlide}
      />
      <div className="slideshow-count">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}

export default Slideshow
