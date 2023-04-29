import { reviews } from '../../data/faq';
import './Faq.css';

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
        <div>
          <p className="px-10 sm:px-14 lg:px-24 xl:px-60 pb-10 text-sm md:text-base leading-relaxed">
            Unlike other methods, sugaring is a natural alternative to hair removal. Our sugar paste
            is handcrafted with a blend of ingredients found in your kitchen: sugar, water, and
            lemon. It&apos;s gentle on all skin types, even the most sensitive, making it a safe and
            effective solution for all areas of the body. Our technique is designed to ensure
            maximum comfort, as sugar is never applied hot like wax and only adheres to dead skin
            cells therefore preventing skin tearing. After a completed session, you&apos;ll emerge
            with silky-smooth, exfoliated skin that will leave you feeling confident and radiant.
          </p>
        </div>
      </div>
      <div className="mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="box py-10 px-10">
            <div className="mx-auto" style={{ maxWidth: '1550px' }}>
              <p
                className="text-2xl font-medium tracking-wider text-center mb-4"
                style={{ color: '#CCA43A' }}>
                {review.question}
              </p>
              <p className="text-sm md:text-base leading-relaxed">{review.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
