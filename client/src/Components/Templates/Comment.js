import React from 'react';

function Comment(props) {
  return (
    <div className='comment-container'>
      <p className='comment-head' style={{ color: 'var(--txt-clr-black)' }}>
        {props.name}
      </p>
      <p className='comment-text'>{props.body}</p>
    </div>
  );
}

export default Comment;
