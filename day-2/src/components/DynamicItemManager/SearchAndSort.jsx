import React from 'react';

export const SearchAndSort = ({ searchTerm, setSearchTerm, sortOption, setSortOption, searchInputRef }) => {
  return (
    <div className="flex space-x-2">
      <input
        ref={searchInputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by...</option>
        <option value="name">Name</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
};
