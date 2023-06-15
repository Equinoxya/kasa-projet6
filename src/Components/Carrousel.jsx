import React, { useState } from 'react';
import "./styles/carrousel.css"

const Carrousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  
    const previousSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
  
    return (
      <div className='carrousel'>
        <button onClick={previousSlide}><i class="fa-solid fa-chevron-left fa-xl"></i></button>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
            <div className='currentSlide'>
                <p>{currentSlide + 1}/{images.length}</p>
            </div>
        <button onClick={nextSlide}><i class="fa-solid fa-chevron-right fa-xl"></i></button>
      </div>
    );
  };



export default Carrousel;