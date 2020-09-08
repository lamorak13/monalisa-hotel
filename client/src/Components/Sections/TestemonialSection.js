import React from 'react';
import { FaStar } from 'react-icons/fa';

function TestemonialSection() {
  return (
    <section className='testemonial-section'>
      <div className='testemonial-container'>
        <h3>Testemonial</h3>
        <h2 className='testemonial__h2'>What Clients say</h2>
        <span className='testemonial__text'>
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet."
        </span>
        <div className=' testemonial__star-rating'>
          <FaStar className='testemonial__star' />
          <FaStar className='testemonial__star' />
          <FaStar className='testemonial__star' />
          <FaStar className='testemonial__star' />
          <FaStar className='testemonial__star' />
        </div>
        <p className='quote'>
          <strong>Adam Levine</strong> - Review from Tripadvisor
        </p>
      </div>
    </section>
  );
}

export default TestemonialSection;
