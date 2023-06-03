import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css';
import { Link } from 'react-router-dom';
import flower from '../../assets/spa-flowers.png';
import brazilian from '../../assets/3.png';
import legs from '../../assets/2.png';
import body from '../../assets/1.png';
import facial from '../../assets/4.png';

const Services = () => {
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const cardThree = useRef(null);
  const cardFour = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    if (cardOne.current) {
      scrollReveal.reveal(cardOne.current, {
        duration: 800,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200
      });
    }

    if (cardTwo.current) {
      scrollReveal.reveal(cardTwo.current, {
        duration: 800,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200,
        delay: 200
      });
    }

    if (cardThree.current) {
      scrollReveal.reveal(cardThree.current, {
        duration: 800,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 200,
        delay: 600
      });
    }

    if (cardFour.current) {
      scrollReveal.reveal(cardFour.current, {
        duration: 800,
        distance: '150px',
        origin: 'bottom',
        easing: 'ease-out',
        interval: 300,
        delay: 1200
      });
    }
  }, []);
  return (
    <section className="bg-white justify-center items-center my-10 md:my-24 px-6 md:px-12 text-sm md:text-base lg:text-lg">
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <h2
          className="desktop-title uppercase mx-auto mb-10 md:mb-24 text-center font-bold md:leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b border-solid pb-4"
          style={{ maxWidth: '900px', borderColor: '#CCA43A' }}>
          Ditch the Wax and Embrace the Sugar! Our services offer a natural alternative for hair
          removal.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-12 flex flex-col">
          <Link to="/services" ref={cardOne} className="mt-auto service-card">
            <div className="shadow" style={{ backgroundColor: '#F8F8F8' }}>
              <div>
                <img src={brazilian} alt="Brazilian service with sugaring" />
              </div>
              <div className="p-8">
                <h3
                  className="desktop-title text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase"
                  style={{ color: '#CCA43A' }}>
                  Brazilian
                </h3>
                <p className="text-sm md:text-base lg:text-lg mt-2 mb-6 xs:mb-0">
                  Uncover Smoothness from front to back! Our brazilian service removes all pubic
                  hair, including the backside (excluding cheeks), for a beautifully clean and
                  hair-free intimate area.
                </p>
                <button
                  className="mt-0 md:mt-10 border border-solid text-white px-4 py-2 text-sm xs:text-base"
                  style={{ backgroundColor: '#CCA43A' }}>
                  View all services
                </button>
              </div>
            </div>
          </Link>
          <Link to="/services" ref={cardTwo} className="mt-auto service-card">
            <div className="shadow" style={{ backgroundColor: '#F8F8F8' }}>
              <div>
                <img src={legs} alt="Legs service with sugaring" />
              </div>
              <div className="p-8">
                <h3
                  className="desktop-title text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase"
                  style={{ color: '#CCA43A' }}>
                  legs
                </h3>
                <p className="text-sm md:text-base lg:text-lg mt-2 mb-6 xs:mb-0">
                  Whether you opt for perfectly smooth thighs or flawless calves, we ensure a
                  thorough, gentle, and hair-free sugaring experience with our leg services.
                </p>
                <button
                  className="mt-0 md:mt-10 border border-solid text-white px-4 py-2 text-sm xs:text-base"
                  style={{ backgroundColor: '#CCA43A' }}>
                  View all services
                </button>
              </div>
            </div>
          </Link>
          <Link to="/services" ref={cardThree} className="mt-auto service-card">
            <div className="shadow" style={{ backgroundColor: '#F8F8F8' }}>
              <div>
                <img src={body} alt="Bikini service with sugaring" />
              </div>
              <div className="p-8">
                <h3
                  className="desktop-title text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase"
                  style={{ color: '#CCA43A' }}>
                  bikini
                </h3>
                <p className="text-sm md:text-base lg:text-lg mt-2 mb-6 xs:mb-0">
                  Bikini services focus on flawlessly shaping your bikini line with meticulous
                  attention to detail. Experience the confidence of a clean and defined bikini line
                  without any unwanted hair, courtesy of our precise and tailored sugaring
                  technique.
                </p>
                <button
                  className="mt-0 md:mt-10 border border-solid text-white px-4 py-2 text-sm xs:text-base"
                  style={{ backgroundColor: '#CCA43A' }}>
                  View all services
                </button>
              </div>
            </div>
          </Link>
          <Link to="/services" ref={cardFour} className="mt-auto service-card">
            <div className="shadow" style={{ backgroundColor: '#F8F8F8' }}>
              <div>
                <img src={facial} alt="Face services with sugaring" />
              </div>
              <div className="p-8">
                <h3
                  className="desktop-title text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase"
                  style={{ color: '#CCA43A' }}>
                  Facial
                </h3>
                <p className="text-sm md:text-base lg:text-lg mt-2 mb-6 xs:mb-0">
                  Immerse yourself in our range of indulgent treatments that leave your face feeling
                  irresistibly soft, while our eyebrow and eyelash maintenance services provide the
                  perfect frame to accentuate your natural beauty.
                </p>
                <button
                  className="mt-0 md:mt-10 border border-solid text-white px-4 py-2 text-sm xs:text-base"
                  style={{ backgroundColor: '#CCA43A' }}>
                  View all services
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

// import React from 'react';
// import './home.css';
// import { Link } from 'react-router-dom';
// import flower from '../../assets/flower-icon.png';

// const Services = () => {
//   return (
//     <section className="pb-20 flex justify-center items-center px-6 md:px-12 text-sm md:text-base lg:text-lg">
//       <div
//         className=" mt-10 md:-mt-16 w-full lg:flex lg:flex-row-reverse z-0 bg-white shadow-lg shadow-stone-300"
//         style={{ maxWidth: '1200px' }}>
//         <div className="lg:w-1/2 leading-relaxed grid place-items-center bg-white">
//           <div className="p-8 xsl:p-10 sm:py-20 md:px-16">
//             <div className="flex mb-4 sm:mb-14 pt-8 sm:pt-0">
//               <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
//               <ul className="grid place-items-center sm:place-items-start">
//                 <li
//                   className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                   style={{ color: '#CCA43A' }}>
//                   brazilian
//                 </li>
//                 <li className="hidden sm:block">
//                   Hair is removed from the pubic area using a sugar paste that is applied to the
//                   skin in the opposite direction of hair growth and removed in the direction of hair
//                   growth. The result is smooth and soft skin that lasts for several weeks.
//                 </li>
//               </ul>
//             </div>
//             <p className="sm:hidden mb-8">
//               Hair is removed from the pubic area using a sugar paste that is applied to the skin in
//               the direction of hair growth. The result is smooth and soft skin that lasts for
//               several weeks.
//             </p>
//             <div className="flex mb-4 sm:mb-14">
//               <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
//               <ul className="grid place-items-center sm:place-items-start">
//                 <li
//                   className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                   style={{ color: '#CCA43A' }}>
//                   bikini
//                 </li>
//                 <li className="hidden sm:block">
//                   Bikini sugaring service is a natural and gentle hair removal treatment that
//                   targets the area outside of the panty line, leaving you with a smooth and
//                   hair-free bikini area.
//                 </li>
//               </ul>
//             </div>
//             <p className="sm:hidden mb-8">
//               Bikini sugaring service is a natural and gentle hair removal treatment that targets
//               the area outside of the panty line, leaving you with a smooth and hair-free bikini
//               area.
//             </p>
//             <div className="flex mb-4 sm:mb-0">
//               <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
//               <ul className="grid place-items-center sm:place-items-start">
//                 <li
//                   className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                   style={{ color: '#CCA43A' }}>
//                   legs
//                 </li>
//                 <li className="hidden sm:block">
//                   Leg sugaring is a popular choice for those who want to remove hair from larger
//                   areas of the body in a safe and natural way.
//                 </li>
//               </ul>
//             </div>
//             <p className="sm:hidden">
//               Leg sugaring is a popular choice for those who want to remove hair from larger areas
//               of the body in a safe and natural way.
//             </p>
//           </div>
//         </div>

//         <div
//           className="lg:w-1/2 leading-relaxed grid place-items-center"
//           style={{ backgroundColor: '#F3EFEB' }}>
//           <div className="p-8 xsl:p-10 sm:py-20 md:px-16">
//             <p className="header-text text-xl sm:text-2xl md:text-3xl font-semibold uppercase py-8">
//               book your
//               <br />
//               appointment
//             </p>
//             <p className="pb-8">
//               With our warm and welcoming atmosphere, top-tier treatments, and commitment to
//               exceeding your expectations, you&apos;re sure to walk away feeling thoroughly
//               satisfied.
//             </p>
//             <p className="pb-8">
//               Don&apos;t wait – schedule your appointment now and discover the difference of Sugar’d
//               Bare.
//             </p>
//             <Link to="/services">
//               <button className="view-services-btn text-sm xs:text-base bg-white border-2 border-solid px-5 py-2 bg-white">
//                 View All Services
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
