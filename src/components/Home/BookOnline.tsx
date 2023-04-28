const BookOnline = () => {
  return (
    <div className="pb-20 bg-white">
      <div className="mx-auto grid place-items-center px-6 md:px-0" style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="text-center text-2xl xl:text-4xl font-semibold pb-3 border-solid">
            BOOK ONLINE
          </h3>
          <div className="w-52 xl:w-64 h-1 bg-black mb-10" style={{ backgroundColor: '#C4B682' }} />
        </div>

        <div
          className="p-10 md:p-16 flowers-left flowers-right"
          style={{ backgroundColor: '#C4B682' }}>
          <p className="px-0 md:px-20 xl:px-40 pb-6 text-center text-white text-xl md:text-2xl font-semibold">
            Book your appointment today - experience the ultimate in sugaring services.
          </p>
          <p className="px-0 md:px-20 xl:px-40 text-left md:text-center text-sm md:text-base leading-relaxed">
            With our warm and welcoming atmosphere, top-tier treatments, and commitment to exceeding
            your expectations, you&apos;re sure to walk away feeling thoroughly satisfied.
            Don&apos;t wait – schedule your appointment now and discover the difference of Sugar’d
            Bare.
          </p>
          <div className="text-center mt-6">
            <button className="text-sm md:text-base border-2 border-white px-4 py-2 hover:bg-white text-white hover:text-orange-300">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOnline;
