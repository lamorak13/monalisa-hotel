import React, { useState, useEffect } from 'react';
import roomsData from '../Data/roomsData';
import { useParams } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import {
  FaCaretLeft,
  FaCaretRight,
  FaStar,
  FaWifi,
  FaTv,
  FaThermometerThreeQuarters,
  FaIgloo,
  FaPersonBooth,
} from 'react-icons/fa';
import Rating from '../Components/Templates/Rating';
import Comment from '../Components/Templates/Comment';
import axios from 'axios';

function SingleRoom() {
  let { id } = useParams();

  const current = roomsData.filter((room) => room.id === parseInt(id))[0];

  let [loadDesc, setLoadDesc] = useState(false);
  let [loadComments, setLoadComments] = useState(false);
  let [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
      let commentsRaw = response.data.filter((comment) => comment.postId === parseInt(id));
      setComments(
        commentsRaw.map((comment) => {
          return <Comment {...comment} key={comment.id} />;
        })
      );
    });
  }, [id]);

  return (
    <main>
      <ScrollToTopOnMount />

      <section className='single-room__hero-section'>
        <h1 className='single-room__title'>{current.title}</h1>

        <img className='single-room__image' src={current.img} alt={current.title} />
        <button className='single-room__image-button__left'>
          <FaCaretLeft className='single-room__image-icon' size={50} />
        </button>
        <button className='single-room__image-button-right'>
          <FaCaretRight className='single-room__image-icon' size={50} />
        </button>
      </section>

      <section className='single-info'>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className='single-room__booking-price'>${current.price}</p>
          <button className='single-room__booking-button'>Book now</button>
        </div>

        <div className='single-room__data'>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <ul className='single-room__data-list'>
              <li>{current.beds} Beds</li>
              <li>{current.persons} Persons</li>
              <li>02 Bathrooms</li>
              <li>400 m²</li>
            </ul>
            <div>
              <Rating size={25} rating={current.rating} />
            </div>
          </div>

          <hr />

          <p className='single-room__desc-title'>Description</p>
          <p className={`single-room__desc-text ${loadDesc ? 'open' : ''}`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <button className='single-room__desc-button' onClick={() => setLoadDesc(!loadDesc)}>
            Show more
          </button>
          <hr />

          <p className='single-room__desc-title'>Equipment</p>
          <ul className='single-room__desc-equipment'>
            <li>
              <FaWifi className='single-room__equipment-icon' />
              Free Wifi
            </li>
            <li>
              <FaTv className='single-room__equipment-icon' />
              TV
            </li>
            <li>
              <FaThermometerThreeQuarters className='single-room__equipment-icon' />
              Air Conditioning
            </li>
            <li>
              <FaIgloo className='single-room__equipment-icon' />
              Extra Fridge
            </li>
            <li>
              <FaPersonBooth className='single-room__equipment-icon' />
              Balcon
            </li>
          </ul>
          <hr />

          <p className='single-room__desc-title'>Availability</p>

          <hr />
          <p className='single-room__desc-title'>Reviews</p>
          <FaStar style={{ color: 'var(--star-clr)' }} size={16} />
          <p style={{ display: 'inline-block', marginLeft: '5px' }}>
            <strong>{current.rating}</strong>
          </p>
          <p style={{ display: 'inline-block', marginLeft: '15px' }}>
            <strong>{current.reviewNumber}</strong> reviews
          </p>
          <div className={`comments-container ${loadComments ? 'open' : null}`}>{comments}</div>
          <button
            className='single-room__desc-button'
            onClick={() => setLoadComments(!loadComments)}
          >
            Show more Comments
          </button>
        </div>
      </section>
    </main>
  );
}

export default SingleRoom;
