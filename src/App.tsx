import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AnnouncementBanner from './components/Home/AnnouncementBanner';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [showBanner, setShowBanner] = useState(false);

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 300 && !showBanner) {
      setShowBanner(true);
    } else if (scrollTop < 300 && showBanner) {
      setShowBanner(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [showBanner]);

  return (
    <div>
      <div className={showBanner ? 'fixed top-0 w-full z-40 transition' : ''}>
        <AnnouncementBanner />
      </div>

      <Navigation />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
