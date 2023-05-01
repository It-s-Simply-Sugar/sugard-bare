import Marquee from 'react-fast-marquee';
import './Reviews.css';
import quotes from '../../../assets/quotes.png';
import { reviews } from '../../../data';

const Reviews = () => {
  return (
    <div className="pt-20 bg-white">
      <div
        className="relative mx-auto grid place-items-center px-6 md:px-12"
        style={{ maxWidth: '1550px' }}>
        <p className="uppercase tracking-wider text-center text-xl sm:text-2xl xl:text-3xl font-semibold pb-3">
          10+ years in business
        </p>
        <img
          src={quotes}
          alt=""
          className="w-8 md:w-9 absolute top-[40%] right-[78%] xlz:right-[58.5%]"
        />
        <p className="pt-6 text-lg sm:text-2xl font-light tracking-wider">
          See what our clients <br /> have to say about us!
        </p>
      </div>
      <div className="mt-10 mx-auto" style={{ maxWidth: '1550px' }}>
        <Marquee className="marquee-container-div flex" direction="left" speed={50}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mx-4 rounded-2xl px-10 py-6"
              style={{ maxWidth: '400px', height: '200px', backgroundColor: '#F3EFEB' }}>
              <div className="grid place-items-center">
                <img src={review.image} alt="icon" className="w-12 mb-2 rounded-full" />
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16">
                        <path
                          d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                          fill="#CCA43A"></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-center my-2 font-light">
                &quot;{review.review.slice(0, 125)} {review.review.length > 125 ? '...' : ''}&quot;
              </p>
              {review.review.length > 125 && (
                <p className="text-center text-xs underline cursor-pointer">See full review</p>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
export default Reviews;
