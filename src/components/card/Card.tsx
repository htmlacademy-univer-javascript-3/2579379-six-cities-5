import { AppRoute } from '../../consts/consts';
import { OfferType, CardType, CardSize } from '../../types';
import { Link } from 'react-router-dom';
import { cardsSizes } from './Card.consts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AuthorizationStatus } from '../../consts/consts';
import { Navigate } from 'react-router-dom';
import { addToFavorite, removeFavorite } from '../../store/api-actions';
import { authStatus } from '../../store/selectors';

type CardProps = {
  offer: OfferType;
  onMouseHover: () => void;
  onMouseLeave: () => void;
  size: CardSize;
  cardType: CardType;
}

export const Card = ({offer, onMouseHover, onMouseLeave, size, cardType}: CardProps) => {
  const {id, title, type, price, isFavorite, isPremium, rating, previewImage} = offer;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(authStatus);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return <Navigate to={AppRoute.Login} />;
    }
    if (offer.isFavorite) {
      dispatch(removeFavorite(offer.id));
    } else {
      dispatch(addToFavorite(offer.id));
    }
  };

  return (
    <article className={`${cardType}__card place-card`}
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.BaseOffer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={cardsSizes[size].width} height={cardsSizes[size].height} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth &&
            <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
              type="button"
              onClick={handleFavoriteClick}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              {isFavorite ? <span className="visually-hidden">In bookmarks</span> :
                <span className="visually-hidden">To bookmarks</span>}
            </button>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden"></span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
