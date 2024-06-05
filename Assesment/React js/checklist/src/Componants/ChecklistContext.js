import React, { createContext, useState } from 'react';

export const ChecklistContext = createContext();

export const ChecklistProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (item) => {
    setCheckedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, toggleItem }}>
      {children}
    </ChecklistContext.Provider>
  );
};
