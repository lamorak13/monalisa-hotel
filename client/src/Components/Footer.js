import React, { useState } from 'react';
import axios from 'axios';
import { FaTwitter, FaInstagram, FaFacebookSquare, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  let [emailInput, setEmailInput] = useState('');

  function onChangeHandler(e) {
    setEmailInput(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = emailInput;
    setEmailInput('');
    axios
      .post('/send', {
        email: data,
      })
      .then((res) => {
        if (res === 'error') {
          console.log('error');
        } else {
          console.log('success');
        }
      });
  }

  return (
    <footer>
      <div className='footer-links flex-container'>
        <ul className='footer-info'>
          <li className='footer-li'>Site Map</li>
          <li className='footer-li'>Terms & Conditions</li>
          <li className='footer-li'>Privacy Policy</li>
          <li className='footer-li'>Help</li>
          <li className='footer-li'>Affiliate</li>
        </ul>

        <ul className='footer-info'>
          <li className='footer-li'>Our Location</li>
          <li className='footer-li'>Career</li>
          <li className='footer-li'>About</li>
          <li className='footer-li'>Contact</li>
        </ul>

        <ul className='footer-info'>
          <li className='footer-li'>FAQ</li>
          <li className='footer-li'>Blog</li>
          <li className='footer-li'>Press</li>
          <li className='footer-li'>About</li>
        </ul>

        <div className='newsletter'>
          <p className='newsletter-invite'>Sign up for our newsletter</p>
          <div className='newsletter-input__container'>
            <form>
              <input
                type='text'
                className='newsletter-input'
                placeholder='Your EMail'
                onChange={onChangeHandler}
                value={emailInput}
                onSubmit={onSubmitHandler}
              />
              <button className='newsletter-input__icon' onClick={onSubmitHandler}>
                <FaPaperPlane size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-copyright flex-container'>
        <p className='footer-logo logo'>Monalisa</p>
        <p className='copyright'>@ Monalisa Hotel 2016</p>
        <ul className='social-icons'>
          <li className='social-icon'>
            <FaTwitter size={20} />
          </li>
          <li className='social-icon'>
            <FaFacebookSquare size={20} />
          </li>
          <li className='social-icon'>
            <FaInstagram size={20} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
