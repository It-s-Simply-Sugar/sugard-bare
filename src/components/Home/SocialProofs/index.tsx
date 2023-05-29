import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Marquee from 'react-fast-marquee';
import './Reviews.css';
import { data } from './data';

const SocialProofs = () => {
  const title = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (title.current) {
      scrollReveal.reveal(title.current, {
        duration: 2000,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div
        ref={title}
        className="relative mx-auto grid place-items-center px-6 md:px-12"
        style={{ maxWidth: '1550px' }}>
        <p
          className="uppercase tracking-wider text-center text-xl sm:text-2xl xl:text-3xl font-semibold pb-3"
          style={{ color: '#CCA43A' }}>
          10+ years in business
        </p>
        <p className="pt-2 text-md xs:text-xl lg:text-2xl font-extralight leading-5">
          See what our clients <br /> have to say about us!
        </p>
      </div>
      <div className="mt-10 mx-auto" style={{ maxWidth: '1550px' }}>
        <Marquee
          className="marquee-container-div flex"
          direction="left"
          speed={50}
          pauseOnHover={true}>
          {data.map((review, index) => (
            <a
              key={index}
              href="https://www.vagaro.com/itssimplysugar"
              target="_blank"
              rel="noreferrer">
              <div className="marquee-item-card mx-4 rounded-2xl px-4 md:px-10 py-6 grid place-items-center drop-shadow-md my-6 w-72 md:w-96">
                <div className="grid place-items-center relative">
                  <img
                    src={review.image}
                    alt="icon"
                    className="w-12 mb-2 rounded-full"
                    style={{ zIndex: 20 }}
                  />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <div key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16">
                          <path
                            d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                            fill="#CCA43A"></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-center my-2 font-light">
                  &quot;{review.review.slice(0, 105)} {review.review.length > 105 ? '...' : ''}
                  &quot;
                </p>

                {review.review.length > 105 && (
                  <p className="text-center text-xs underline cursor-pointer">See full review</p>
                )}
              </div>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
export default SocialProofs;
