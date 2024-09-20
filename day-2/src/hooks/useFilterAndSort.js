import { useMemo } from 'react';

export const useFilterAndSort = (items, searchTerm, sortOption) => {
  return useMemo(() => {
    let filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (sortOption === 'name') {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'description') {
      filteredItems.sort((a, b) => a.description.localeCompare(b.description));
    }
    
    return filteredItems;
  }, [items, searchTerm, sortOption]);
};