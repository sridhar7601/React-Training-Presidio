import React from "react";
import Card from "./Breakfast-Card/BreakFast-Ui";

const OrganicAddons = () => {
  // Create an array with 6 elements to loop over
  const cardData = Array(6).fill(0); // This represents 6 cards

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">New Organic ADD-ONS</h1>
      {/* Grid layout for 3 cards in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default OrganicAddons;
