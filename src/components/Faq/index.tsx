import { reviews } from '../../data/faq';
import './Faq.css';
import sugar from '../../assets/sugarimage.png';
import lemon from '../../assets/lemon.png';
import water from '../../assets/water.png';

const Faq = () => {
  return (
    <div className="py-20">
      <div className="mx-auto grid place-items-center px-6 xl:px-20" style={{ maxWidth: '1550px' }}>
        <h1 className="px-6 pb-6 uppercase text-center font-semibold leading-tight text-5xl sm:text-7xl xxl:text-8xl">
          the
          <br />
          <span className="text-white xl:ml-32 xxl:ml-44" style={{ color: '#CCA43A' }}>
            FAQs
          </span>
        </h1>

        <div className="">
          <p className="sm:px-14 lg:px-24 xl:px-60 text-center text-sm md:text-base leading-relaxed">
            Unlike other methods, sugaring is a natural alternative to hair removal. Our sugar paste
            is handcrafted with a blend of ingredients found in your kitchen: sugar, water, and
            lemon. It&apos;s gentle on all skin types, even the most sensitive, making it a safe and
            effective solution for all areas of the body. Our technique is designed to ensure
            maximum comfort, as sugar is never applied hot like wax and only adheres to dead skin
            cells therefore preventing skin tearing. After a completed session, you&apos;ll emerge
            with silky-smooth, exfoliated skin that will leave you feeling confident and radiant.
          </p>
          <div className="mx-auto grid place-items-center grid-cols-3 gap-x-4 my-10">
            <div className="mb-8 xl:mb-0">
              <img src={sugar} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-lg sm:text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                Sugar
              </p>
            </div>
            <div className="mb-8 xl:mb-0">
              <img src={water} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-lg sm:text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                water
              </p>
            </div>
            <div className="mb-8 xl:mb-0">
              <img src={lemon} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-lg sm:text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                lemon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="box py-10 px-6 xl:px-20">
            <div className="mx-auto" style={{ maxWidth: '1550px' }}>
              <p
                className="m-0 text-2xl font-medium tracking-wider text-center mb-4"
                style={{ color: '#CCA43A' }}>
                {review.question}
              </p>
              <p className="m-0 text-sm md:text-base leading-relaxed">{review.answer}</p>
              <ol type="1" className="mt-4 text-sm md:text-base leading-relaxed">
                {review.answerList?.map((item, index) => (
                  <li key={index} className="mb-4">
                    <span className="mr-2">🟠</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
