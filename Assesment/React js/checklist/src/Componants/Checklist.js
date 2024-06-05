import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext';

const items = ['Are you a Citizen :', 'Are you over 21 : '];

const Checklist = () => {
  const { checkedItems, toggleItem } = useContext(ChecklistContext);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            name={item}
            checked={checkedItems.includes(item + "yes")}
            onChange={() => toggleItem(item + "yes")}
          />
          <label>{item}</label>
        </div>
      ))}
      <div>
        <h2>Selected Items:</h2>
        <ul>
          {checkedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checklist;
