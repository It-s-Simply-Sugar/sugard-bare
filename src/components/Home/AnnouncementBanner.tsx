import { useState } from 'react';

const AnnouncementBanner = () => {
  return (
    <div style={{ backgroundColor: '#605651' }}>
      <div
        className="relative text-white mx-auto px-6 md:px-12 py-6"
        style={{ maxWidth: '1450px' }}>
        <p className="text-center text-sm md:text-md mb-1">
          <span className="font-bold">New Look!</span> Same great services.
        </p>
        <p className="text-center text-xs md:text-sm font-thin">
          Book your appointment today and experience the difference of natural sugar hair removal.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
