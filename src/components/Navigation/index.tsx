import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigation.css";
import HamburgerNavigation from "./HamburgerNavigation";

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getLinkClass = (path: string) => {
    if (path === activeLink) {
      return "nav__item nav__item--active";
    } else {
      return "nav__item";
    }
  };

  return (
    <nav aria-label="Main navigation">
      {windowWidth >= 1024 ? (
        <div style={{ backgroundColor: "#C4B682" }}>
          <div
            className="mx-auto px-6 md:px-20 xxl:px-0 flex justify-between items-center py-8 px-10 text-white font-medium"
            style={{ maxWidth: "1550px" }}
          >
            {" "}
            <Link to="/">
              <div>
                <img src="" alt="logo" />
              </div>
            </Link>
            <div className="flex justify-center items-center">
              <ul className="flex gap-x-14 mr-14">
                <li className={getLinkClass("/")}>
                  <Link to="/">Home</Link>
                </li>
                <li className={getLinkClass("/services")}>
                  <Link to="/services">Services</Link>
                </li>
                <li className={getLinkClass("#promotions")}>
                  <a href="#">Promotions</a>
                </li>
                <li className={getLinkClass("/our-story")}>
                  <Link to="/our-story">Our Story</Link>
                </li>
                <li className={getLinkClass("#contact-us")}>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <a
                href="https://www.vagaro.com/itssimplysugar/services"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="book-online__btn border-2 border-white border-solid rounded-full px-5 py-2 hover:bg-white"
                >
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
