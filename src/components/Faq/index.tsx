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
          <span className="text-white xl:ml-32 xxl:ml-44" style={{ color: '#CCB6A0' }}>
            FAQs
          </span>
        </h1>

        <div className="">
          <div className="mx-auto grid place-items-center gap-x-10 grid-cols-1 sm:grid-cols-3 my-10">
            <div className="mb-8 xl:mb-0">
              <img src={sugar} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                Sugar
              </p>
            </div>
            <div className="mb-8 xl:mb-0">
              <img src={water} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                water
              </p>
            </div>
            <div className="mb-8 xl:mb-0">
              <img src={lemon} alt="one" className="w-32 lg:w-40" />
              <p
                className="text-center mt-4 xl:mt-10 text-2xl uppercase font-extralight"
                style={{ color: '#CCA43A' }}>
                lemon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="box py-10 px-10">
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
