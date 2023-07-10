import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const shino = [
  {
    _id: '2',
    content: "New year's dinner.",
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688982744/shino-dinner_n0dpy2.webp',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shino123',
    createdAt: new Date('2022-11-24T12:00:00'),
    updatedAt: new Date('2023-11-24T12:00:00'),
  },
  {
    _id: '5',
    content:
      "I'm craving to watch Action Kamen.",
    mediaURL: '',
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shino123',
    createdAt: new Date('2023-01-15T14:30:00'),
    updatedAt: new Date('2023-01-15T14:30:00'),
  }
];

const misae = [
  {
    _id: '3',
    content: 'How am I looking?',
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688983159/mistsi-looks_pugsa9.png',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'misae92',
    createdAt: new Date('2023-03-21T13:15:00'),
    updatedAt: new Date('2023-03-21T13:15:00'),
  },
  {
    _id: '7',
    content:
      "Met The Great Volleybal Star - Michikama !",
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688983251/misae-met-volley-star_pddvue.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'misae92',
    createdAt: new Date('2023-04-02T19:30:00'),
    updatedAt: new Date('2023-04-02T19:30:00'),
  }
];

const neni = [
  {
    _id: '4',
    content: 'I wanted to play House-house and see no-one is around.',
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688983392/neni-house_game_hb2z9q.jpg',
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'MasterNeni',
    createdAt: new Date('2023-01-16T13:15:00'),
    updatedAt: new Date('2023-01-16T13:15:00'),
  },
  {
    _id: '8',
    content:
      "SPACE WARS. Yay!",
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688983467/neni-space_wars_bbsnja.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'MasterNeni',
    createdAt: new Date('2023-02-24T20:45:00'),
    updatedAt: new Date('2023-02-24T20:45:00'),
  }
];

const harry = [
  {
    _id: '24',
    content: "It's snowing ! ",
    mediaURL: 'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688983831/harry_snowing_b8ohgq.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'harry41',
    createdAt: new Date('2023-04-11T22:00:00'),
    updatedAt: new Date('2023-04-11T22:00:00'),
  },
  {
    _id: '25',
    content: `Dinner with Boss.`,
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688984015/harry_boss_meet_loidkk.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'harry41',
    createdAt: new Date('2023-04-12T22:00:00'),
    updatedAt: new Date('2023-04-12T22:00:00'),
  }
];

const buri = [
  {
    _id: '6',
    content: 'AGENT Buri Buri',
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688984015/buri_agent_k5fp2d.jpg',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'buri-buri',
    createdAt: new Date('2023-01-24T15:45:00'),
    updatedAt: new Date('2023-01-24T15:45:00'),
  }
];

const nanako = [
  {
    _id: '29',
    content: `Photoshoot on New Year's Eve.`,
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688984015/nanako_new_year_qaqtxz.webp',

    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'nanakoDidi',
    createdAt: new Date('2023-01-12T22:00:00'),
    updatedAt: new Date('2023-01-12T22:00:00'),
  },
  {
    _id: '30',
    content: `Isn't he cute ? `,
    mediaURL: 'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688984014/nanko_cute_shinchan_phgor4.jpg',

    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'nanakoDidi',
    createdAt: new Date('2023-02-02T22:00:00'),
    updatedAt: new Date('2023-02-02T22:00:00'),
  }
];

export const posts = [
  {
    _id: '100',
    content: 'Motivational !!',
    mediaURL:
      'https://res.cloudinary.com/dyr0nhysf/image/upload/v1688984355/motivation_xntcad.jpg',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'avanishGupta31',
    createdAt: new Date('04/06/2023'),
    updatedAt: formatDate(),
  },
  {
    _id: '200',
    content: 'Visiting Modern Marvel Statue of Unity soon, with my friends.',
    mediaURL: '',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'avanishGupta31',
    createdAt: new Date('02/05/2023'),
    updatedAt: formatDate(),
  },
  ...shino,
  ...misae,
  ...neni,
  ...harry,
  ...buri,
  ...nanako,
];
