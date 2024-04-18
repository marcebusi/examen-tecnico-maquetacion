import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import bicicleta from '../img/bicicleta.jpg';

function ImageTransition() {
  const slides = [
    { src: bicicleta },
    { src: bicicleta },
    { src: bicicleta },
    { src: bicicleta },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative'>
      <div>
        <img className='h-[155px] sm:h-[240px] md:h-[340px] lg:h-[440px] w-full duration-500' src={slides[currentIndex].src} alt="Slide"/>
        <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className={`fill-none size-9 md:size-11 ${currentIndex === slideIndex ? 'text-white' : 'text-gray-400'}`} />
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}

export default ImageTransition;