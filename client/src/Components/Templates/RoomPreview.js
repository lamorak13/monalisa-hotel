import React from 'react';
import Rating from './Rating';

function RoomPreview(props) {
  return (
    <li>
      <div className='room-preview__container' onMouseOver={props.hoverHandler}>
        <img src={props.img} alt={`This is a ${props.type}`} className='room-preview__image' />
        <div className='room-preview__text'>
          <p className='room-preview__title'>{props.type}</p>
          <p className='room-preview__price'>
            Starting from <span>${props.price}/Night</span>
          </p>
          <Rating rating={props.rating} size={12} />
        </div>
      </div>
    </li>
  );
}

export default RoomPreview;

// import React, { Component } from 'react';

// class RoomPreview extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       price: props.price,
//       type: props.type,
//       imageUrl: props.img
//     };
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <li>
//         <div className='room-preview__container'>
//           <img src={this.state.imageUrl} className='room-preview__image' />
//           <div className='room-preview__text'>
//             <p className='room-preview__title'>{this.state.type}</p>
//             <p className='room-preview__price'>
//               Starting from <span>${this.state.price}/Night</span>
//             </p>
//           </div>
//         </div>
//       </li>
//     );
//   }
// }
