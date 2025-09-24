import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Members from './components/Members';
import Festivals from './components/Festivals';
import Sports from './components/Sports';
import ServiceWork from './components/ServiceWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Members />
      <Festivals />
      <Sports />
      <ServiceWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;