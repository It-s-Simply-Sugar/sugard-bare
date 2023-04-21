import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navigation />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/login" element={<Promotions />} /> */}
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
