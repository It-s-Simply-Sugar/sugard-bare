import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/sugardbare-logo.png';
import './navigation.css';

interface NavItemProps {
  path: string;
  activeLink: string;
  handleClick: () => void;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ path, activeLink, handleClick, children }) => {
  const isActive = path === activeLink;
  const className = isActive ? 'nav__item-mobile nav__item-mobile--active' : 'nav__item-mobile';
  return (
    <li className={`py-4 ${className}`} onClick={handleClick}>
      <Link to={path}>{children}</Link>
    </li>
  );
};

interface HamburgerNavigationProps {
  showBanner: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  isNavOpen: boolean;
  isNavClosing: boolean;
  handleCloseNav: () => void;
  handleAnimationEnd: (e: React.AnimationEvent<HTMLDivElement>) => void;
}

const HamburgerNavigation: React.FC<HamburgerNavigationProps> = ({
  showBanner,
  setIsNavOpen,
  isNavOpen,
  isNavClosing,
  handleCloseNav,
  handleAnimationEnd
}) => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  const renderNavItems = () => {
    const navItems = [
      { path: '/', label: 'Home' },
      { path: '/services', label: 'Services' },
      { path: '/faq', label: 'FAQs' },
      { path: '/about', label: 'About Us' }
    ];

    return navItems.map((item) => (
      <NavItem
        key={item.path}
        path={item.path}
        activeLink={activeLink}
        handleClick={handleNavItemClick}>
        {item.label}
      </NavItem>
    ));
  };

  const navContainerClassName = `fixed right-0 w-64 animate-slide-${isNavClosing ? 'out' : 'in'} ${
    !showBanner ? 'banner-is-shown' : 'top-0'
  }`;

  return (
    <div
      className="mx-auto py-4 px-10 font-medium navigation-container"
      style={{ backgroundColor: '#CCA43A' }}>
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
          <div className="grid place-items-end" style={{ zIndex: 15 }}>
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
          className={navContainerClassName}
          id="no-blur"
          style={{ backgroundColor: '#F3EFEB', height: '100vh', zIndex: 12 }}
          onAnimationEnd={handleAnimationEnd}>
          <div className="mt-32 grid place-items-center" style={{ color: '#665E58' }}>
            <div>
              <ul className="mx-4 text-center">{renderNavItems()}</ul>
              <div className="mx-4 grid grid-cols-1" onClick={() => setIsNavOpen(false)}>
                <span className="my-4">
                  <a
                    href="https://www.vagaro.com/sugardbareofficial/services"
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
