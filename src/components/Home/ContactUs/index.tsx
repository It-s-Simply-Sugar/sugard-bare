import './ContactUs.css';
import spaInterior from '../../../assets/spa-interior.png';
import anna from '../../../assets/anna-headshot.png';

const ContactUs = () => {
  return (
    <div className="py-20" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="mx-auto grid place-items-center px-6 xl:px-20" style={{ maxWidth: '1550px' }}>
        <div>
          <h3 className="uppercase text-center tracking-wider text-2xl xl:text-3xl font-semibold pb-3 border-solid">
            contact us
          </h3>
          <div className="w-52 xl:w-64 h-1 bg-black mb-10" style={{ backgroundColor: '#CCA43A' }} />
        </div>
        <div
          className="w-full lg:flex flex-reverse bg-white"
          style={{ backgroundColor: '#F3EFEB' }}>
          <div className="lg:block hidden" style={{ width: '600px' }}>
            <img src={spaInterior} alt="" />
          </div>
          <div className="p-6 lg:p-0 lg:w-full grid place-items-center">
            <div className="text-center">
              <img src={anna} alt="" className="mx-auto w-32 rounded-full" />
              <p className="font-semibold text-lg" style={{ color: '#C4B682' }}>
                Anna Trujillo
              </p>
              <div className="mt-4">
                <p className="font-semibold text-md mb-2">Salon 705 Suites</p>
                <p>
                  125 West Bloomingdale Avenue <br /> Brandon, FL 33511
                </p>
                <div className="mt-6">
                  <a href="tel:3038855985" className="hover:underline link">
                    303-885-5985
                  </a>
                </div>
                <a href="mailto:sugardbare.official@gmail.com" className="hover:underline link">
                  sugardbare.official@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center mb-2">Have a question?</p>
              <div className="text-center">
                <button className="contact_us__btn text-sm md:text-base border-2 px-12 py-2">
                  Message Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
