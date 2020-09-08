import React, { useEffect } from 'react';
import roomDisplay from '../../images/roomDisplay.jpg';
import roomsData from '../../Data/roomsData';
import RoomPreview from '../Templates/RoomPreview';

function RoomSection() {
  useEffect(() => {
    let current = document.getElementsByClassName('room-preview__container')[0];
    current.classList.add('room-preview__current');
  }, []);

  const handleHover = (e) => {
    document
      .getElementsByClassName('room-preview__current')[0]
      .classList.remove('room-preview__current');
    e.target.closest(' .room-preview__container').classList.add('room-preview__current');
  };

  const roomItems = roomsData.map((room) => (
    <RoomPreview key={room.id} {...room} hoverHandler={handleHover} />
  ));

  return (
    <section className='room-section flex-container'>
      <div className='room-section__text'>
        <h3 className='room-section__h3'>Discover our rooms</h3>
        <h2>Luxury interior</h2>
        <ul className='room-list'>{roomItems}</ul>
      </div>
      <img src={roomDisplay} alt='no idea' className='room-image__display' />
    </section>
  );
}

export default RoomSection;
