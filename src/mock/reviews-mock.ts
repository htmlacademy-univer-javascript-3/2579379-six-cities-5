import { Comment } from '../types';

export const Reviews: Comment[] = [
  {
    id: '1',
    date: new Date('2019-05-08T14:13:56.569Z'),
    user: {
      name: 'Egor',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'Cool!',
    rating: 5,
  },
  {
    id: '2',
    date: new Date('2020-05-08T14:12:36.569Z'),
    user: {
      name: 'Eva',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: 'Nice!',
    rating: 4,
  },
  {
    id: '3',
    date: new Date('2021-05-08T14:10:49.569Z'),
    user: {
      name: 'Pixel',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'Normal!',
    rating: 3,
  }
];

