import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import womanRelaxing from '../../assets/woman-relaxing.png';
import image1 from '../../assets/promotions-image1.png';

const Promotions = () => {
  const titleLeft = useRef(null);
  const titleRight = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (titleLeft.current) {
      scrollReveal.reveal(titleLeft.current, {
        duration: 2000,
        distance: '150px',
        origin: 'left',
        easing: 'ease-out',
        interval: 200
      });
    }

    if (titleRight.current) {
      scrollReveal.reveal(titleRight.current, {
        duration: 2000,
        distance: '150px',
        origin: 'right',
        easing: 'ease-out',
        interval: 200
      });
    }
  }, []);
  return (
    <section
      className="flex justify-center items-center py-10 md:py-24 px-6 md:px-12 bg-white"
      style={{ backgroundColor: '#F3EFEB' }}>
      <div className="w-full xs:flex xs:gap-x-6" style={{ maxWidth: '1200px' }}>
        <div className="lg:w-1/2 leading-relaxed grid place-items-center">
          <div className="w-full">
            <div className="grid place-items-center sm:place-items-start mb-4 sm:mb-10">
              <h2
                ref={titleLeft}
                className="desktop-title text-center xs:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase sm:pb-3"
                style={{ color: '#CCA43A' }}>
                get more for less: our latest
                <br />
                promotions & discounts
              </h2>
            </div>
            <div className="grid place-items-center sm:place-items-start mb-4 sm:mb-0">
              <img src={image1} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 leading-relaxed grid place-items-start">
          <div className="xs:flex xs:flex-col-reverse">
            <p
              ref={titleRight}
              className="text-sm md:text-base lg:text-lg mt-8 mb-6 xs:mt-14 xs:mb-0">
              Periodically, we offer exclusive promotions, discounts, and package bundles to our
              valued clients. Check out our Groupon page to stay up-to-date on our current offerings
              and save on your favorite services!
            </p>
            <div className="grid place-items-center sm:place-items-start mb-4 sm:mb-0">
              <img src={womanRelaxing} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
