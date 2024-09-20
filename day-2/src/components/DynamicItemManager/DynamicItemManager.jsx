import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import { ItemContext } from '../../context/ItemContext';
import { useFilterAndSort } from '../../hooks/useFilterAndSort';
import { AddItemForm } from './AddItemForm';
import { SearchAndSort } from './SearchAndSort';
import { ItemList } from './ItemList';

export const DynamicItemManager = () => {
  const { items, dispatch } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const searchInputRef = useRef(null);

  const filteredAndSortedItems = useFilterAndSort(items, searchTerm, sortOption);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleAddItem = (newItem) => {
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dynamic Item Manager</h2>
        <div className="space-y-4">
          <AddItemForm onAddItem={handleAddItem} />
          <SearchAndSort
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortOption={sortOption}
            setSortOption={setSortOption}
            searchInputRef={searchInputRef}
          />
          <ItemList items={filteredAndSortedItems} onRemoveItem={handleRemoveItem} />
        </div>
      </div>
    </div>
  );
};