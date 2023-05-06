import React, { useState, useEffect } from 'react';
import './navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/sugardbare-logo.png';

interface Props {
  showBanner: boolean;
}

const HamburgerNavigation = ({ showBanner }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavClosing, setIsNavClosing] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getLinkClass = (path: string) => {
    if (path === activeLink) {
      return 'nav__item-mobile nav__item-mobile--active';
    } else {
      return 'nav__item-mobile';
    }
  };

  const handleCloseNav = () => {
    setIsNavClosing(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === 'slideOut') {
      setIsNavOpen(false);
      setIsNavClosing(false);
      e.currentTarget.classList.remove('animate-slide-out');
    }
  };

  return (
    <div className="mx-auto py-4 px-10 font-medium" style={{ backgroundColor: '#CCB6A0' }}>
      <div className="flex justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-20 sm:w-24 md:w-32" />
          </div>
        </Link>
        {!isNavOpen ? (
          <button className="p-0" onClick={() => setIsNavOpen(true)}>
            <span
              className="hamburger_line_1 block w-8 mb-1"
              style={{ height: '2px', backgroundColor: '#F6F5F5' }}></span>
            <span
              className="hamburger_line_2 block w-8"
              style={{ height: '2px', backgroundColor: '#F6F5F5' }}></span>
          </button>
        ) : (
          <div className="grid place-items-end" style={{ zIndex: 10 }}>
            <div
              className={`cursor-pointer close ${
                !showBanner ? 'close-when-banner-active' : 'close-when-banner-inactive'
              }`}
              onClick={handleCloseNav}
            />
          </div>
        )}
      </div>
      {isNavOpen && (
        <div
          className={`fixed right-0 w-64 z-50 animate-slide-${isNavClosing ? 'out' : 'in'} ${
            !showBanner ? 'banner-is-shown' : 'top-0'
          }`}
          style={{ backgroundColor: '#F6F5F5', height: '100vh' }}
          onAnimationEnd={handleAnimationEnd}>
          <div className="mt-32 grid place-items-center" style={{ color: '#665E58' }}>
            <div>
              <ul className="mx-4 text-center">
                <li className={`py-4 ${getLinkClass('/')}`} onClick={() => setIsNavOpen(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`py-4 ${getLinkClass('/services')}`}
                  onClick={() => setIsNavOpen(false)}>
                  <Link to="/services">Services</Link>
                </li>
                <li className={`py-4 ${getLinkClass('/faq')}`} onClick={() => setIsNavOpen(false)}>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li
                  className={`py-4 ${getLinkClass('/about')}`}
                  onClick={() => setIsNavOpen(false)}>
                  <Link to="/about">About Us</Link>
                </li>
                <li
                  className={`py-4 ${getLinkClass('/contact-us')}`}
                  onClick={() => setIsNavOpen(false)}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <div className="mx-4 grid grid-cols-1" onClick={() => setIsNavOpen(false)}>
                <span className="my-4">
                  <a
                    href="https://www.vagaro.com/itssimplysugar/services"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      type="button"
                      className="book-online-mobile__btn border-2 border-solid rounded-full px-5 py-2 bg-white">
                      Book Online
                    </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerNavigation;
