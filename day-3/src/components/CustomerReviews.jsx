import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

 const CustomerReview = ({ name, rating, comment }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>
);

const CustomerReviews = () => {
  const reviews = [
    { name: "John Doe", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Jane Smith", rating: 4, comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "Bob Johnson", rating: 5, comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-8">
            {reviews.map((review, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                <CustomerReview {...review} />
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;