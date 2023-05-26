import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/sugardbare-logo.png';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <div className="text-white" style={{ backgroundColor: '#CCA43A' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-6 md:px-12"
          style={{ maxWidth: '1550px' }}>
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
          <div className="mb-auto pb-4 xs:pb-0">
            <p className="font-bold mb-1">Contact</p>
            <p>
              125 West Bloomingdale Avenue
              <br />
              Brandon, FL 33511
            </p>
            <p>(303) 885-5985</p>
            <p>sugardbare.official@gmail.com</p>
          </div>
          <div className="mb-auto">
            <p className="font-bold mb-1">Follow Us</p>
            <div className="flex gap-x-2">
              <a
                href="https://www.instagram.com/sugardbare.official/"
                target="_blank"
                rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                  <path
                    d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"
                    fill="rgba(243,239,235,1)"></path>
                </svg>
              </a>
              <a href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                  <path
                    d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"
                    fill="rgba(243,239,235,1)"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F3EFEB' }}>
        <div
          className="mx-auto grid place-items-center px-6 py-1 md:px-12"
          style={{ maxWidth: '500px' }}>
          <p className="text-xs">
            © Copyright Sugar&lsquo;d Bare {currentYear}, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
