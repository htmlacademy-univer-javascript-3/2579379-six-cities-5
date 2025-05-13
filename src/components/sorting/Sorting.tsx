import { useState } from 'react';
import { Sorts } from '../../consts/sorts';

type SortProps = {
  currentSort: Sorts;
  onSortChange: (sort: Sorts) => void;
}

export const Sorting = ({currentSort, onSortChange}: SortProps) => {
  const [opened, setOpened] = useState(false);
  const types = Object.values(Sorts);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => setOpened((prev) => !prev)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : null}`}>
        {types.map((name) =>(
          <li key={name} className={`places__option ${currentSort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onSortChange(name);
              setOpened(false);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
};
