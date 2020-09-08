import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function BlogPreview(props) {
  return (
    <li className='blog-item'>
      <div className='blog-preview__container'>
        <img src={props.imageUrl} alt='' className='blog-preview__image' />
        <div className='blog-preview__text'>
          <p className='blog-preview__date'>
            {props.time}, {props.date}
          </p>
          <p className='blog-preview__title'>{props.title}</p>
        </div>
        <button className='blog-preview__button'>
          Read more <FaLongArrowAltRight size={20} className='blog-preview__icon' />
        </button>
      </div>
    </li>
  );
}

export default BlogPreview;
