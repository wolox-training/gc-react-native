import maleUser from '../app/components/Comment/assets/img_user1.png';
import femaleUser from '../app/components/Comment/assets/img_user2.png';

export const BOOKS_COMMENTS = [
  {
    id: '1',
    name: 'John Appleseed',
    comment:
      "It was great to see you again earlier. Let's definitely get that coffe It was great to see you earlier.",
    img: maleUser
  },
  {
    id: '2',
    name: 'Susan Collins',
    comment: "Let's definitely get that coffe It was great to see you earlier.",
    img: femaleUser
  },
  {
    id: '3',
    name: 'Emilda Collins',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: femaleUser
  },
  {
    id: '4',
    name: 'Jose Collins',
    comment: 'Sed porttitor, arcu ut elementum cursus, diam.',
    img: maleUser
  },
  {
    id: '5',
    name: 'Juan Collins',
    comment: 'Lorem ipsum dolor sit amet. Sed porttitor, arcu ut elementum cursus, diam.',
    img: maleUser
  }
];

export const BOOKS_DATA = [
  {
    id: '1',
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water',
    genre: 'Short story',
    publisher: 'Butterworth-Heinemann',
    year: '1968',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
    available: false,
    comments: BOOKS_COMMENTS
  },
  {
    id: '2',
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'other',
    publisher: 'Pocket Books',
    year: '1989',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
    available: true,
    comments: BOOKS_COMMENTS
  },
  {
    id: '3',
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
    available: false,
    comments: BOOKS_COMMENTS
  },
  {
    id: '4',
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
    available: true,
    comments: BOOKS_COMMENTS
  },
  {
    id: '5',
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
    available: false,
    comments: BOOKS_COMMENTS
  },
  {
    id: '6',
    author: 'Paula Hawkins',
    title: 'The Girl on the Train\n',
    genre: 'suspense',
    publisher: 'Riverhead Books',
    year: '2015',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
    available: true,
    comments: BOOKS_COMMENTS
  },
  {
    id: '7',
    author: 'Anthony Doerr',
    title: 'All the Light We Cannot See',
    genre: 'suspense',
    publisher: 'Scribner',
    year: '2014',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
    available: false,
    comments: BOOKS_COMMENTS
  },
  {
    id: '8',
    author: 'John Katzenbach',
    title: 'The analyst',
    genre: 'thriller',
    publisher: 'Ballantine Books',
    year: '2003',
    img:
      'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg',
    available: true,
    comments: BOOKS_COMMENTS
  },
  {
    id: '9',
    author: 'Andy Weir',
    title: 'The Martian',
    genre: 'fiction',
    publisher: 'Crown Publishing Group',
    year: '2011',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg',
    available: true,
    comments: BOOKS_COMMENTS
  }
];
