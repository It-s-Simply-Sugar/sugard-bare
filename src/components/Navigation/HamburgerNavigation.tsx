import React, { useState, useEffect } from 'react';
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
        <button className="p-0" onClick={() => setIsNavOpen((prev) => !prev)}>
          <span
            className="hamburger_line_1 block w-8 bg-black mb-1"
            style={{ height: '2px', backgroundColor: '#CCA43A' }}></span>
          <span
            className="hamburger_line_3 block w-8"
            style={{ height: '2px', backgroundColor: '#CCA43A' }}></span>
        </button>
      </div>
      {isNavOpen && (
        <div className="grid place-items-center">
          <div>
            <ul className="mx-4 text-center">
              <li className={`py-4 ${getLinkClass('/')}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/services')}`}>
                <Link to="/services">Services</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/faq')}`}>
                <Link to="/faq">FAQs</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/about')}`}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/contact-us')}`}>
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
                    className="book-online__btn border-2 border-solid rounded-full px-5 py-2 hover:bg-white"
                    style={{ borderColor: '#CCA43A' }}>
                    Book Online
                  </button>
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerNavigation;
