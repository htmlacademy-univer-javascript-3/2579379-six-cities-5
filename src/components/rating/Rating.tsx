import { ChangeEvent } from 'react';

type RatingProps = {
  title: string;
  rating: number;
  isChecked: boolean;
  onChangeFeild: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Rating = ({title, rating, isChecked, onChangeFeild}: RatingProps) => (
  <>
    <input
      className="form__rating-input visually-hidden"
      id={`${rating}-stars`}
      name="rating"
      type="radio"
      value={rating}
      onChange={onChangeFeild}
      checked={isChecked}
    />
    <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);
