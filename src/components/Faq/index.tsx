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
          <div className="mx-auto grid place-items-center grid-cols-3 gap-x-4 my-20">
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
      <div className="mt-10 mx-auto px-12" style={{ maxWidth: '1550px' }}>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            01
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>What is sugaring?</p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              Sugaring is a natural method of hair removal that has been practiced for centuries. It
              involves using a mixture of sugar, water, and lemon juice to create a paste that is
              applied against the direction of hair growth and removed in the direction of growth.
            </p>
            <p className="mb-2">
              This technique is a popular alternative to waxing and shaving, particularly for those
              with sensitive skin. One of the benefits of sugaring is that the sugar paste is used
              at body temperature, eliminating the risk of burns that can occur with hot wax.
            </p>
            <p className="mb-2">
              Moreover, the paste does not stick to live skin cells, making it safe to repeat the
              process several times without causing any damage to the client&apos;s skin.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            02
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>
              How long does the hair need to be for my first sugaring appointment?
            </p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              To ensure a successful sugaring appointment, it is important to have the hair at the
              optimal length. For first-time clients who have been shaving, it is recommended to
              have at least two weeks of hair growth. This allows the sugar paste to adhere to the
              hair more effectively. However, if the hair growth is too long, the aesthetician may
              need to trim it to the appropriate length for sugaring. This ensures that the hair is
              not too short, making it difficult for the paste to grip, or too long, which can be
              uncomfortable for the client during the removal process.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            03
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>How long will it take for my hair to grow back?</p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              After your first sugaring session, the hair follicle will gradually deplete, which
              means that the hair will grow back finer and sparser over time. Typically, clients can
              expect hair regrowth to occur between 3 to 6 weeks after sugaring, depending on their
              individual hair growth patterns. It is important to note that with each successive
              sugaring treatment, the hair growth will become less frequent, and the hair will
              become thinner and weaker.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            04
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>Is sugaring sanitary?</p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              Sugaring is a highly sanitary hair removal method, and there are several reasons why.
              Firstly, only a single ball of sugar is used throughout the entire treatment, which
              eliminates the risk of double dipping and cross-contamination. Once the sugar ball is
              used and is no longer effective, it is disposed of, and a new ball of sugar is used
              for the next area of the body. Secondly, during the sugaring process, the sugar paste
              picks up dead skin cells and hair, leaving the skin smooth and clean. This further
              reduces the risk of cross-contamination and ensures that the treatment area remains
              hygienic throughout the entire process. Moreover, to maintain a high level of
              sanitation, your esthetician wears gloves for every service. This adds an extra layer
              of protection against any potential bacteria or germs.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            05
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>Should I exfoliate before my appointment?</p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              Preparing your skin before a sugaring appointment can help to improve the results and
              ensure a more comfortable experience. Gently exfoliating your skin a day or two before
              your appointment is recommended to remove any dead skin cells and ensure that the hair
              is ready for removal. However, it is important to avoid using harsh scrubs or
              exfoliants on the day of your appointment, as this can irritate the skin and make it
              more sensitive. A washcloth or a gentle scrub is ideal for exfoliating your skin
              before sugaring, but be careful not to scrub too hard. It is also important to avoid
              using any products that contain retinol or retin-A for at least two weeks before your
              appointment, as these can make your skin more sensitive and prone to irritation. If
              you are taking any prescription drugs that affect your skin, it is important to
              consult with your healthcare professional before scheduling a sugaring appointment.
              This includes medications like Accutane, which should not be used up to 45 days before
              a sugaring session.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            06
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>What are aftercare post sugaring?</p>
          </div>
          <div className="w-full text-sm md:text-base mb-4 leading-relaxed">
            <p className="mb-2">
              Proper aftercare is essential to ensure that your skin stays smooth and healthy after
              a sugaring appointment. Here are some important tips for post-sugaring care:
            </p>
            <ul>
              <li>
                Keep the treated area clean: Wash your hands before touching the treated area for at
                least 24 hours after sugaring. This will help to reduce the risk of infection and
                irritation.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="w-full lg:flex lg:justify-between border-b border-solid mt-10"
          style={{ borderColor: '#CCA43A' }}>
          <p className="font-bold mr-10 mb-4 lg:mb-0" style={{ color: '#CCA43A' }}>
            07
          </p>
          <div className="w-full text-2xl font-extralight mb-4 lg:mb-0">
            <p style={{ maxWidth: '450px' }}>What is your cancellation policy?</p>
          </div>
          <div className="w-full text-sm md:text-base leading-relaxed mb-4">
            <p className="mb-2">
              Kindly be considerate of my time and schedule by canceling your appointment at least
              24 hours prior to the scheduled time. You may reach me through email at{' '}
              <a
                href="mailto:sugardbare.official@gmail.com"
                style={{ color: '#CCA43A' }}
                className="hover:underline">
                sugardbare.official@gmail.com
              </a>
              , text or call at{' '}
              <a href="tel:3038855985" style={{ color: '#CCA43A' }} className="hover:underline">
                303-885-5985
              </a>
              . Please note that failure to show up for your appointment will result in a fee
              charge, and a deposit will be required to secure your next appointment. For clients
              who have purchased a Groupon Voucher, not showing up for your scheduled appointment
              will result in the voucher being marked as redeemed and you will not be able to use it
              for a future appointment.
            </p>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Faq;
