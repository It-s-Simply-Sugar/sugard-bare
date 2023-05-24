interface Service {
  serviceName: string;
  price: number;
  image: string;
  description: string;
}

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const { serviceName, price, image, description } = service;
  return (
    <div className="grid bg-white p-4 xxs:px-14 xxs:py-6 xsl:p-6 shadow-md rounded-md border border-solid border-gray-200 mb-6">
      <div className="mb-auto">
        <div className="flex justify-between xsl:pb-4">
          <p className="font-semibold text-sm">{serviceName}</p>
          <p className="font-semibold text-sm">${price.toFixed(2)}</p>
        </div>
        <div className="service-image mx-auto grid place-items-center">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
      <div className="mt-auto -full lg:flex">
        <div className="description w-full grid place-items-center">
          <p className="text-center my-3 lg:text-left text-xs">{description}</p>
          <a
            className="w-full mt-auto hidden xxs:block flex justify-start items-center -mt-auto"
            href="https://www.vagaro.com/itssimplysugar/services"
            target="_blank"
            rel="noreferrer">
            <button className="book-service-btn w-full sm:w-full text-xs p-2 text-white">
              Book Service
            </button>
          </a>
        </div>
      </div>
      {/* mobile */}
      <a
        className="mt-4 w-full xxs:hidden"
        href="https://www.vagaro.com/itssimplysugar/services"
        target="_blank"
        rel="noreferrer">
        <button className="book-service-btn w-full text-xs p-2 text-white">Book Service</button>
      </a>
    </div>
  );
};

export default ServiceItem;
