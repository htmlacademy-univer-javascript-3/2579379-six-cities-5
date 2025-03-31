import { months } from './review-item.consts';

export const dateToString = (date: Date) => `${`${months[date.getMonth() + 1] } ${ date.getFullYear()}`}`;
