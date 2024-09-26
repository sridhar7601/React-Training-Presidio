import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white animate-pulse flex flex-col items-center">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

      <div className="h-8 w-24 bg-gray-300 rounded-lg mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
