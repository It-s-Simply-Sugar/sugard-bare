// import React from 'react';
// import './home.css';
// import { Link } from 'react-router-dom';
// import flower from '../../assets/spa-flowers.png';
// import brazilian from '../../assets/3.png';
// import legs from '../../assets/1.png';
// import body from '../../assets/2.png';

// const Services = () => {
//   return (
//     <section className="bg-white pb-20 justify-center items-center px-6 md:px-12 text-sm md:text-base lg:text-lg">
//       <div className="w-full pt-40 mx-auto" style={{ maxWidth: '1200px' }}>
//         <div className="w-full md:flex">
//           <div className="w-1/4 mr-20 grid place-items-center">
//             <img src={flower} alt="" />
//           </div>
//           <div className="w-3/4">
//             <div className="flex">
//               <div className="w-1/2 grid place-items-center mr-8">
//                 <div>
//                   <p
//                     className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                     style={{ color: '#CCA43A' }}>
//                     Brazilian
//                   </p>
//                   <p>
//                     Hair is removed from the pubic area using a sugar paste that is applied to the
//                     skin in the opposite direction of hair growth and removed in the direction of
//                     hair growth. The result is smooth and soft skin that lasts for several weeks.
//                   </p>
//                   <div className="grid justify-center lg:justify-start pt-4">
//                     <a href="/services" target="_blank" rel="noreferrer">
//                       <button className="cta-btn text-sm xs:text-base px-6 py-2">
//                         See Full Services
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-1/2 grid place-items-center">
//                 <img src={brazilian} alt="" className="rounded-2xl" />
//               </div>
//             </div>

//             {/* teo */}
//             <div className="flex my-32">
//               <div className="w-1/2 grid place-items-center">
//                 <img src={body} alt="" className="rounded-2xl" />
//               </div>
//               <div className="w-1/2 grid place-items-center ml-8">
//                 <div>
//                   <p
//                     className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                     style={{ color: '#CCA43A' }}>
//                     Bikini
//                   </p>
//                   <p>
//                     Hair is removed from the pubic area using a sugar paste that is applied to the
//                     skin in the opposite direction of hair growth and removed in the direction of
//                     hair growth. The result is smooth and soft skin that lasts for several weeks.
//                   </p>
//                   <div className="grid justify-center lg:justify-start pt-4">
//                     <a href="/services" target="_blank" rel="noreferrer">
//                       <button className="cta-btn text-sm xs:text-base px-6 py-2">
//                         See Full Services
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* //threw */}
//             <div className="flex">
//               <div className="w-1/2 grid place-items-center mr-8">
//                 <div>
//                   <p
//                     className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
//                     style={{ color: '#CCA43A' }}>
//                     Legs
//                   </p>
//                   <p>
//                     Hair is removed from the pubic area using a sugar paste that is applied to the
//                     skin in the opposite direction of hair growth and removed in the direction of
//                     hair growth. The result is smooth and soft skin that lasts for several weeks.
//                   </p>
//                   <div className="grid justify-center lg:justify-start pt-4">
//                     <a href="/services" target="_blank" rel="noreferrer">
//                       <button className="cta-btn text-sm xs:text-base px-6 py-2">
//                         See Full Services
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-1/2 grid place-items-center">
//                 <img src={legs} alt="" className="rounded-2xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import flower from '../../assets/flower-icon.png';

const Services = () => {
  return (
    <section className="pb-20 flex justify-center items-center px-6 md:px-12 text-sm md:text-base lg:text-lg">
      <div
        className="-mt-12 xsl:-mt-16 md:-mt-16 w-full lg:flex lg:flex-row-reverse z-0 bg-white shadow-lg shadow-stone-300"
        style={{ maxWidth: '1200px' }}>
        <div className="lg:w-1/2 leading-relaxed grid place-items-center bg-white">
          <div className="p-8 xsl:p-10 sm:py-20 md:px-16">
            <div className="flex mb-4 sm:mb-14 pt-8 sm:pt-0">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  brazilian
                </li>
                <li className="hidden sm:block">
                  Hair is removed from the pubic area using a sugar paste that is applied to the
                  skin in the opposite direction of hair growth and removed in the direction of hair
                  growth. The result is smooth and soft skin that lasts for several weeks.
                </li>
              </ul>
            </div>
            <p className="sm:hidden mb-8">
              Hair is removed from the pubic area using a sugar paste that is applied to the skin in
              the direction of hair growth. The result is smooth and soft skin that lasts for
              several weeks.
            </p>
            <div className="flex mb-4 sm:mb-14">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  bikini
                </li>
                <li className="hidden sm:block">
                  Bikini sugaring service is a natural and gentle hair removal treatment that
                  targets the area outside of the panty line, leaving you with a smooth and
                  hair-free bikini area.
                </li>
              </ul>
            </div>
            <p className="sm:hidden mb-8">
              Bikini sugaring service is a natural and gentle hair removal treatment that targets
              the area outside of the panty line, leaving you with a smooth and hair-free bikini
              area.
            </p>
            <div className="flex mb-4 sm:mb-0">
              <img src={flower} className="w-14 h-14 mr-4 sm:mr-10" />
              <ul className="grid place-items-center sm:place-items-start">
                <li
                  className="text-md xsl:text-xl sm:text-2xl md:text-3xl font-semibold uppercase sm:pb-3"
                  style={{ color: '#CCA43A' }}>
                  legs
                </li>
                <li className="hidden sm:block">
                  Leg sugaring is a popular choice for those who want to remove hair from larger
                  areas of the body in a safe and natural way.
                </li>
              </ul>
            </div>
            <p className="sm:hidden">
              Leg sugaring is a popular choice for those who want to remove hair from larger areas
              of the body in a safe and natural way.
            </p>
          </div>
        </div>

        <div
          className="lg:w-1/2 leading-relaxed grid place-items-center"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div className="p-8 xsl:p-10 sm:py-20 md:px-16">
            <p className="header-text text-xl sm:text-2xl md:text-3xl font-semibold uppercase py-8">
              book your
              <br />
              appointment
            </p>
            <p className="pb-8">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations, you&apos;re sure to walk away feeling thoroughly
              satisfied.
            </p>
            <p className="pb-8">
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
    </section>
  );
};

export default Services;
