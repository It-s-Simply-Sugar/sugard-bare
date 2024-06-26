import './home.css';

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
    <div className="px-6 md:px-12">
      <div
        className="mx-auto py-10 md:py-24 bg-white grid place-items-center"
        style={{ maxWidth: '1200px' }}>
        <h2
          className="desktop-title text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase pb-8 lg:pb-14"
          style={{ color: '#CCA43A' }}>
          swing on by and get sugar&apos;d
        </h2>
        <div className="w-full md:flex md:flex-row-reverse mb-10 md:mb-24">
          <div className="md:w-1/2 grid place-items-center text-center px-4 xxs:px-10 md:px-0">
            <div
              className="text-sm lg:text-base xl:text-lg w-full py-8"
              style={{ backgroundColor: '#F3EFEB' }}>
              <p className="text-xl font-bold mb-4">Sugar&apos;d Bare</p>
              <p className="text-md font-semibold mb-1">Salon 705 Suites</p>
              <address className="mb-4 not-italic">
                123 West Bloomingdale Avenue
                <br />
                Brandon, FL 33511
              </address>
              <a
                href="tel:3038855985"
                className="hover:underline link"
                style={{ color: '#CCA43A' }}>
                303-885-5985
              </a>
              <br />
              <a
                href="mailto:sugardbare.official@gmail.com"
                className="hover:underline link"
                style={{ color: '#CCA43A' }}>
                sugardbare.official@gmail.com
              </a>
            </div>
          </div>
          <div
            className="md:w-1/2 bg-yellow-400 py-14 px-10"
            style={{ backgroundColor: '#CCA43A' }}>
            {hours.map((item, index) => (
              <div
                className="flex justify-between border-b mb-1"
                style={{ borderColor: '#605651' }}
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
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.2867157320557!2d-82.28981732387929!3d27.893173476076566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d3476fbe30f3%3A0xa19b37b569911e82!2sIt%E2%80%99s%20Simply%20Sugar%2F%20Sugaring%20Hair%20Removal!5e0!3m2!1sen!2sus!4v1682977932807!5m2!1sen!2sus"
          width="100%"
          className="google_map"
          style={{ border: '2px solid #CCB6A0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default BusinessHours;
