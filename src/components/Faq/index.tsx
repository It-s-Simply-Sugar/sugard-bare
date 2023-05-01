import { reviews } from '../../data/faq';
import './Faq.css';
import sugar from '../../assets/sugarimage.png';
import lemon from '../../assets/lemon.png';
import water from '../../assets/water.png';

const Faq = () => {
  return (
    <div className="py-20">
      <div className="mx-auto grid place-items-center px-6 xl:px-20" style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="text-center tracking-wider text-2xl xl:text-3xl font-semibold pb-3 border-solid">
            FAQs
          </h3>
          <div className="w-52 xl:w-64 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>

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
