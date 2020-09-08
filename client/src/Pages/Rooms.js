import React from 'react';
import RoomsGrid from '../Components/Sections/RoomsGrid';
import CheckAvailability from '../Components/Templates/CheckAvailability';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

function Rooms() {
  return (
    <main>
      <ScrollToTopOnMount />
      <section className='rooms-hero-section'>
        <h1 className='rooms-title'>Our Rooms</h1>
      </section>
      <CheckAvailability />
      <RoomsGrid />
    </main>
  );
}

export default Rooms;
