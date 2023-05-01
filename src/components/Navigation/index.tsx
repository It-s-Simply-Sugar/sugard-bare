import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';
import HamburgerNavigation from './HamburgerNavigation';
import logo from '../../assets/sugardbare-logo.png';

const Navigation = () => {
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
      return 'nav__item nav__item--active';
    } else {
      return 'nav__item';
    }
  };

  return (
    <nav aria-label="Main navigation">
      {windowWidth >= 1024 ? (
        <div style={{ backgroundColor: '#F6F5F5' }}>
          <div
            className="mx-auto px-6 md:px-12 flex justify-between items-center py-5 font-medium"
            style={{ maxWidth: '1550px' }}>
            {' '}
            <Link to="/">
              <div>
                <img src={logo} alt="logo" className="w-32" />
              </div>
            </Link>
            <div className="flex justify-center items-center" style={{ color: '#665E58' }}>
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
                <li className={getLinkClass('#contact-us')}>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <a
                href="https://www.vagaro.com/itssimplysugar/services"
                target="_blank"
                rel="noreferrer">
                <button
                  type="button"
                  className="book-online__btn border-2 border-white border-solid rounded-full px-5 py-2 bg-white"
                  style={{ borderColor: '#CCA43A' }}>
                  Book Online
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <HamburgerNavigation />
      )}
    </nav>
  );
};

export default Navigation;
