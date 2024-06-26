import { useState } from 'react';
import '../services.css';
import BodyServices from '../ServiceTypes/BodyServices';
import BikiniServices from '../ServiceTypes/BikiniServices';
import FaceServices from '../ServiceTypes/FaceServices';
import PopularServices from '../ServiceTypes/PopularServices';

const ServicesMenu = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [showPopularTab, setShowPopularTab] = useState(true);
  const [showBodyTab, setShowBodyTab] = useState(false);
  const [showBikiniTab, setShowBikiniTab] = useState(false);
  const [showEyebrowsTab, setShowEyebrowsTab] = useState(false);

  const handleTabSelections = (selected: string) => {
    if (selected === 'popular') {
      setShowBodyTab(false);
      setShowBikiniTab(false);
      setShowEyebrowsTab(false);
      setShowPopularTab(true);
      setActiveTab('popular');
    }
    if (selected === 'body') {
      setShowBodyTab(true);
      setShowBikiniTab(false);
      setShowEyebrowsTab(false);
      setShowPopularTab(false);
      setActiveTab('body');
    }
    if (selected === 'bikini') {
      setShowBodyTab(false);
      setShowBikiniTab(true);
      setShowEyebrowsTab(false);
      setShowPopularTab(false);
      setActiveTab('bikini');
    }
    if (selected === 'eyebrows') {
      setShowBodyTab(false);
      setShowBikiniTab(false);
      setShowEyebrowsTab(true);
      setShowPopularTab(false);
      setActiveTab('eyebrows');
    }
  };

  return (
    <div className="mt-10 lg:mt-20 w-full">
      <ul className="xxxs:flex justify-center items-center gap-x-1 sm:gap-x-2 mb-10">
        <li
          onClick={() => handleTabSelections('popular')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'popular' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Popular
        </li>
        <li
          onClick={() => handleTabSelections('body')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'body' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Body
        </li>
        <li
          onClick={() => handleTabSelections('bikini')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'bikini' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Bikini
        </li>
        <li
          onClick={() => handleTabSelections('eyebrows')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'eyebrows' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Face
        </li>
      </ul>
      <div className="py-24 px-6 md:px-12" style={{ backgroundColor: '#F3EFEB' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          {showPopularTab && <PopularServices />}
          {showBodyTab && <BodyServices />}
          {showBikiniTab && <BikiniServices />}
          {showEyebrowsTab && <FaceServices />}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
