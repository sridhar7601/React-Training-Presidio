import React from 'react';

export const ItemList = ({ items, onRemoveItem }) => {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
          <span>{item.name} - {item.description}</span>
          <button 
            onClick={() => onRemoveItem(item.id)} 
            className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
