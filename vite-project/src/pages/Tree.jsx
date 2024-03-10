import React, { useState } from 'react';
import menubar from '../lib/data';

const Tree = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (label) => {
    if (openItems.includes(label)) {
      setOpenItems(openItems.filter((item) => item !== label));
    } else {
      setOpenItems([...openItems, label]);
    }
  };

  const isItemOpen = (label) => openItems.includes(label);

  const renderMenuItem = (item) => {
    const isOpen = isItemOpen(item.label);
    return (
      <li key={item.label}>
        <button
          className="flex items-center w-full justify-between py-2 pl-4 pr-2 text-left"
          onClick={() => toggleItem(item.label)}
        >
          <span>{item.label}</span>
          {item.children && (
            <span>{isOpen ? '-' : '+'}</span>
          )}
        </button>
        {isOpen && item.children && (
          <ul className="ml-4">
            {item.children.map((child) => (
              <React.Fragment key={child.label}>
                {renderMenuItem(child)}
              </React.Fragment>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-48">
      <div className="p-4">Logo</div>
      <ul>
        {menubar.map((item) => (
          <React.Fragment key={item.label}>
            {renderMenuItem(item)}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Tree
