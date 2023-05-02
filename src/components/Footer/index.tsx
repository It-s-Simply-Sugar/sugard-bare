import React from 'react';
import logo from '../../assets/sugardbare-logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import tiktok from '../../assets/tiktok.png';

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: '#F3EFEB' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-10 md:px-12"
          style={{ maxWidth: '1550px' }}>
          <img src={logo} className="w-32 mb-4" />
          <div className="flex gap-x-10 mt-3">
            <img src={instagram} alt="" className="w-8" />
            <img src={facebook} alt="" className="w-8" />
            <img src={tiktok} alt="" className="w-8" />
          </div>
          <ul
            className="mt-8 text-xs md:text-sm flex flex-col justify-center items-center md:flex-row md:justify-between w-full xl:w-1/2"
            style={{ maxWidth: '500px' }}>
            <li className="">
              <a href="tel:3038855985" className="hover:underline link">
                303-885-5985
              </a>
            </li>
            <li>
              <a href="mailto:sugardbare.official@gmail.com" className="hover:underline link">
                sugardbare.official@gmail.com
              </a>
            </li>
            <li className="hover:underline link cursor-pointer">Book Now</li>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: '#CCB6A0' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-1 md:px-12"
          style={{ maxWidth: '500px' }}>
          <p className="text-xs text-white">
            Copyright Sugar&lsquo;d Bare 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
