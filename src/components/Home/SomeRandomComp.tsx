import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css';
import { Link } from 'react-router-dom';
import flower from '../../assets/flower-icon.png';

const SomeRandomComp = () => {
  return (
    <div
      className="flex justify-center items-center px-6 md:px-12"
      style={{ backgroundColor: '#CCA43A' }}>
      <div className="" style={{ maxWidth: '1550px' }}>
        <div className="leading-relaxed grid place-items-center">
          <div className="p-8 xsl:p-10 md:px-16">random shit</div>
        </div>
      </div>
    </div>
  );
};

export default SomeRandomComp;
