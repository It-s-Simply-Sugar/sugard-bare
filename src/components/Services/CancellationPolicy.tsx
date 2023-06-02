const CancellationPolicy = () => {
  return (
    <div
      id="cancellation-policy"
      className="py-24"
      style={{ backgroundColor: '#605651', color: '#F3EFEB' }}>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3 className=" text-center text-2xl font-semibold pb-3 border-solid">
            Cancellation Policy
          </h3>
          <div className="w-56 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>
      </div>
      <p className="px-10 sm:px-14 lg:px-24 xl:px-60 text-center text-sm md:text-base lg:text-lg leading-relaxed">
        Kindly be considerate of my time and schedule by canceling your appointment at least 24
        hours prior to the scheduled time. You may reach me through email at{' '}
        <a
          href="mailto:sugardbare.official@gmail.com"
          style={{ color: '#CCA43A' }}
          className="hover:underline">
          sugardbare.official@gmail.com
        </a>
        , text or call at{' '}
        <a href="tel:3038855985" style={{ color: '#CCA43A' }} className="hover:underline">
          303-885-5985
        </a>
        . Please note that failure to show up for your appointment will result in a fee charge, and
        a deposit will be required to secure your next appointment. For clients who have purchased a
        Groupon Voucher, not showing up for your scheduled appointment will result in the voucher
        being marked as redeemed and you will not be able to use it for a future appointment.
      </p>
    </div>
  );
};

export default CancellationPolicy;
