import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import ClientLogos from '../../components/sections/ClientLogos/ClientLogos';
import About from '../../components/sections/About/About';
import Services from '../../components/sections/Services/Services';
import Portfolio from '../../components/sections/Portfolio/Portfolio';
import Benefits from '../../components/sections/Benefits/Benefits';
// import Reviews from '../../components/sections/Reviews/Reviews';
import Contact from '../../components/sections/Contact/Contact';
import { useAnimations } from '../../hooks/useAnimations';
import { useSEO } from '../../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'CYL | Consultoría Tecnológica y Automatización para Empresas',
    description: 'Impulsa el crecimiento de tu empresa con CYL: automatización de procesos, desarrollo de software a medida, marketing digital y consultoría tecnológica. Solicita tu sesión de consultoría gratuita.',
  });

  useAnimations();

  return (
    <main>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Portfolio />
      <Benefits />
      {/* <Reviews /> - Oculto temporalmente en producción hasta integrar reseñas reales */}
      <Contact />
    </main>
  );
};

export default Home;
