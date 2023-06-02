import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './Gallery.css';
import slides from './data';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryOnScrollAnimation = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (galleryOnScrollAnimation.current) {
      scrollReveal.reveal(galleryOnScrollAnimation.current, {
        duration: 800,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }
  }, []);

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
    <section className="pb-10 pt-20 px-6 md:px-12" style={{ backgroundColor: '#CCA43A' }}>
      <h2
        className="desktop-title uppercase mx-auto mb-10 md:mb-24 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b border-solid pb-4"
        style={{ maxWidth: '600px' }}>
        Indulge in a Sweet Escape: Your Ultimate Hair Removal Retreat Awaits!
      </h2>
      <div
        ref={galleryOnScrollAnimation}
        className="gallery max-w-[1000px] w-full m-auto pb-16 xs:px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}></div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="hidden xs:block arrow-left absolute text-2xl rounded-full h-12 w-12  cursor-pointer">
          {/* <img src={leftArrow} className="w-5 ml-3" style={{ marginTop: '19px' }} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 mt-3 ml-3">
            <path
              d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
              fill="rgba(204,164,58,1)"></path>
          </svg>
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="hidden xs:block arrow-right absolute text-2xl rounded-full h-12 w-12 cursor-pointer">
          {/* <img src={rightArrow} className="w-5 ml-3" style={{ marginTop: '19px' }} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 mt-3 ml-3">
            {' '}
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              fill="rgba(204,164,58,1)"></path>
          </svg>
        </div>
        <div className="flex top-4 justify-center pt-8 gap-x-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? 'active-selector' : 'inactive-selector'
              }`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
