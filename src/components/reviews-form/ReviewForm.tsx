import { ChangeEvent, useState } from 'react';
import { REVIEW_MIN_LENGTH, ratingObject } from '../../consts/consts';
import { FormData } from '../../types';
import { Rating } from '../rating/Rating';

export const ReviewsForm = () => {
  const [formData, setFormData] = useState<FormData>({rating: 0, review: ''});

  const isFormValid = !!formData.rating && formData.review.length >= REVIEW_MIN_LENGTH;

  const handleChangeRadioFeild = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData({...formData, [name]: Number(value)});
  };

  const handleChangeTextareaFeild = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingObject).map(([title, rating]) =><Rating key={title} title={title} rating={rating} isChecked={formData.rating === rating} handleChangeFeild={handleChangeRadioFeild}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleChangeTextareaFeild}
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
