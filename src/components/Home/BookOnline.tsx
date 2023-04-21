const BookOnline = () => {
  return (
    <div className="py-20" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="mx-auto grid place-items-center px-6 xl:px-20" style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="text-center text-2xl font-semibold pb-3 border-solid">Book Online</h3>
          <div className="w-52 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>
        <div className="p-16" style={{ backgroundColor: '#C4B682' }}>
          <p className="px-40 pb-6 text-center text-white text-2xl font-semibold">
            Book your appointment today - experience the ultimate in sugaring services.
          </p>
          <p className="px-40 text-center text-base leading-relaxed">
            With our warm and welcoming atmosphere, top-tier treatments, and commitment to exceeding
            your expectations, you&apos;re sure to walk away feeling thoroughly satisfied.
            Don&apos;t wait – schedule your appointment now and discover the difference of Sugar’d
            Bare.
          </p>
          <div className="text-center mt-6">
            <button className="border-2 border-white px-4 py-2 hover:bg-white text-white hover:text-orange-300">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOnline;
