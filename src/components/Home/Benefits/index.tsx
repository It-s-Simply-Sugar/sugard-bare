import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './Benefits.css';
import spaInterior from '../../../assets/some-image.png';
import natural from '../../../assets/benefits/100-natural.png';
import skinTypes from '../../../assets/benefits/all-skin-type.png';
import lastingResults from '../../../assets/benefits/long-lasting-results.png';
import exfoliation from '../../../assets/benefits/exfoliation.png';

const Benefits = () => {
  const titleOne = useRef(null);
  const titleTwo = useRef(null);
  const titleThree = useRef(null);
  const titleFour = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (titleOne.current) {
      scrollReveal.reveal(titleOne.current, {
        duration: 1500,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }

    if (titleTwo.current) {
      scrollReveal.reveal(titleTwo.current, {
        duration: 1500,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200,
        delay: 100
      });
    }

    if (titleThree.current) {
      scrollReveal.reveal(titleThree.current, {
        duration: 1500,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200,
        delay: 200
      });
    }

    if (titleFour.current) {
      scrollReveal.reveal(titleFour.current, {
        duration: 1500,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200,
        delay: 400
      });
    }
  }, []);
  return (
    <div
      className="px-6 md:px-12 py-20 lg:py-40 relative text-sm md:text-base lg:text-lg"
      style={{ backgroundColor: '#F3EFEB' }}>
      <div className="mx-auto grid place-items-center" style={{ maxWidth: '1550px' }}>
        <div
          className="w-full lg:flex flex-reverse bg-white"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div
            className="lg:w-full grid place-items-center lg:mr-10 xl:mr-20"
            style={{ maxWidth: '950px' }}>
            <p
              className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase pb-8 lg:pb-14"
              style={{ color: '#CCA43A' }}>
              benefits of sugaring
            </p>
            <div className="grid grid-cols-1 xsl:grid-cols-2 xs:gap-8">
              <div className="mb-8 xs:mb-0">
                <img src={natural} alt="" className="w-8 rounded-full" />
                <div ref={titleOne}>
                  <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                    100% Natural
                  </p>
                  <p>
                    Sugaring paste is made of natural ingredients like sugar, water, and lemon
                    juice, which are gentle on the skin and less likely to cause allergic reactions.
                  </p>
                </div>
              </div>
              <div className="mb-8 xs:mb-0">
                <img src={skinTypes} alt="" className="w-8 rounded-full" />
                <div ref={titleTwo}>
                  <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                    For All Skin Type
                  </p>
                  <p>
                    Sugaring paste is applied at room temperature, which is less likely to irritate
                    sensitive skin. Additionally, sugaring does not stick to live skin cells, which
                    reduces the risk of skin damage or tearing.
                  </p>
                </div>
              </div>
              <div className="mb-8 xs:mb-0">
                <img src={lastingResults} alt="" className="w-8 rounded-full" />
                <div ref={titleThree}>
                  <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                    Long-lasting Results
                  </p>
                  <p>
                    Sugaring removes hair from the root, which means it takes longer to grow back
                    compared to shaving or depilatory creams.
                  </p>
                </div>
              </div>
              <div className="">
                <img src={exfoliation} alt="" className="w-8 rounded-full" />
                <div ref={titleFour}>
                  <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                    Gentle Exfoliation
                  </p>
                  <p>
                    Sugaring removes dead skin cells, leaving skin smooth and soft. It also reduces
                    the occurrence of ingrown hairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden -mt-96" style={{ marginTop: '-40%' }}>
            <img src={spaInterior} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
