import { Comment } from '../types';

export const Comments: Comment[] = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Egor',
      avatarUrl: 'https://ru.pinterest.com/pin/25543922885171304/',
      isPro: true,
    },
    comment: 'Cool!',
    rating: 5,
  },
  {
    id: '2',
    date: '2023-04-08T14:13:55.569Z',
    user: {
      name: 'Eva',
      avatarUrl: 'https://ru.pinterest.com/pin/5559199536439760/',
      isPro: false,
    },
    comment: 'Nice!',
    rating: 4,
  },
  {
    id: '3',
    date: '2021-04-08T14:13:55.569Z',
    user: {
      name: 'Pixel',
      avatarUrl: 'https://ru.pinterest.com/pin/6403624465226038/',
      isPro: true,
    },
    comment: 'Normal!',
    rating: 3,
  }
];
