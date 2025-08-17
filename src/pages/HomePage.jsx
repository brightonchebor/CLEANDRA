import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Team />
    </div>
  );
};

export default HomePage;