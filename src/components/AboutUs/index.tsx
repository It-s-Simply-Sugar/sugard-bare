import React from 'react';
import './AboutUs.css';
import sugar from '../../assets/about-us-image.png';
import logo from '../../assets/anna-signature.png';

const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="mx-auto px-6" style={{ maxWidth: '1550px' }}>
        <h1 className="px-6 uppercase font-semibold leading-tight text-5xl sm:text-7xl xxl:text-8xl">
          I love
          <br />
          the work
          <br />
          <span className="text-white">that I do</span>
        </h1>
        <div className="container grid place-items-center" style={{ backgroundColor: '#CCB6A0' }}>
          <div className="px-8 sm:px-14 md:px-20 pt-24 sm:pt-32 md:pt-40 pb-10 grid place-items-center">
            <img src={sugar} alt="" />
          </div>
          <div className="pb-8 flex flex-col justify-center items-center text-white">
            <ul className="flex gap-x-4">
              <li className="text-lg font-thin">Owner</li>
              <li>|</li>
              <li className="text-lg font-thin">Sugarist</li>
            </ul>
            <p className="text-md font-normal">Professional Esthetician</p>
          </div>
          <div
            className="pb-8 px-8 sm:px-14 md:px-20 text-sm md:text-base lg:text-lg "
            style={{ maxWidth: '800px' }}>
            <p className="leading-relaxed mb-4">
              Hi, I’m <span className="font-semibold text-white">Anna</span>! I consider myself
              fortunate to have a job that I absolutely love. Each day I have the pleasure of
              interacting with a diverse group of fascinating people and building meaningful
              connections with them. With a decade of experience in the art of sugaring, I take
              immense pride in delivering exceptional results to my clients. In addition to my
              expertise in sugaring, I also offer a range of other top-tier services, including
              waxing, skincare, lash and brow tint, and eyelash extensions.
            </p>
            <p className="leading-relaxed mb-4">
              At Sugar’d Bare, my ultimate goal is to exceed your expectations and leave you feeling
              thoroughly satisfied. I am dedicated to creating a warm, and welcoming atmosphere
              where you can unwind and indulge in some much-needed self-care.
            </p>
            <p className="leading-relaxed mb-4">
              Whether you&apos;re a first-time visitor or a returning client, I am confident that I
              can provide you with an unforgettable experience that will have you eagerly Iooking
              forward to your next appointment.
            </p>
          </div>
          <div className="pb-24 sm:pb-32 md:pb-32 md:pb-40 ">
            <img src={logo} alt="" className="w-32 md:w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
