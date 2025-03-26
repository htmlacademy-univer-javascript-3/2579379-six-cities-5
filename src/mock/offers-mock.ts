import { OfferType } from '../types';
import apartment from './images/apartment.jpg';
import room from './images/room.jpg';
import house from './images/house.jpg';
import apartment2 from './images/apartment2.jpg';

export const offers: OfferType[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 6,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: apartment,
  },
  {
    id: '2',
    title: 'Exelent & beautiful hostel',
    type: 'room',
    price: 2100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 3,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 3,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: room,
  },
  {
    id: '3',
    title: 'Beautiful house in the forest',
    type: 'house',
    price: 900,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 7,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: house,
  },
  {
    id: '4',
    title: 'Tiny apartment with beautiful view',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 2,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: apartment2,
  },
];
