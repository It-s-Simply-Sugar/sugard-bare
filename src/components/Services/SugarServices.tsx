import { sugarServices } from '../../data';

const SugarServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="xl:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        {sugarServices.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 py-6 px-8 shadow rounded-md border border-solid border-gray-200 mb-6">
            <div className="flex justify-between mb-6">
              <p className="font-semibold text-base">{service.serviceName}</p>
              <p className="font-semibold text-base">${service.price}</p>
            </div>
            <div className="flex">
              <div className="xxs:hidden " style={{ width: '400px' }}>
                <img src={service.image} alt="" className="w-full" />
              </div>
              <div className="hidden xxs:block w-60 sm:w-24 lg:w-40 xl:w-1/2">
                <img src={service.image} alt="" className="w-full" />
              </div>
              <div className="ml-4 xl:w-1/2 grid place-items-center">
                <p className="text-sm md:text-base xxs:mb-2">{service.description}</p>
                <div className="hidden xxs:block flex justify-start items-center -mt-auto">
                  <button
                    className="text-xs py-1 px-2 text-white"
                    style={{ backgroundColor: '#CCB6A0' }}>
                    Book Service
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full xxs:hidden">
              <button
                className="w-full text-xs py-2 px-2 text-white"
                style={{ backgroundColor: '#CCB6A0' }}>
                Book Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SugarServices;
