import { useState, useEffect } from 'react';
import promotionImage from '../../assets/promotion-image.png';
import promotionMobileImage from '../../assets/promotions-mobile.png';

const Promotions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const promotionImgSrc = windowWidth < 768 ? promotionMobileImage : promotionImage;
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto grid place-items-center px-6 md:px-12" style={{ maxWidth: '1550px' }}>
        <div className="md:flex justify-between items-center xl:px-20">
          <div className="md:w-1/2 xl:w-3/4 xl:mr-40 mb-10 md:mb-0">
            <p
              className="text-center md:text-left pb-6 text-xl sm:text-2xl md:text-3xl font-semibold"
              style={{ color: '#C4B682' }}>
              Get More for Less: Our Latest Promotions and Discounts!
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Periodically, we offer exclusive promotions, discounts, and package bundles to our
              valued clients. Check out our Groupon page to stay up-to-date on our current offerings
              and save on your favorite services!
            </p>
            <div className="text-center mt-6">
              <button className="promotion_btn border-2 px-8 py-2 text-sm md:text-base">
                View Promotions
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/4 xl:w-1/4 flex justify-center items-center md:justify-end md:items-end">
            <img src={promotionImgSrc} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
