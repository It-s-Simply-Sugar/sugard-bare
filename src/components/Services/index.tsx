import ServiceTypes from './ServiceTypes';
import CancellationPolicy from './CancellationPolicy';
import heroImage from '../../assets/services-bg.png';

const Services = () => {
  return (
    <div
      className="mx-auto grid place-items-center px-6 md:px-20 xxl:px-0 mb-20 pt-10 xs:pt-16 lg:pt-10"
      style={{ maxWidth: '1550px' }}>
      <div className="w-full bg-white">
        <h1 className="px-6 pb-6 uppercase text-center font-semibold leading-tight text-5xl sm:text-7xl xxl:text-8xl">
          our
          <br />
          <span className="text-white xl:ml-64 xxl:ml-96" style={{ color: '#CCB6A0' }}>
            services
          </span>
        </h1>
        <div className="md:p-6 lg:p-0 lg:w-full grid place-items-center">
          <div>
            <p className="px-10 sm:px-14 lg:px-24 xl:px-60 pb-10 text-center text-sm md:text-base leading-relaxed">
              Unlike other methods, sugaring is a natural alternative to hair removal. Our sugar
              paste is handcrafted with a blend of ingredients found in your kitchen: sugar, water,
              and lemon. It&apos;s gentle on all skin types, even the most sensitive, making it a
              safe and effective solution for all areas of the body. Our technique is designed to
              ensure maximum comfort, as sugar is never applied hot like wax and only adheres to
              dead skin cells therefore preventing skin tearing. After a completed session,
              you&apos;ll emerge with silky-smooth, exfoliated skin that will leave you feeling
              confident and radiant.
            </p>
            <div className="text-center">
              <a href="#cancellation-policy" className="text-sm underline font-semibold">
                View Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <ServiceTypes />
      <CancellationPolicy />
    </div>
  );
};

export default Services;
