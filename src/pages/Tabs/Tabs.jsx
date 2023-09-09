import React, { useState } from 'react';
import './tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Customer App
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Driver App
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Laundry Owner App
        </button>
        <button
          className={activeTab === 4 ? 'active' : ''}
          onClick={() => handleTabClick(4)}
        >
          Admin Panel
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p>Content Customer App</p>}
        {activeTab === 2 && <p>Content Driver App</p>}
        {activeTab === 3 && <p>Content Laundry Owner App</p>}
        {activeTab === 4 && <p>Content Admin Panel</p>}
      </div>
    </div>
  );
};

export default Tabs;