import React from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Live on fruits & vegetables to live Healthy</h1>
        <p className="text-xl mb-8">100% Healthy & Fresh</p>
        {/* Add more sections here */}
      </div>
    </Layout>
  );
};

export default Home;