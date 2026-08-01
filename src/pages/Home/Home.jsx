import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import ClientLogos from '../../components/sections/ClientLogos/ClientLogos';
import About from '../../components/sections/About/About';
import Services from '../../components/sections/Services/Services';
import Portfolio from '../../components/sections/Portfolio/Portfolio';
import Benefits from '../../components/sections/Benefits/Benefits';
import Reviews from '../../components/sections/Reviews/Reviews';
import Contact from '../../components/sections/Contact/Contact';
import { useAnimations } from '../../hooks/useAnimations';

const Home = () => {
  useAnimations();

  return (
    <main>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Portfolio />
      <Benefits />
      <Reviews />
      <Contact />
    </main>
  );
};

export default Home;
