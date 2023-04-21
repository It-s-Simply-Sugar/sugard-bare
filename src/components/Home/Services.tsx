import React, { useState } from 'react';
import waxingIcon from '../../assets/wax.png';
import eyebrowIcon from '../../assets/eyebrow.png';
import eyelashIcon from '../../assets/eyelash.png';
import faceMask from '../../assets/face-mask.png';
import sugarIcon from '../../assets/sugar.png';
import relaxIcon from '../../assets/relax.png';

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const servicesList = [
    {
      title: 'Waxing',
      link: '/link-here',
      image: waxingIcon
    },
    {
      title: 'Sugaring',
      link: '/link-here',
      image: sugarIcon
    },
    {
      title: 'Facials',
      link: '/link-here',
      image: faceMask
    },
    {
      title: 'Eyebrows',
      link: '/link-here',
      image: eyebrowIcon
    },
    {
      title: 'Eyelashes',
      link: '/link-here',
      image: eyelashIcon
    },
    {
      title: 'Relaxation',
      link: '/link-here',
      image: relaxIcon
    }
  ];
  return (
    <div className="bg-white">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mx-auto pt-16 lg:pt-0"
        style={{ maxWidth: '670px' }}>
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`${
              index === 1 ? 'lg:pt-28 lg:-mt-44' : 'lg:-mt-28'
            }  px-14 py-20 lg:py-14 mb-6 lg:mb-32 rounded-2xl shadow-lg shadow-stone-300`}
            style={{ backgroundColor: '#F8F8F8', zIndex: 1 }}>
            <img src={service.image} alt="" className="w-20" />
            <p
              className="text-center text-xl font-semibold tracking-wider"
              style={{ color: '#CCA43A' }}>
              {service.title}
            </p>
            <a
              href={service.link}
              className="flex justify-center items-center text-xs underline font-medium">
              View Service
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
