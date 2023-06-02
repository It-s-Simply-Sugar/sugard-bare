import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css';
import Services from './Services';
import Gallery from './Gallery';
// import SomeRandomComp from './SomeRandomComp';
import SocialProofs from './SocialProofs';
import Promotions from './Promotions';
import Benefits from './Benefits';
import BusinessHours from './BusinessHours';
import heroImage from '../../assets/hero-image.png';

const Home = () => {
  const h1 = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (h1.current) {
      scrollReveal.reveal(h1.current, {
        duration: 2000,
        distance: '30px',
        origin: 'top',
        easing: 'ease-out',
        interval: 200
      });
    }
    if (text.current) {
      scrollReveal.reveal(text.current, {
        duration: 2000,
        distance: '200px',
        origin: 'right',
        easing: 'ease-out',
        interval: 1000,
        delay: 1000
      });
    }
  }, []);

  return (
    <main>
      <section className="pt-6 xs:pt-16 lg:pt-20" style={{ backgroundColor: '#CCA43A' }}>
        <div className="relative mx-auto px-6 md:px-12" style={{ maxWidth: '1200px' }}>
          <header className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-around lg:w-full">
            <img
              src={heroImage}
              alt=""
              className="mt-6 lg:-mt-8 h-auto"
              style={{ maxWidth: '50%' }}
            />
            <div className="lg:w-1/2 lg:flex lg:max-w-40 lg:-mt-28 lg:ml-10">
              <div className="lg:flex-grow">
                <div className="grid place-items-center">
                  <div>
                    <div ref={h1} className="flex justify-center lg:justify-start">
                      <h1 className="lg:hidden font-semibold text-center text-4xl xs:text-5xl leading-tight mb-5">
                        Smooth Skin with
                        <br />
                        <span className="text-white">Sweet Solutions</span>
                      </h1>

                      <h1 className="hidden lg:block text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-5">
                        Smooth Skin with
                        <span className="text-white"> Sweet Solutions</span>
                      </h1>
                    </div>
                    <div ref={text}>
                      <p className="font-light text-center lg:text-left text-left text-md lg:text-xl xl:text-2xl px-10 sm:px-20 md:px-40 lg:px-0">
                        Expert sugaring and top-tier beauty services delivered with a warm and
                        welcoming touch.
                      </p>
                      <div className="grid justify-center lg:justify-start pt-6 lg:pt-12">
                        <a
                          href="https://www.vagaro.com/itssimplysugar/services"
                          target="_blank"
                          rel="noreferrer">
                          <button className="cta-btn text-sm xs:text-base border-2 border-solid px-6 py-2">
                            Schedule Appointment
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="google-reviews absolute text-center">
            <p className="rating text-white text-2xl xs:text-4xl font-semibold mb-1 xxl:mb-2">
              5.0
            </p>
            <div className="rating-stars grid place-items-center grid-cols-5  mb-1">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16">
                    <path
                      d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                      fill="#F3EFEB"></path>
                  </svg>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/It%E2%80%99s+Simply+Sugar%2F+Sugaring+Hair+Removal/@27.8931735,-82.2898173,17z/data=!4m22!1m13!4m12!1m4!2m2!1d-82.3328768!2d27.820032!4e1!1m6!1m2!1s0x88c2d3476fbe30f3:0xa19b37b569911e82!2sits+simply+sugar!2m2!1d-82.2872424!2d27.8931735!3m7!1s0x88c2d3476fbe30f3:0xa19b37b569911e82!8m2!3d27.8931735!4d-82.2872424!9m1!1b1!16s%2Fg%2F11p6102gx5"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white">
              <p className="underline font-medium" style={{ fontSize: '10px' }}>
                Google Reviews
              </p>
            </a>
          </div>
        </div>
      </section>
      <Services />
      <Gallery />
      <SocialProofs />
      {/* <SomeRandomComp /> */}
      <Promotions />
      <Benefits />
      <BusinessHours />
    </main>
  );
};

export default Home;
