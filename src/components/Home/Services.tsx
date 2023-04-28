import React, { useState } from 'react';
import waxingIcon from '../../assets/1.png';
import eyebrowIcon from '../../assets/2.png';
import eyelashIcon from '../../assets/3.png';
import faceMask from '../../assets/face-mask.png';
import sugarIcon from '../../assets/sugar.png';
import relaxIcon from '../../assets/relax.png';

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  return (
    <div className="bg-white pb-20 bg-white flex justify-center items-center px-6">
      <div
        className="mt-8 md:-mt-32 w-full z-0 bg-white rounded-2xl shadow-lg shadow-stone-300"
        style={{ maxWidth: '1550px' }}>
        <p className="text-center py-8">book now</p>
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3">
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest"
              style={{ color: '#CCB6A0' }}>
              bikini
            </p>
          </div>
          <div
            className="bg-yellow-200 w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${waxingIcon})` }}
          />
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest"
              style={{ color: '#CCB6A0' }}>
              brazilian
            </p>
          </div>
          <div
            className="bg-yellow-200 w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${eyelashIcon})` }}
          />
          <div className="w-full h-full flex justify-center items-center">
            <p
              className="uppercase text-xl sm:text-2xl md:text-3xl xxl:text-4xl tracking-widest"
              style={{ color: '#CCB6A0' }}>
              legs
            </p>
          </div>
          <div
            className="bg-yellow-200 w-full h-32 sm:h-56 md:h-60 bg-center bg-cover bg-center"
            style={{ backgroundImage: `url(${eyebrowIcon})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
