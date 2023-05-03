import React, { useState } from 'react';
import './Slider.css';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';
import image1 from '../../../assets/carousel-item-1.png';
import image2 from '../../../assets/unnamed-1.jpg';
import image3 from '../../../assets/unnamed.jpg';
import image4 from '../../../assets/unnamed-7.jpg';
import image5 from '../../../assets/unnamed-9.jpg';

const Gallery = () => {
  // const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    {
      url: image1
    },
    {
      url: image2
    },
    {
      url: image3
    },

    {
      url: image4
    },
    {
      url: image5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // setSlideIndex(currentIndex - 1);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // setSlideIndex(currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    // setSlideIndex(slideIndex);
  };

  return (
    <div className="pb-10 px-6 md:px-12" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="gallery max-w-[1000px] w-full m-auto pb-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"></div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="arrow-left absolute top-[48%] -translate-x-0 translate-y-[-50%] left-[-8px] text-2xl rounded-full h-12 w-12  cursor-pointer">
          <img src={leftArrow} className="w-5 ml-3" style={{ marginTop: '19px' }} />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="arrow-right absolute top-[48%] -translate-x-0 translate-y-[-50%] right-[-8px] text-2xl rounded-full h-12 w-12 cursor-pointer">
          <img src={rightArrow} className="w-5 ml-3" style={{ marginTop: '19px' }} />
        </div>
        <div className="flex top-4 justify-center pt-4 gap-x-1">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-yellow-600' : 'bg-gray-200'
              }`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
