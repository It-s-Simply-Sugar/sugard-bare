import React, { useState, useEffect } from 'react';
import './navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/sugardbare-logo.png';

const HamburgerNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

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
    <div className="mx-auto py-4 px-10 font-medium" style={{ backgroundColor: '#F6F5F5' }}>
      <div className="cursor-pointer flex justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-20 sm:w-24 md:w-32" />
          </div>
        </Link>
        {!isNavOpen && (
          <button className="p-0" onClick={() => setIsNavOpen(true)}>
            <span
              className="hamburger_line_1 block w-8 bg-black mb-1"
              style={{ height: '2px', backgroundColor: '#CCA43A' }}></span>
            <span
              className="hamburger_line_2 block w-8"
              style={{ height: '2px', backgroundColor: '#CCA43A' }}></span>
          </button>
        )}
      </div>
      {isNavOpen && (
        <div
          className="fixed top-0 right-0 h-full w-64 shadow-lg z-50 animate-slide-in"
          style={{ backgroundColor: '#F6F5F5' }}>
          <div className="mt-6 mb-3 mx-10 grid place-items-end">
            <div className="cursor-pointer close" onClick={() => setIsNavOpen(false)} />
          </div>
          <div className="mt-16 grid place-items-center">
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
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <div className="mx-4 grid grid-cols-1">
                <span className="my-4">
                  <a
                    href="https://www.vagaro.com/itssimplysugar/services"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      type="button"
                      className="book-online__btn border-2 border-solid rounded-full px-5 py-2 bg-white"
                      style={{ borderColor: '#CCA43A' }}>
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
