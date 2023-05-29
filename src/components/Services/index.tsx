import ServiceTypes from './ServicesMenu';
import CancellationPolicy from './CancellationPolicy';

const Services = () => {
  return (
    <div className="py-20">
      <div
        className="mx-auto grid place-items-center px-6 md:px-20 xxl:px-0 mb-20"
        style={{ maxWidth: '1550px' }}>
        <div className="w-full bg-white">
          <h1 className="px-6 pb-6 uppercase text-center font-semibold leading-tight text-5xl sm:text-7xl xxl:text-8xl">
            our
            <br />
            <span className="text-white xl:ml-64 xxl:ml-96" style={{ color: '#CCA43A' }}>
              services
            </span>
          </h1>
          <div className="md:p-6 lg:p-0 lg:w-full grid place-items-center">
            <div>
              {/* <p className="px-10 sm:px-14 lg:px-24 xl:px-60 pb-10 text-center text-sm md:text-base leading-relaxed">
                Some text here
              </p> */}
              <div className="text-center">
                <a
                  href="#cancellation-policy"
                  className="text-sm md:text-base lg:text-lg underline font-semibold">
                  View Cancellation Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <ServiceTypes />
        <CancellationPolicy />
      </div>
    </div>
  );
};

export default Services;
