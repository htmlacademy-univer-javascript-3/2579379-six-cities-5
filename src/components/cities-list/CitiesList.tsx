import { cities } from '../../consts/cities';
import { City } from '../../types';
import { memo } from 'react';

type CitiesProps = {
  currentCity: City;
  onChange: (city: City) => void;
}

export const CitiesListComponent = ({currentCity, onChange}: CitiesProps) => {
  const names = Object.entries(cities);
  return (
    <ul className="locations__list tabs__list">
      {
        names.map(([name, city]) => (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${(city.name === currentCity.name) ?
                'tabs__item--active' : null}`}
              onClick={() => {
                onChange(city);
              }}
            >
              <span>{name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};

CitiesListComponent.displayName = 'CitiesList';

export const CitiesList = memo(CitiesListComponent);
