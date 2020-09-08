import React from 'react';
import convince from '../../images/convince.jpg';
import CheckAvailability from '../Templates/CheckAvailability';

function ConvinceSection() {
  return (
    <>
      <CheckAvailability />
      <section className='convince-section'>
        <p className='convince-section__absolute-left'>TEL: (03) 5481 3777</p>
        <p className='convince-section__absolute-right'>INFO@MONSLISA.CO</p>

        <h3 className='convince__h3'>A little bit about us</h3>

        <div className='flex-container'>
          <div className='convince-section__img-container'>
            <img src={convince} alt='be convinced' className='convince-img' />
            <svg viewBox='0 0 100 100' height='200px' width='200px' className='stampSvg'>
              <circle cx='50' cy='50' r='32' fill='transparent' id='curve' />
              <text width='500'>
                <textPath xlinkHref='#curve' fill='#84a017'>
                  Hotel & Resort . Monalisa -
                </textPath>
              </text>
            </svg>
          </div>

          <div className='convince-section__text'>
            <h2 className='convince-header'>A best place to enjoy your life</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </p>
            <p className='quote'>
              <strong>Ethan Hunt</strong> - Director of Monalisa
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConvinceSection;
