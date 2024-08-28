// TabContainer.js
import React, { useState } from 'react';

function TabContainer({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = React.Children.toArray(children);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-medium ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab]}
      </div>
    </div>
  );
}

export default TabContainer;