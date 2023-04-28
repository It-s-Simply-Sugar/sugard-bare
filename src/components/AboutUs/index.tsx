import React from 'react';
import sugar from '../../assets/sugarimage.png';
import lemon from '../../assets/lemon.png';
import water from '../../assets/water.png';
import headhsot from '../../assets/anna-headshot.png';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="mx-auto" style={{ maxWidth: '1550px' }}>
        <div className="grid place-items-center px-6 pb-16 pt-20 md:px-20 xxl:px-0">
          <div>
            <h3
              className="mt-20 text-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold uppercase leading-tight md:leading-normal lg:leading-relaxed xl:leading-normal pb-3"
              style={{ color: '#C4B682' }}>
              smooth skin is just
              <br />a sugar away
            </h3>
          </div>
        </div>
      </div>

      <div className="py-10" style={{ backgroundColor: '#F6F5F5' }}>
        <div
          className="mx-auto grid place-items-center grid-cols-1 md:grid-cols-3 my-10"
          style={{ maxWidth: '1550px' }}>
          <div className="mb-8 xl:mb-0">
            <img src={sugar} alt="one" className="w-40 xl:w-64" />
            <p
              className="text-center mt-4 xl:mt-10 text-2xl xl:text-4xl uppercase font-extralight"
              style={{ color: '#CCA43A' }}>
              Sugar
            </p>
          </div>
          <div className="mb-8 xl:mb-0">
            <img src={water} alt="one" className="w-40 xl:w-64" />
            <p
              className="text-center mt-4 xl:mt-10 text-2xl xl:text-4xl uppercase font-extralight"
              style={{ color: '#CCA43A' }}>
              water
            </p>
          </div>
          <div className="mb-8 xl:mb-0">
            <img src={lemon} alt="one" className="w-40 xl:w-64" />
            <p
              className="text-center mt-4 xl:mt-10 text-2xl xl:text-4xl uppercase font-extralight"
              style={{ color: '#CCA43A' }}>
              lemon
            </p>
          </div>
        </div>
      </div>

      <div className="py-10" style={{ backgroundColor: 'white' }}>
        <div className="mx-auto grid place-items-center" style={{ maxWidth: '1550px' }}>
          <div>
            <h3 className="uppercase mt-20 text-center text-2xl xl:text-4xl font-semibold pb-3 border-solid">
              meet your sugarist
            </h3>
            <div
              className="w-72 xl:w-96 h-1 bg-black mb-10"
              style={{ backgroundColor: '#CCA43A' }}
            />
          </div>
        </div>
      </div>

      <div className="py-10" style={{ backgroundColor: 'white' }}>
        <div
          className="mx-auto grid place-items-center"
          style={{ maxWidth: '1550px', backgroundColor: '#CCB6A0' }}>
          <div className="m-6 xl:m-14">
            <div
              className="md:flex justify-around items-center mb-10"
              style={{ maxWidth: '800px' }}>
              <img src={headhsot} alt="" className="w-52 rounded-full" />
              <div>
                <p className="text-3xl uppercase font-semibold mb-4">Anna Trujillo</p>
                <p className="md:text-center">Owner | Sugarist</p>
                <p>Professional Esthetician</p>
              </div>
            </div>
            <div className="text-white" style={{ maxWidth: '800px' }}>
              <p>
                Hi, I’m Anna! I consider myself fortunate to have a job that I absolutely love. Each
                day I have the pleasure of interacting with a diverse group of fascinating people
                and building meaningful connections with them. With a decade of experience in the
                art of sugaring, I take immense pride in delivering exceptional results to my
                clients. In addition to my expertise in sugaring, I also offer a range of other
                top-tier services, including waxing, skincare, lash and brow tint, and eyelash
                extensions.
              </p>
              <p>
                At Sugar’d Bare, my ultimate goal is to exceed your expectations and leave you
                feeling thoroughly satisfied. I am dedicated to creating a warm, and welcoming
                atmosphere where you can unwind and indulge in some much-needed self-care.
              </p>
              <p>
                Whether you&apos;re a first-time visitor or a returning client, I am confident that
                I can provide you with an unforgettable experience that will have you eagerly
                Iooking forward to your next appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
