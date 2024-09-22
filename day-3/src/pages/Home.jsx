import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection';
// import FeaturedProducts from '../components/FeaturedProducts';
import OrganicAddons from '../components/OrganicAddons';
import CustomerReviews from '../components/CustomerReviews';
import BlogPosts from '../components/BlogPosts';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      {/* <FeaturedProducts /> */}
      <OrganicAddons />
      <CustomerReviews />
      <BlogPosts />
    </Layout>
  );
};

export default Home;