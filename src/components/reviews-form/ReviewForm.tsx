import { ChangeEvent, useState } from 'react';
import { FormData, REVIEW_MIN_LENGTH } from '../../consts/consts';

export const ReviewsForm = () => {
  const [formData, setFormData] = useState<FormData>({rating: 0, review: ''});

  const isFormValid = !!formData.rating && !!formData.review.length && formData.review.length >= REVIEW_MIN_LENGTH;

  const ratingObject = {
    'terrible': 1,
    'bad': 2,
    'not bad': 3,
    'good': 4,
    'perfect': 5,
  };

  const handleChangeFeild = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if(event.target.type === 'radio') {
      setFormData({...formData, [name]: Number(value)});
      return;
    }
    setFormData({...formData, [name]: value});
  };

  const renderRating = ([title, rating]: [string, number]) => (
    <>
      <input
        className="form__rating-input visually-hidden"
        id={`${rating}-stars`}
        name="rating"
        type="radio"
        value={rating}
        onChange={handleChangeFeild}
        checked={formData.rating === rating}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingObject).map(renderRating)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleChangeFeild}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and
        describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid} >Submit</button>
      </div>
    </form>
  );
};
