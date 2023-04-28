import React, { useState } from 'react';
import './Slider.css';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';
import image1 from '../../../assets/unnamed-1.jpg';
import image2 from '../../../assets/unnamed-2.jpg';
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
    <div className="max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"></div>
      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="arrow-left absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full h-12 w-12  cursor-pointer">
        <img src={leftArrow} className="w-6 mt-4 ml-2" />
      </div>
      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="arrow-right absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full h-12 w-12 cursor-pointer">
        <img src={rightArrow} className="w-6 mt-4 ml-2" />
      </div>
      <div className="flex top-4 justify-center pt-4 gap-x-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-yellow-600' : 'bg-gray-200'
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
