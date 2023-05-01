const BusinessHours = () => {
  const hours = [
    { day: 'Sunday', hour: '10:30 AM - 4:00 PM' },
    { day: 'Monday', hour: 'Closed' },
    { day: 'Tuesday', hour: '10:30 AM - 6:00 PM' },
    { day: 'Wednesday', hour: '1:30 PM - 8:00 PM' },
    { day: 'Thursday', hour: '10:30 AM - 6:00 PM' },
    { day: 'Friday', hour: '10:30 AM - 4:00 PM' },
    { day: 'Saturday', hour: '10:30 AM - 4:00 PM' }
  ];
  return (
    <div
      className="mx-auto py-20 bg-white grid place-items-center px-6 md:px-12"
      style={{ maxWidth: '1550px' }}>
      <div>
        <h3 className="uppercase text-center tracking-wider text-2xl xl:text-3xl font-semibold pb-3 border-solid">
          business hours
        </h3>
        <div className="w-52 xl:w-80 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
      </div>
      <div className="w-full mb-16">
        {hours.map((item, index) => (
          <div
            className="flex justify-between border-b mb-1"
            style={{ borderColor: '#CCB6A0' }}
            key={index}>
            <div className="font-medium text-sm sm:text-md xl:text-lg">
              <p>{item.day}</p>
            </div>
            <div className="font-medium text-sm sm:text-md xl:text-lg">
              <p>{item.hour}</p>
            </div>
          </div>
        ))}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.2867157320557!2d-82.28981732387929!3d27.893173476076566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d3476fbe30f3%3A0xa19b37b569911e82!2sIt%E2%80%99s%20Simply%20Sugar%2F%20Sugaring%20Hair%20Removal!5e0!3m2!1sen!2sus!4v1682977932807!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: '2px solid #CCB6A0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default BusinessHours;
