import React from 'react';
import waxingIcon from '../../assets/1.png';
import eyebrowIcon from '../../assets/2.png';
import eyelashIcon from '../../assets/3.png';

const Services = () => {
  return (
    <div
      className="pb-20 flex justify-center items-center px-6 md:px-12"
      style={{ backgroundColor: '#F6F5F5' }}>
      <div
        className="mt-8 md:-mt-32 w-full z-0 bg-white rounded-t-2xl shadow-lg shadow-stone-300"
        style={{ maxWidth: '1550px' }}>
        <div className="text-center leading-relaxed py-8">
          <p
            className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-2"
            style={{ color: '#C4B682' }}>
            Our Services
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Expert services to help you look your best
          </p>
        </div>

        <div className="grid place-items-center grid-cols-2 md:grid-cols-3">
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest font-light"
              style={{ color: '#C4B682' }}>
              bikini
            </p>
          </div>
          <div
            className="w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${waxingIcon})`, backgroundColor: '#F5F0ED' }}
          />
          {/* desktop  */}
          <div className="hidden md:grid w-full h-full place-items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest font-light"
              style={{ color: '#C4B682' }}>
              brazilian
            </p>
          </div>
          <div
            className="hidden md:block w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${eyelashIcon})`, backgroundColor: '#F5F0ED' }}
          />
          {/* desktop end*/}
          {/* mobile start*/}
          <div
            className="md:hidden w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${eyelashIcon})`, backgroundColor: '#F5F0ED' }}
          />
          <div className="md:hidden w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest font-light"
              style={{ color: '#C4B682' }}>
              brazilian
            </p>
          </div>
          {/* mobile end*/}
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest"
              style={{ color: '#C4B682' }}>
              legs
            </p>
          </div>
          <div
            className="w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${eyebrowIcon})`, backgroundColor: '#F5F0ED' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
