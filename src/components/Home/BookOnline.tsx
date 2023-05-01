const BookOnline = () => {
  return (
    <div className="pb-20" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="mx-auto" style={{ maxWidth: '1550px' }}>
        <div className="mx-auto grid place-items-center px-6 md:px-12 xlz:px-0">
          <div
            className="px-10 py-14 -mt-20 flowers-left flowers-right"
            style={{ backgroundColor: '#F3EFEB' }}>
            <p className="px-0 md:px-20 xl:px-40 pb-6 text-center text-xl sm:text-2xl md:text-3xl font-semibold">
              Book your appointment today - experience the ultimate in sugaring services
            </p>
            <p className="px-0 md:px-20 xl:px-40 text-left md:text-center text-sm md:text-base lg:text-lg leading-relaxed">
              With our warm and welcoming atmosphere, top-tier treatments, and commitment to
              exceeding your expectations, you&apos;re sure to walk away feeling thoroughly
              satisfied. Don&apos;t wait – schedule your appointment now and discover the difference
              of Sugar’d Bare.
            </p>
            <div className="text-center mt-6">
              <button className="schedule_appointnent__btn text-sm md:text-base border-2 px-4 py-2">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOnline;
