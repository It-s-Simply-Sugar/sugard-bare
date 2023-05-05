import React from 'react';
import flower from '../../assets/flower-icon.png';

const Services = () => {
  return (
    <div
      className="pb-20 flex justify-center items-center px-6 md:px-12"
      style={{ backgroundColor: '#F6F5F5' }}>
      <div
        className="-mt-12 xsl:-mt-16 md:-mt-32 w-full lg:flex lg:flex-row-reverse z-0 bg-white shadow-lg shadow-stone-300"
        style={{ maxWidth: '1550px' }}>
        <div className="lg:w-1/2 leading-relaxed grid place-items-center bg-white">
          <div className="p-8 xsl:p-10 sm:py-20 lg:py-40">
            <div className="flex mb-4 sm:mb-14">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCB6A0' }}>
                  brazilian
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  With our warm and welcoming atmosphere, top-tier treatments, and commitment to
                  exceeding your expectations.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg mb-8">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations.
            </p>
            <div className="flex mb-4 sm:mb-14">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCB6A0' }}>
                  bikini
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  With our warm and welcoming atmosphere, top-tier treatments, and commitment to
                  exceeding your expectations.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg mb-8">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations.
            </p>
            <div className="flex mb-4 sm:mb-0">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCB6A0' }}>
                  legs
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  With our warm and welcoming atmosphere, top-tier treatments, and commitment to
                  exceeding your expectations.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations.
            </p>
          </div>
        </div>

        <div
          className="lg:w-1/2 leading-relaxed grid place-items-center"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div className="p-8 xsl:p-10 sm:py-20 lg:py-40">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase pb-8">
              book your
              <br />
              appointment
            </p>
            <p className="text-sm md:text-base lg:text-lg pb-8">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations, you&apos;re sure to walk away feeling thoroughly
              satisfied.
            </p>
            <p className="text-sm md:text-base lg:text-lg pb-8">
              Don&apos;t wait – schedule your appointment now and discover the difference of Sugar’d
              Bare.
            </p>
            <div>
              <button
                className="text-sm xs:text-base bg-white border-2 border-solid px-5 py-2 bg-white"
                style={{ borderColor: '#CCA43A', color: '#CCA43A' }}>
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
