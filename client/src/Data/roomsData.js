import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';

const roomsData = [
  {
    id: 1,
    type: 'Classic Room',
    title: 'Simple with classic room',
    price: 39,
    img: room1,
    rating: 5,
    reviewNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    status: 5,
    deposit: false,
    beds: '01',
    persons: '02',
  },

  {
    id: 2,
    type: 'Deluxe Room',
    title: 'Grand deluxe room',
    price: 59,
    img: room2,
    rating: 4,
    reviewNumber: 7,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    status: 3,
    deposit: '3o%',
    beds: '02',
    persons: '04-06',
  },
  {
    id: 3,
    type: 'Superior Room',
    title: 'Ultra superior room',
    price: 59,
    img: room3,
    rating: 4.5,
    reviewNumber: 2,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    status: 1,
    deposit: '5o%',
    beds: '03',
    persons: '03-04',
  },
];

export default roomsData;
