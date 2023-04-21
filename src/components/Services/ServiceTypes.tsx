import { useState } from 'react';
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
      // setSelectedClass(null);
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
      <ul className="flex justify-center items-center ">
        <li
          onClick={() => handleTabSelections('sugar')}
          className={`py-2 px-6 md:px-10 text-sm md:text-base cursor-pointer hover:bg-blue-500 hover:text-white ${
            activeTab === 'sugar' ? 'bg-red-200 text-white' : 'bg-blue-200'
          }`}>
          Sugar
        </li>
        <li
          onClick={() => handleTabSelections('wax')}
          className={`py-2 px-6 md:px-10 text-sm md:text-base cursor-pointer hover:bg-blue-500 hover:text-white ${
            activeTab === 'wax' ? 'bg-red-200 text-white' : 'bg-blue-200'
          }`}>
          Wax
        </li>
        <li
          onClick={() => handleTabSelections('eyebrows')}
          className={`py-2 px-6 md:px-10 text-sm md:text-base cursor-pointer hover:bg-blue-500 hover:text-white ${
            activeTab === 'eyebrows' ? 'bg-red-200 text-white' : 'bg-blue-200'
          }`}>
          Eyebrows
        </li>
        <li
          onClick={() => handleTabSelections('eyelashes')}
          className={`py-2 px-6 md:px-10 text-sm md:text-base cursor-pointer hover:bg-blue-500 hover:text-white ${
            activeTab === 'eyelashes' ? 'bg-red-200 text-white' : 'bg-blue-200'
          }`}>
          Eyelashes
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
