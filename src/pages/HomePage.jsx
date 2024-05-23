import React from 'react';
import Banner from '../components/Banner/Banner';
import Work from '../components/Work/Work';
import Navigation from '../components/Navigation/Navigation.jsx';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <>
      <Navigation />

      <Banner />
      <Services />
      <Work />
    </>
  );
};

export default Home;
