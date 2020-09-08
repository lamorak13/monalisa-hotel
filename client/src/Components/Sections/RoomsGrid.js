import React from 'react';
import roomsData from '../../Data/roomsData';
import RoomsGridTemplate from '../Templates/RoomsGridTemplate';

function RoomsGrid() {
  const rooms = roomsData.map((room) => {
    return <RoomsGridTemplate key={room.id} {...room} />;
  });

  return (
    <section className='rooms-grid'>
      {rooms}
      <button className='rooms-grid__show-more'>Show more Rooms</button>
    </section>
  );
}

export default RoomsGrid;
