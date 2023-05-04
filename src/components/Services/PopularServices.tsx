import { popularServices } from '../../data';

const PopularServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="xl:w-3/4 grid grid-cols-1 xsl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xxl:grid-cols-3 gap-x-6">
        {popularServices.map((service, index) => (
          <div
            key={index}
            className="grid bg-white p-4 xxs:px-14 xxs:py-6 xsl:p-6 shadow-md rounded-md border border-solid border-gray-200 mb-6">
            <div className="mb-auto">
              <div className="flex justify-between xsl:pb-4">
                <p className="font-semibold text-sm">{service.serviceName}</p>
                <p className="font-semibold text-sm">${service.price.toFixed(2)}</p>
              </div>
              <div className="service-image mx-auto grid place-items-center">
                <img src={service.image} alt="" className="w-full" />
              </div>
            </div>
            <div className="mt-auto -full lg:flex">
              <div className="description w-full lg:ml-4  grid place-items-center">
                <p className="text-center my-3 lg:text-left text-xs">{service.description}</p>
                <div className="w-full mt-auto hidden xxs:block flex justify-start items-center -mt-auto">
                  <button
                    className="w-full sm:w-1/2 sm:w-full sm:w-auto text-xs p-2 text-white"
                    style={{ backgroundColor: '#CCB6A0' }}>
                    Book Service
                  </button>
                </div>
              </div>
            </div>
            {/* mobile */}
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

export default PopularServices;
