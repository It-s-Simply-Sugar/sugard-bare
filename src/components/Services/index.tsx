import ServiceTypes from './ServiceTypes';
import CancellationPolicy from './CancellationPolicy';
import heroImage from '../../assets/our-story-hero.png';

const Services = () => {
  return (
    <div
      className="mx-auto grid place-items-center px-6 md:px-20 xxl:px-0"
      style={{ maxWidth: '1550px' }}>
      <div>
        <h3 className="mt-20 text-center text-2xl xl:text-4xl font-semibold pb-3 border-solid">
          SERVICES
        </h3>
        <div className="w-52 xl:w-64 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
      </div>
      <div>
        <p className="px-10 sm:px-14 lg:px-24 xl:px-60 pb-10 text-center text-sm md:text-base leading-relaxed">
          Unlike other methods, sugaring is a natural alternative to hair removal. Our sugar paste
          is handcrafted with a blend of ingredients found in your kitchen: sugar, water, and lemon.
          It&apos;s gentle on all skin types, even the most sensitive, making it a safe and
          effective solution for all areas of the body. Our technique is designed to ensure maximum
          comfort, as sugar is never applied hot like wax and only adheres to dead skin cells
          therefore preventing skin tearing. After a completed session, you&apos;ll emerge with
          silky-smooth, exfoliated skin that will leave you feeling confident and radiant.
        </p>
        <div className="text-center">
          <a href="#cancellation-policy" className="text-sm underline font-semibold">
            View Cancellation Policy
          </a>
        </div>
      </div>
      <ServiceTypes />
      <CancellationPolicy />
    </div>
  );
};

export default Services;
