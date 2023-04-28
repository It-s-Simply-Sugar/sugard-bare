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
            <div className="flex flex-col sm:flex-row">
              <div className="w-32 lg:w- xl:w-1/2">
                <img src={service.image} alt="" className="" />
              </div>
              <div className="ml-4 xl:w-1/2">
                <p className="text-sm mb-2">{service.description}</p>
                <div className="flex justify-start items-center -mt-auto">
                  <button
                    className="text-xs py-1 px-2 text-white"
                    style={{ backgroundColor: '#C4B682' }}>
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SugarServices;
