import React, { useReducer, useEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import { itemReducer } from '../reducers/itemReducer';

export const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, []);

  useEffect(() => {
    console.log('Items updated:', items);
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};