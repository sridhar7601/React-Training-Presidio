import React from 'react';
import Layout from '../components/Layout/Layout';
import OrganicAddons from '../components/OrganicAddons';


const Home = () => {
  return (
    <Layout>
      <div>
        {/* <h1 className="text-4xl font-bold text-green-600 mb-4">Live on fruits & vegetables to live Healthy</h1>
        <p className="text-xl mb-8">100% Healthy & Fresh</p> */}
<OrganicAddons />
      </div>
    </Layout>
  );
};

export default Home;