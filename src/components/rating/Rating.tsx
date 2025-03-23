import { ChangeEvent } from 'react';

type RatingProps = {
  title: string;
  rating: number;
  isChecked: boolean;
  handleChangeFeild: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Rating = ({title, rating, isChecked, handleChangeFeild}: RatingProps) => (
  <>
    <input
      className="form__rating-input visually-hidden"
      id={`${rating}-stars`}
      name="rating"
      type="radio"
      value={rating}
      onChange={handleChangeFeild}
      checked={isChecked}
    />
    <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);
