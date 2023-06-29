import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import logo from '../../assets/sugardbare-logo.png';
import FooterGallery from './FooterGallery';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <FooterGallery />
      <section style={{ backgroundColor: '#CCA43A' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-6 md:px-12"
          style={{ maxWidth: '1200' }}>
          <img src={logo} className="w-32" />
        </div>
        <div
          className="mx-auto grid grid-cols-1 xs:grid-cols-3 text-center place-items-center xs:text-left gap-x-20 md:gap-x-40 text-xs pb-6"
          style={{ maxWidth: '850px' }}>
          <div className="mb-auto pb-4 xs:pb-0">
            <p className="font-bold mb-1">Quick Links</p>
            <Link to="/services">
              <p className="hover:text-white">Services</p>
            </Link>
            <Link to="/faq">
              <p className="hover:text-white">FAQs</p>
            </Link>
            <Link to="/about">
              <p className="hover:text-white">About Us</p>
            </Link>
            <a
              href="https://www.vagaro.com/itssimplysugar/services"
              target="_blank"
              rel="noreferrer">
              <p className="hover:text-white">Book Online</p>
            </a>
          </div>
          <div className="mb-auto pb-4 xs:pb-0 non-italic">
            <p className="font-bold mb-1">Contact</p>
            <address className="not-italic">
              123 West Bloomingdale Avenue
              <br />
              Brandon, FL 33511
            </address>
            <br />
            <a
              href="mailto:sugardbare.official@gmail.com"
              className="hover:underline hover:text-white">
              sugardbare.official@gmail.com
            </a>
            <br />
            <a href="tel:3038855985" className="hover:underline hover:text-white">
              303-885-5985
            </a>
          </div>
          <div className="mb-auto">
            <p className="font-bold mb-1">Follow Us</p>
            <div className="flex gap-x-2">
              <a
                href="https://www.instagram.com/sugardbare.official/"
                target="_blank"
                rel="noreferrer">
                <AiFillInstagram className="text-white hover:text-stone-500" size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#F3EFEB' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-1 md:px-12"
          style={{ maxWidth: '500px' }}>
          <p className="text-xs">
            © Copyright Sugar&lsquo;d Bare {currentYear}, All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
