import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './routes/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavClosing, setIsNavClosing] = useState(false);

  useEffect(() => {
    // const bodyStyles = `
    // body > *:not(#no-blur) {
    //   transition: filter 0.3s ease;
    //   filter: blur(3px);
    // }`;

    if (isNavOpen) {
      document.body.classList.add('no-scroll');
      document.querySelector('body:not(#no-blur)')?.classList.add('blur-item');
    } else {
      document.body.classList.remove('no-scroll');
      document.querySelector('body:not(#no-blur)')?.classList.remove('blur-item');
    }
  }, [isNavOpen]);

  const handleCloseNav = () => {
    setIsNavClosing(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === 'slideOut') {
      setIsNavOpen(false);
      setIsNavClosing(false);
      e.currentTarget.classList.remove('animate-slide-out');
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navigation
              setIsNavOpen={setIsNavOpen}
              isNavOpen={isNavOpen}
              isNavClosing={isNavClosing}
              handleCloseNav={handleCloseNav}
              handleAnimationEnd={handleAnimationEnd}
            />
          }>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
