import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';
import HamburgerNavigation from './HamburgerNavigation';
import logo from '../../assets/sugardbare-logo.png';

interface Props {
  closeBanner: boolean;
}
const Navigation = ({ closeBanner }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

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

  const getLinkClass = (path: string) => {
    if (path === activeLink) {
      // active link is '/'
      if (activeLink === '/') {
        return 'nav__item-other nav__item-other--active';
      }
      // active link is not '/'
      else {
        return 'nav__item-home nav__item-home--active';
      }
    } else {
      // active link is '/'
      if (activeLink === '/') {
        return 'nav__item nav__item--home';
      }
      // active link is not '/'
      else {
        return 'nav__item nav__item--other';
      }
    }
  };

  console.log(activeLink);

  return (
    <nav aria-label="Main navigation">
      {windowWidth >= 1024 ? (
        <div
          style={
            activeLink === '/' ? { backgroundColor: '#CCB6A0' } : { backgroundColor: '#FFFFFF' }
          }>
          <div
            className="mx-auto px-6 md:px-12 flex justify-between items-center py-5 font-medium"
            style={{ maxWidth: '1550px' }}>
            {' '}
            <Link to="/">
              <div>
                <img src={logo} alt="logo" className="w-32" />
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
                <li className={getLinkClass('/contact')}>
                  <a href="/contact">Contact</a>
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
        <HamburgerNavigation showBanner={closeBanner} />
      )}
    </nav>
  );
};

export default Navigation;
