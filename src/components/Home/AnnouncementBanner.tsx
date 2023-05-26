interface Props {
  closeBanner: boolean;
  closeBannerHandler: () => void;
}
const AnnouncementBanner = ({ closeBanner, closeBannerHandler }: Props) => {
  return (
    <>
      {!closeBanner && (
        <div style={{ backgroundColor: '#F3EFEB' }} className="shadow">
          <div className="relative mx-auto px-6 md:px-12 py-6" style={{ maxWidth: '1450px' }}>
            <div className="flex justify-center items-center pr-3">
              <div>
                <p className="text-center text-sm md:text-md mb-1">
                  <span className="font-bold">New Look!</span> Same great services.
                </p>
                <p className="text-center text-xs md:text-sm font-thin">
                  Book your appointment today and experience the difference of natural sugar hair
                  removal.
                </p>
              </div>
              <button className="absolute right-0 pr-4 top-[20px]" onClick={closeBannerHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"
                    fill="#5F5551"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBanner;
