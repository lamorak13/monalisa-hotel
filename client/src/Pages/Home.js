import React from 'react';
import HeroSection from '../Components/Sections/HeroSection';
import ConvinceSection from '../Components/Sections/ConvinceSection';
import RoomSection from '../Components/Sections/RoomSection';
import TestemonialSection from '../Components/Sections/TestemonialSection';
import BlogSection from '../Components/Sections/BlogSection';
import ContactSection from '../Components/Sections/ContactSection';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

function Home() {
  return (
    <main>
      <ScrollToTopOnMount />
      <HeroSection />
      <ConvinceSection />
      <RoomSection />
      <TestemonialSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}

export default Home;
