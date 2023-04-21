import promotionImage from '../../assets/promotion-image.png';

const Promotions = () => {
  return (
    <div className="pt-20 bg-white">
      <div
        className="mx-auto grid place-items-center px-6 md:px-20 xxl:px-0"
        style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="text-center text-2xl font-semibold pb-3 border-solid">Promotions</h3>
          <div className="w-52 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>
        <div className="md:flex justify-between items-center ">
          <div className="md:w-1/2 xl:w-3/4 xl:mr-60">
            <p className="pb-6 text-2xl font-semibold" style={{ color: '#C4B682' }}>
              Get More for Less: Our Latest Promotions and Discounts!
            </p>
            <p className="text-base leading-relaxed">
              Periodically, we offer exclusive promotions, discounts, and package bundles to our
              valued clients. Check out our Groupon page to stay up-to-date on our current offerings
              and save on your favorite services!
            </p>
            <div className="text-center mt-6">
              <button className="border-2 border-black px-4 py-2">View Promotions</button>
            </div>
          </div>
          <div className="md:w-1/2 xl:w-1/4 flex justify-center items-center md:justify-end md:items-end">
            <img src={promotionImage} alt="" className="xl:max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
