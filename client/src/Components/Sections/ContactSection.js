import React from 'react';
import ContactMap from '../Templates/ContactMap';

function ContactSection() {
  return (
    <section className='contact-section flex-container'>
      <div className='contact-section__visual'>
        <div className='contact-map__wrapper'>
          <ContactMap />
        </div>
      </div>
      <div className='contact-section__text'>
        <h3 className='contact-section__h3'>Information</h3>
        <h2 className='contact-section__h2'>Contact us</h2>
        <p className='contact-section__country'>
          Melbourne, <span>Australia</span>
        </p>
        <p>269 King Str, 05th Floor, Ultral House Building, Melbourne, VIC 3000, Australia</p>
        <p className='contact-section__email'>
          <strong>Email:</strong> info@monalisahotel.com
        </p>
        <p className='contact-section__call'>Call directly:</p>
        <p className='phone-number'>+99 (0) 344 956 4050</p>
      </div>
    </section>
  );
}

export default ContactSection;
