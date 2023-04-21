import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <div
      className="mx-auto py-8 px-10 text-white font-medium bg-yellow-200"
      style={{ backgroundColor: '#C4B682' }}>
      <div className="cursor-pointer mb-4 flex justify-between">
        <Link to="/">
          <div className="mt-2">
            <img src="" alt="" className="w-32 sm:w-40 md:w-48" />
          </div>
        </Link>
        <button className="p-0" onClick={() => setIsNavOpen((prev) => !prev)}>
          <span
            className="hamburger_line_1 block w-10 bg-white mb-2"
            style={{ height: '1.5px' }}></span>
          <span className="hamburger_line_3 block w-10 bg-white" style={{ height: '1.5px' }}></span>
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
              <li className={`py-4 ${getLinkClass('/promotions')}`}>
                <Link to="/promotions">Promotions</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/our-story')}`}>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li className={`py-4 ${getLinkClass('/contact-us')}`}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <div className="mx-4 grid grid-cols-1">
              <span className="my-4">
                <a
                  href="https://www.vagaro.com/itssimplysugar/book-now"
                  target="_blank"
                  rel="noreferrer">
                  <button
                    type="button"
                    className="book-online__btn border-2 border-white border-solid rounded-full px-5 py-2 hover:bg-white">
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
