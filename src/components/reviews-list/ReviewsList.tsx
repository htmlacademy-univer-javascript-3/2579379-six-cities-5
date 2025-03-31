import { Comment } from '../../types';
import { ReviewItem } from '../review-item/ReviewItem';

type reviewsListProps = {
  reviews: Comment[];
};

export const ReviewsList = ({reviews}: reviewsListProps) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; {reviews.length}</h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
  </section>
);
