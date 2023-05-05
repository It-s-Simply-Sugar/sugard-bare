import './Benefits.css';
import spaInterior from '../../../assets/spa-interior.png';
import flower from '../../../assets/flower-icon.png';

const Benefits = () => {
  return (
    <div
      className="px-6 md:px-12 py-8 xsl:py-10 sm:py-20 lg:py-40 relative"
      style={{ backgroundColor: '#F3EFEB' }}>
      <div className="mx-auto grid place-items-center" style={{ maxWidth: '1550px' }}>
        <div
          className="w-full lg:flex flex-reverse bg-white"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div className="lg:w-full grid place-items-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase pb-8">
              benefits of sugaring
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-8">
              <div className="mb-8 xs:mb-0">
                <img src={flower} alt="" className="w-8 rounded-full" />
                <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">100% Natural</p>
                <p className="text-sm md:text-base lg:text-lg">
                  Our product uses 100% natural ingredients: lemon, water, sugar.
                </p>
              </div>
              <div className="mb-8 xs:mb-0">
                <img src={flower} alt="" className="w-8 rounded-full" />
                <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                  For All Skin Type
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Our product uses 100% natural ingredients: lemon, water, sugar. You&apos;ll be
                  happy. Among some other things.
                </p>
              </div>
              <div className="mb-8 xs:mb-0">
                <img src={flower} alt="" className="w-8 rounded-full" />
                <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                  No Side Effect
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Our product uses 100% natural ingredients: lemon, water, sugar.
                </p>
              </div>
              <div className="mb-8 xs:mb-0">
                <img src={flower} alt="" className="w-8 rounded-full" />
                <p className="font-bold text-base md:text-md lg:text-xl mt-2 mb-4">
                  Gentle Exfoliation
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Our product uses 100% natural ingredients: lemon, water, sugar.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:block hidden" style={{ width: '600px' }}>
            <img
              src={spaInterior}
              alt=""
              className="lg:absolute lg:top-[-350px] lg:right-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
