import { bodyServices } from '../../data';

const BodyServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        {bodyServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 xsl:p-6 shadow-md rounded-md border border-solid border-gray-200 mb-6">
            <div className="flex justify-between xsl:pb-4">
              <p className="font-semibold text-sm">{service.serviceName}</p>
              <p className="font-semibold text-sm">${service.price.toFixed(2)}</p>
            </div>
            <div className="w-full xsl:flex">
              <div className="service-image mx-auto">
                <img src={service.image} alt="" className="w-full" />
              </div>
              <div className="w-full xsl:ml-4 xl:w-1/2 grid place-items-center">
                <p className="text-center xsl:text-left text-xs xxs:mb-2">{service.description}</p>
                <div className="w-full -mt-auto hidden xxs:block flex justify-start items-center -mt-auto">
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

export default BodyServices;
