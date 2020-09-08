import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

function Rating(props) {
  const rating = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= props.rating) {
      rating.push(<FaStar key={i} size={props.size} style={{ color: 'var(--star-clr)' }} />);
      continue;
    }
    if (i - props.rating >= 1) {
      rating.push(<FaRegStar key={i} size={props.size} style={{ color: 'var(--star-clr)' }} />);
      continue;
    }

    rating.push(<FaStarHalfAlt key={i} size={props.size} style={{ color: 'var(--star-clr)' }} />);
  }

  return <>{rating}</>;
}

export default Rating;
