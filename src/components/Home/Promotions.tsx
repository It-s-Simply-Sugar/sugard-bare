import promotionImage from '../../assets/promotion-image.png';

const Promotions = () => {
  return (
    <div className="pt-20 bg-white" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="mx-auto grid place-items-center px-6 xl:px-20" style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="text-center text-2xl xl:text-4xl font-semibold pb-3 border-solid">
            PROMOTIONS
          </h3>
          <div className="w-52 xl:w-64 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>
        <div className="md:flex justify-between items-center xl:px-20">
          <div className="md:w-1/2 xl:w-3/4 xl:mr-40">
            <p
              className="text-center md:text-left pb-6 text-xl md:text-2xl font-semibold"
              style={{ color: '#C4B682' }}>
              Get More for Less: Our Latest Promotions and Discounts!
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Periodically, we offer exclusive promotions, discounts, and package bundles to our
              valued clients. Check out our Groupon page to stay up-to-date on our current offerings
              and save on your favorite services!
            </p>
            <div className="text-center mt-6">
              <button className="border-2 border-black px-4 py-2">View Promotions</button>
            </div>
          </div>
          <div className="md:w-1/2 xl:w-1/4 flex justify-center items-center md:justify-end md:items-end">
            <img src={promotionImage} alt="" className="w-80 xl:max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
