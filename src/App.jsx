import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
