import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './navigation.css';
import HamburgerNavigation from './HamburgerNavigation';
import AnnouncementBanner from '../../components/Home/AnnouncementBanner';
import logo from '../../assets/sugardbare-logo.png';
import logo2 from '../../assets/logo-version2.png';

interface Props {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  isNavOpen: boolean;
  isNavClosing: boolean;
  handleCloseNav: () => void;
  handleAnimationEnd: (e: React.AnimationEvent<HTMLDivElement>) => void;
}
const Navigation = ({
  setIsNavOpen,
  isNavOpen,
  isNavClosing,
  handleAnimationEnd,
  handleCloseNav
}: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeLink, setActiveLink] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [closeBanner, setCloseBanner] = useState(false);

  const location = useLocation();
  const closeBannerHandler = () => {
    setCloseBanner(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [showBanner]);

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 300 && !showBanner) {
      setShowBanner(true);
    } else if (scrollTop < 300 && showBanner) {
      setShowBanner(false);
    }
  };

  const getLinkClass = (path: string) => {
    if (path === activeLink) {
      if (activeLink === '/') {
        return 'nav__item-other nav__item-other--active';
      } else {
        return 'nav__item-home nav__item-home--active';
      }
    } else {
      if (activeLink === '/') {
        return 'nav__item nav__item--home';
      } else {
        return 'nav__item nav__item--other';
      }
    }
  };

  console.log(activeLink);

  return (
    <>
      <div className={` ${showBanner ? 'transition' : ''}`}>
        <AnnouncementBanner closeBannerHandler={closeBannerHandler} closeBanner={closeBanner} />
      </div>
      <nav aria-label="Main navigation">
        {windowWidth >= 1024 ? (
          <div
            style={
              activeLink === '/' ? { backgroundColor: '#CCA43A' } : { backgroundColor: '#FFFFFF' }
            }>
            <div
              className="mx-auto pt-12 px-6 md:px-12 flex justify-between items-center py-5 font-medium"
              style={{ maxWidth: '1550px' }}>
              <Link to="/">
                <div>
                  <img src={activeLink === '/' ? logo : logo2} alt="logo" className="w-32" />
                </div>
              </Link>
              <div className="flex justify-center items-center">
                <ul className="flex gap-x-14 mr-14">
                  <li className={getLinkClass('/')}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={getLinkClass('/services')}>
                    <Link to="/services">Services</Link>
                  </li>
                  <li className={getLinkClass('/faq')}>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li className={getLinkClass('/about')}>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
                <a
                  href="https://www.vagaro.com/itssimplysugar/services"
                  target="_blank"
                  rel="noreferrer">
                  <button
                    type="button"
                    className={`border-2 border-solid rounded-full px-5 py-2 ${
                      activeLink === '/' ? 'book-online__btn border-white' : 'book-online__btn_2'
                    }`}>
                    Book Online
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <HamburgerNavigation
            showBanner={closeBanner}
            setIsNavOpen={setIsNavOpen}
            isNavOpen={isNavOpen}
            isNavClosing={isNavClosing}
            handleCloseNav={handleCloseNav}
            handleAnimationEnd={handleAnimationEnd}
          />
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
