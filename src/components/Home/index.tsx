import React from 'react';
import './home.css';
import Services from './Services';
import Gallery from './Gallery';
import BookOnline from './BookOnline';
import Reviews from './Reviews';
import Promotions from './Promotions';
import ContactUs from './ContactUs';
import BusinessHours from './BusinessHours';
import heroImage from '../../assets/hero-image-option2.png';

const Home = () => {
  return (
    <div className="">
      <div className="pt-20 xs:pt-20 lg:pt-10" style={{ backgroundColor: '#CCB6A0' }}>
        <div className="relative mx-auto px-6 md:px-12" style={{ maxWidth: '1450px' }}>
          <div className="lg:mt-14 flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-around lg:w-full">
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
                    <div className="flex justify-center lg:justify-start">
                      <h1 className="lg:hidden font-semibold text-center text-3xl xs:text-4xl md:text-5xl leading-tight mb-5">
                        Where Beauty Meets Luxury -<br />
                        <span className="text-white">Sugar&apos;d Bare</span>
                      </h1>
                      <h1 className="hidden lg:block lg:text-6xl xl:text-7xl xxl:text-8xl font-semibold text-5xl leading-tight mb-5">
                        Where Beauty <br /> Meets Luxury -<br />
                        <span className="text-white">Sugar&apos;d Bare</span>
                      </h1>
                    </div>
                    <p className="text-left text-sm lg:text-base xl:text-lg px-10 sm:px-20 md:px-40 lg:px-0 xl:pr-20">
                      Indulge in expert sugaring and top-tier beauty services, all delivered with a
                      warm and welcoming touch.
                    </p>
                    <div className="grid justify-center pt-12">
                      <a href="#" className="flex">
                        <p className="grid place-items-center text-xs lg:text-base xl:text-lg font-semibold text-center underline mr-6">
                          View Services
                        </p>
                        {/* add animation to make button bounce */}
                        <button className="rounded-full bg-white h-9 w-9">
                          <span className="arrow down" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      fill="rgba(170,126,9,1)"></path>
                  </svg>
                </div>
              ))}
            </div>
            <a href="#">
              <p className="underline font-medium" style={{ fontSize: '10px' }}>
                Google Reviews
              </p>
            </a>
          </div>
        </div>
      </div>
      <Services />
      <BookOnline />
      <Gallery />
      <Reviews />
      <Promotions />
      <ContactUs />
      <BusinessHours />
    </div>
  );
};

export default Home;
