import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Marquee from 'react-fast-marquee';
import './Reviews.css';
import { data } from './data';
import quotes from '../../../assets/quotes.png';

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
    <section className="my-10 md:my-24 bg-white">
      <div
        ref={title}
        className="mx-auto grid place-items-center px-6 md:px-12"
        style={{ maxWidth: '1200px' }}>
        <h2
          className="desktop-title uppercase tracking-wider text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold pb-3"
          style={{ color: '#CCA43A' }}>
          10+ years in business
        </h2>
        <div className="relative">
          <p className="pt-4 text-md xs:text-xl lg:text-2xl font-extralight leading-5">
            See what our clients <br /> have to say about us!
          </p>
          <img
            src={quotes}
            alt=""
            className="absolute w-6 xs:w-8  bottom-[35px] left-[-30px] xs:bottom-[50px] xs:left-[-40px]"
          />
        </div>
      </div>
      <div className="mt-10 mx-auto" style={{ maxWidth: '1200px' }}>
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
              <div
                className="marquee-item-card mx-4 rounded-tr-3xl rounded-bl-3xl px-4 md:px-10 py-6 grid place-items-center border border-solid my-6 w-72 md:w-96"
                style={{ borderColor: '#CCA43A' }}>
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
                  <p
                    className="text-center text-xs underline cursor-pointer font-medium"
                    style={{ color: '#CCA43A' }}>
                    See full review
                  </p>
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
