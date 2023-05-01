import { bikiniServices } from '../../data';

const BikiniServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="xl:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        {bikiniServices.map((service, index) => (
          <div
            key={index}
            className="bg-white py-6 px-8 shadow-md rounded-md border border-solid border-gray-200 mb-6">
            <div className="flex justify-between mb-6">
              <p className="font-semibold text-base">{service.serviceName}</p>
              <p className="font-semibold text-base">${service.price.toFixed(2)}</p>
            </div>
            <div className="w-full flex">
              <div className="xxs:hidden grid place-items-center" style={{ width: '200px' }}>
                <img src={service.image} alt="" className="w-full" />
              </div>
              <div className="hidden xxs:block w-48 lg:w-40 xl:w-1/2">
                <img src={service.image} alt="" className="w-full" />
              </div>
              <div className="w-full ml-4 xl:w-1/2 grid place-items-center">
                <p className="text-sm md:text-base xxs:mb-2">{service.description}</p>
                <div className="w-full -mt-auto hidden xxs:block flex justify-start items-center -mt-auto">
                  <button
                    className="w-full sm:w-1/2 lg:w-full sm:w-auto text-xs p-2 text-white"
                    style={{ backgroundColor: '#CCB6A0' }}>
                    Book Service
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full xxs:hidden">
              <button
                className="w-full text-xs p-2 text-white"
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

export default BikiniServices;
