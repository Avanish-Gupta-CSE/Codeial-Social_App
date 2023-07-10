import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '1',
    firstName: 'Avanish',
    lastName: 'Gupta',
    username: 'avanishGupta31',
    password: 'avanish31',
    bio: 'This is my bio',
    bookmarks: [],
    avatarUrl:
      'https://avatars.githubusercontent.com/u/91612116?v=4',
    website: 'https://avanish-gupta-portfolio.netlify.app/',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '2',
    firstName: 'Shinosuke',
    lastName: 'Nohara',
    username: 'shino123',
    password: 'password123',
    bio: 'He is the son of Hiroshi and Misae . He is in kindergarten.He is 5 years old and yet acts overly mature. In general, he is brutally honest, highly curious, and has no shame whatsoever.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688980504/Shino_qfywrf.png',
    website: 'https://example.com/shinosuke',
    createdAt: new Date('2023-06-24T10:30:00'),
    updatedAt: new Date('2023-06-24T10:30:00'),
  },
  {
    _id: '3',
    firstName: 'Misae',
    lastName: 'Nohara',
    username: 'misae92',
    password: 'password456',
    bio: ' She is 29 years old but she always tells people that she is 24 or 25. She is the classical housewife of post-war Japan - she cleans, launders, cooks, sews, mothers, and lazes all to varying degrees of success.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688980690/misae_xw9jom.webp',
    website: 'https://example.com/misae',
    createdAt: new Date('2023-06-24T11:45:00'),
    updatedAt: new Date('2023-06-24T11:45:00'),
  },
  {
    _id: '4',
    firstName: 'Neni',
    lastName: 'Sakurada',
    username: 'MasterNeni',
    password: 'pa$$w0rd!',
    bio: 'Tidy and competitive.She insists on being the mom all the time-and she forces her friends to do stuff they do not really want to do.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688981007/Pennt_ikkypo.webp',
    website: 'https://example.com/neni',
    createdAt: new Date('2023-06-24T14:00:00'),
    updatedAt: new Date('2023-06-24T14:00:00'),
  },
  {
    _id: '5',
    firstName: 'Harry',
    lastName: 'Nohara',
    username: 'harry41',
    password: 'FrustratedDad',
    bio: "Good husband and father. Loves food and women.",
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688981107/harry_udakys.webp',
    website: 'https://example.com/harry',
    createdAt: new Date('2023-06-24T15:15:00'),
    updatedAt: new Date('2023-06-24T15:15:00'),
  },
  {
    _id: '6',
    firstName: 'Buri Buri',
    lastName: 'Zaemon',
    username: 'buri-buri',
    password: 'sarcasticPig123',
    bio: 'A pig who tries to be Sarcastic and funny.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688981245/buri_uj2fxm.jpg',
    website: 'https://example.com/zaemon',
    createdAt: new Date('2023-06-24T16:30:00'),
    updatedAt: new Date('2023-06-24T16:30:00'),
  },
  {
    _id: '7',
    firstName: 'Nanako',
    lastName: 'Ohara',
    username: 'nanakoDidi',
    password: 'NanakoDidi69',
    bio: "Nanako is the only girl that is unruffled by Shin-chan's behavior, and the only one Shin-chan tries to behave for, even being shy and blushing around her",
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688981389/didi_h2slci.webp',
    website: 'https://example.com/phoebe',
    createdAt: new Date('2023-06-24T17:30:00'),
    updatedAt: new Date('2023-06-24T17:30:00'),
  },
];
