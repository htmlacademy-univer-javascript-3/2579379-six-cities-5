import { OfferType } from '../types';
import apartment from './images/apartment.jpg';
import room from './images/room.jpg';
import house from './images/house.jpg';
import apartment2 from './images/apartment2.jpg';
import { CityName } from '../consts/consts';

export const Favorites: OfferType[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.387956,
        longitude: 4.897870,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.387956,
      longitude: 4.897870,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: apartment,
  },
  {
    id: '2',
    title: 'Luxorius studio at great location',
    type: 'apartment',
    price: 250,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.377959,
        longitude: 4.897041,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.377959,
      longitude: 4.897041,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: apartment,
  },
  {
    id: '4',
    title: 'Super hostel',
    type: 'room',
    price: 300,
    city: {
      name: CityName.Dusseldorf,
      location: {
        latitude: 51.233984,
        longitude: 6.710333,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.233984,
      longitude: 6.710333,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: room,
  },
  {
    id: '6',
    title: 'Just a house',
    type: 'house',
    price: 1000,
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.864906,
        longitude: 2.310364,
        zoom: 7,
      }
    },
    location: {
      latitude: 48.821806,
      longitude: 2.310364,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: house,
  },
  {
    id: '7',
    title: 'Small apartment with breakfast',
    type: 'apartment',
    price: 500,
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.801906,
        longitude: 2.312094,
        zoom: 7,
      }
    },
    location: {
      latitude: 48.801906,
      longitude: 2.312094,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: house,
  },
  {
    id: '8',
    title: 'Apartment with beautiful balcony',
    type: 'apartment',
    price: 700,
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.801001,
        longitude: 2.349014,
        zoom: 7,
      }
    },
    location: {
      latitude: 48.801001,
      longitude: 2.349014,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: house,
  },
  {
    id: '9',
    title: 'Tiny apartment with beautiful view',
    type: 'apartment',
    price: 100,
    city: {
      name: CityName.Hamburg,
      location: {
        latitude: 53.551286,
        longitude: 9.993681,
        zoom: 6,
      }
    },
    location: {
      latitude: 53.551286,
      longitude: 9.993681,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: apartment2,
  },
  {
    id: '10',
    title: 'Just a room',
    type: 'apartment',
    price: 4509,
    city: {
      name: CityName.Cologne,
      location: {
        latitude: 50.935223,
        longitude: 6.951001,
        zoom: 6,
      }
    },
    location: {
      latitude: 50.935223,
      longitude: 6.951001,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: apartment2,
  },
  {
    id: '11',
    title: 'Just a room',
    type: 'apartment',
    price: 4509,
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 50.85123000,
        longitude: 4.34878000,
        zoom: 7,
      }
    },
    location: {
      latitude: 50.85045000,
      longitude: 4.3484820,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: apartment2,
  },
  {
    id: '13',
    title: 'Just a room',
    type: 'room',
    price: 4509,
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 50.85013600,
        longitude: 4.32278000,
        zoom: 7,
      }
    },
    location: {
      latitude: 50.85013600,
      longitude: 4.32278000,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: room,
  },
];
