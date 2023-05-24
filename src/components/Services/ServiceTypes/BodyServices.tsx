import { bodyServices } from '../../../data';
import ServiceItem from '../ServiceItem';
import '../services.css';

const BodyServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="xl:w-3/4 grid grid-cols-1 xsl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xxl:grid-cols-3 gap-x-6">
        {bodyServices.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BodyServices;
