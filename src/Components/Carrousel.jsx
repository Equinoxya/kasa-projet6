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

        <div className='container'>
          
          <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className='image-show' />
              <div className='currentSlide'>
                  <p className='counter'>{currentSlide + 1}/{images.length}</p>
              </div>
            <button onClick={previousSlide} className='previous'><i className="fa-solid fa-chevron-left fa-xl"></i></button>
          <button onClick={nextSlide} className='next'><i className="fa-solid fa-chevron-right fa-xl"></i></button>
        </div>
    );
  };



export default Carrousel;