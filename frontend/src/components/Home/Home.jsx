import React from 'react';
import Hero from '../Hero';
import Members from '../Members';
import Festivals from '../Festivals';
import Sports from '../Sports';
import ServiceWork from '../ServiceWork';
import Contact from '../Contact';
import NoticeTicker from '../Cartoon/NoticeTicker';
import TimelineSection from '../Cartoon/TimelineSection';
import VillageTraditions from '../Cartoon/VillageTraditions';
import LibraryShelf from '../Cartoon/LibraryShelf';
import FestiveCelebration from '../Cartoon/FestiveCelebration';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] overflow-x-hidden">
      {/* Village Notice Board Marquee */}
      <NoticeTicker />

      {/* Hero Section */}
      <Hero />

      {/* Cultural Heritage - Panchudola, Gajalaxmi, Danda Nacha */}
      <VillageTraditions />

      {/* Committee Members Spotlight */}
      <Members />

      {/* Club History & 1955 Milestone Timeline */}
      <TimelineSection />

      {/* Gopabandhu Pathagara Virtual Bookshelf */}
      <LibraryShelf />

      {/* Annual Festivals Carousel */}
      <Festivals />

      {/* Sports & Tournaments */}
      <Sports />

      {/* Village Community Service Work */}
      <ServiceWork />

      {/* Contact & Village Map */}
      <Contact />

      {/* Interactive Festive Celebration Shower Button */}
      <FestiveCelebration />
    </div>
  );
};

export default Home;
