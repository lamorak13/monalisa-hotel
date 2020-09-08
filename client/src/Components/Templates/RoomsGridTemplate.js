import React from 'react';
import Rating from './Rating';
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function RoomsGridTemplate(props) {
  let status = props.status >= 5 ? 'Available' : `${props.status} rooms left!`;
  let deposit = props.deposit ? `Required ${props.deposit}` : 'Not required';

  return (
    <div className='rooms-grid-template__container'>
      <div className='rooms-grid-template__order'>
        <p className='room-order__flipped'>{props.type}</p>
        <p className='room-order__id'>{props.id}</p>
      </div>

      <div className='rooms-grid-template__desc'>
        <div className='room-desc__review'>
          <Rating rating={props.rating} size={16} />
          <p className='room-desc__review-number'>{`${props.reviewNumber} Reviews`}</p>
        </div>

        <h2 className='room-desc__title'>{props.title}</h2>

        <p className='room-desc__price'>
          Starts from <span>${props.price}</span> /Night
        </p>

        <p className='room-desc__text'>{props.description}</p>

        <div className='room-desc__details'>
          <p className='room-details__status'>
            Status:{' '}
            <span style={props.status >= 5 ? { color: 'var(--main-clr-green)' } : { color: 'red' }}>
              {status}
            </span>
          </p>
          <p className='room-details__deposit'>
            Deposit: <span>{deposit}</span>
          </p>
          <p className='room-details__beds'>
            Beds: <span>{props.beds}</span>
          </p>
          <p className='room-details__persons'>
            Persons: <span>{props.persons}</span>
          </p>
        </div>

        <Link to={`/single-room/${props.id}`}>
          <button className='room-button'>
            View Details <FaCaretRight className='room-button__icon' />
          </button>
        </Link>
      </div>
      <img className='rooms-grid-template__image' src={props.img} alt={`This is a ${props.type}`} />
    </div>
  );
}

export default RoomsGridTemplate;
