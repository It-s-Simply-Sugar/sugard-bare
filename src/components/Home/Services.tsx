import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css';
import { Link } from 'react-router-dom';
import flower from '../../assets/flower-icon.png';

const Services = () => {
  const listItemRef1 = useRef(null);
  const listItemRef2 = useRef(null);
  const listItemRef3 = useRef(null);
  const bookAppt = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (listItemRef1.current) {
      scrollReveal.reveal(listItemRef1.current, {
        duration: 2000,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }
    if (listItemRef2.current) {
      scrollReveal.reveal(listItemRef2.current, {
        duration: 2000,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }
    if (listItemRef3.current) {
      scrollReveal.reveal(listItemRef3.current, {
        duration: 2000,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }
    if (bookAppt.current) {
      scrollReveal.reveal(bookAppt.current, {
        duration: 2000,
        distance: '150px',
        origin: 'left',
        easing: 'ease-out',
        interval: 200
      });
    }
  }, []);
  return (
    <div
      className="pb-20 flex justify-center items-center px-6 md:px-12"
      style={{ backgroundColor: '#F8F8F8' }}>
      <div
        className="-mt-12 xsl:-mt-16 md:-mt-32 w-full lg:flex lg:flex-row-reverse z-0 bg-white shadow-lg shadow-stone-300"
        style={{ maxWidth: '1550px' }}>
        <div className="lg:w-1/2 leading-relaxed grid place-items-center bg-white">
          <div className="p-8 xsl:p-10 sm:py-20 md:px-16">
            <div ref={listItemRef1} className="flex mb-4 sm:mb-14">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  brazilian
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  Hair is removed from the pubic area using a sugar paste that is applied to the
                  skin in the opposite direction of hair growth and removed in the direction of hair
                  growth. The result is smooth and soft skin that lasts for several weeks.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg mb-8">
              Hair is removed from the pubic area using a sugar paste that is applied to the skin in
              the direction of hair growth. The result is smooth and soft skin that lasts for
              several weeks.
            </p>
            <div ref={listItemRef2} className="flex mb-4 sm:mb-14">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  bikini
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  Bikini sugaring service is a natural and gentle hair removal treatment that
                  targets the area outside of the panty line, leaving you with a smooth and
                  hair-free bikini area.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg mb-8">
              Bikini sugaring service is a natural and gentle hair removal treatment that targets
              the area outside of the panty line, leaving you with a smooth and hair-free bikini
              area.
            </p>
            <div ref={listItemRef3} className="flex mb-4 sm:mb-0">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  legs
                </li>
                <li className="hidden sm:block text-sm md:text-base lg:text-lg">
                  Leg sugaring is a popular choice for those who want to remove hair from larger
                  areas of the body in a safe and natural way.
                </li>
              </ul>
            </div>
            <p className="sm:hidden text-sm md:text-base lg:text-lg">
              Leg sugaring is a popular choice for those who want to remove hair from larger areas
              of the body in a safe and natural way.
            </p>
          </div>
        </div>

        <div
          className="lg:w-1/2 leading-relaxed grid place-items-center"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div ref={bookAppt} className="p-8 xsl:p-10 sm:py-20 md:px-16">
            <p className="header-text text-xl sm:text-2xl md:text-3xl font-semibold uppercase py-8">
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
            <Link to="/services">
              <button className="view-services-btn text-sm xs:text-base bg-white border-2 border-solid px-5 py-2 bg-white">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
