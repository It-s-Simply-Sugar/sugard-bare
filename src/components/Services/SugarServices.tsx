import { sugarServices } from '../../data';

const SugarServices = () => {
  return (
    <div className="grid place-items-center">
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {sugarServices.map((service, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-dotted border-b-2 border-black mb-6">
            <p>{service.serviceName}</p>
            <p>${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SugarServices;
