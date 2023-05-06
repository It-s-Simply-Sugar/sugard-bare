import React, { useState } from 'react';
import './Gallery.css';
import slides from './data';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStart - touchEnd;
    if (swipeDistance > 0) {
      nextSlide();
    } else if (swipeDistance < 0) {
      prevSlide();
    }
  };

  return (
    <div className="pb-10 px-6 md:px-12" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="gallery max-w-[1000px] w-full m-auto pb-16 xs:px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}></div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="arrow-left absolute text-2xl rounded-full h-12 w-12  cursor-pointer">
          <img src={leftArrow} className="w-5 ml-3" style={{ marginTop: '19px' }} />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="arrow-right absolute text-2xl rounded-full h-12 w-12 cursor-pointer">
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
