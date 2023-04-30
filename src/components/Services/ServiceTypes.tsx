import { useState } from 'react';
import './services.css';
import SugarServices from './SugarServices';
import WaxServices from './WaxServices';
import EyebrowServices from './EyebrowServices';
import EyelashServices from './EyelashServices';

const ServiceTypes = () => {
  const [activeTab, setActiveTab] = useState('sugar');
  const [showSugarTab, setShowSugarTab] = useState(true);
  const [showWaxTab, setShowWaxTab] = useState(false);
  const [showEyebrowsTab, setShowEyebrowsTab] = useState(false);
  const [showEyelashesTab, setShowEyelashesTab] = useState(false);

  const handleTabSelections = (selected: string) => {
    if (selected === 'sugar') {
      setShowSugarTab(true);
      setShowWaxTab(false);
      setShowEyebrowsTab(false);
      setShowEyelashesTab(false);
      setActiveTab('sugar');
    }
    if (selected === 'wax') {
      setShowSugarTab(false);
      setShowWaxTab(true);
      setShowEyebrowsTab(false);
      setShowEyelashesTab(false);
      setActiveTab('wax');
    }
    if (selected === 'eyebrows') {
      setShowSugarTab(false);
      setShowWaxTab(false);
      setShowEyebrowsTab(true);
      setShowEyelashesTab(false);
      setActiveTab('eyebrows');
    }
    if (selected === 'eyelashes') {
      setShowSugarTab(false);
      setShowWaxTab(false);
      setShowEyebrowsTab(false);
      setShowEyelashesTab(true);
      setActiveTab('eyelashes');
    }
  };

  return (
    <div className="mt-20 w-full">
      <ul className="xxxs:flex justify-center items-center gap-x-1 sm:gap-x-2">
        <li
          onClick={() => handleTabSelections('sugar')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'sugar' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Body
        </li>
        <li
          onClick={() => handleTabSelections('wax')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'wax' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Bikini
        </li>
        <li
          onClick={() => handleTabSelections('eyebrows')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'eyebrows' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Facial
        </li>
        <li
          onClick={() => handleTabSelections('eyelashes')}
          className={`tab mb-1 xxxs:mb-0 py-2 px-6 md:px-10 text-center xxxs:text-left text-xs sm:text-sm md:text-base cursor-pointer text-white ${
            activeTab === 'eyelashes' ? 'select-tab text-white' : 'unselected-tab'
          }`}>
          Tinting
        </li>
      </ul>
      <div className="mt-10">
        {showSugarTab && <SugarServices />}
        {showWaxTab && <WaxServices />}
        {showEyebrowsTab && <EyebrowServices />}
        {showEyelashesTab && <EyelashServices />}
      </div>
    </div>
  );
};

export default ServiceTypes;
