import React from 'react'
import Hero from '../Hero';
import Members from '../Members';
import Festivals from '../Festivals';
import Sports from '../Sports';
import ServiceWork from '../ServiceWork';
import Contact from '../Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Members />
      <Festivals />
      <Sports />
      <ServiceWork />
      <Contact />
    </div>
  )
}

export default Home