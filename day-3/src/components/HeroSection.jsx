import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-green-100 py-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Live on <span className="text-green-600">fruits & vegetables</span>
            <br />to live Healthy
          </h1>
          <p className="text-xl text-gray-600 mb-8">100% Healthy & Fresh</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
            Shop now
          </button>
        </div>
        <div className="w-1/2">
          {/* Add hero image here */}
          <img src="/path-to-your-hero-image.jpg" alt="Fresh fruits and vegetables" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;