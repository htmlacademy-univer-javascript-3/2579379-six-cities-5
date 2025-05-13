import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchFavorites, logout } from '../../store/api-actions';
import { authStatus, favoritesSelector, userSelector } from '../../store/selectors';
import { useEffect } from 'react';

export const Header = () => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(authStatus);
  const user = useAppSelector(userSelector);
  const favoritesCount = useAppSelector(favoritesSelector).length;

  const location = useLocation();

  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const isLogin = location.pathname === AppRoute.Login.toString();

  useEffect(() => {
    if (isUserAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [isUserAuthorized, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!isLogin &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isUserAuthorized ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">
                        {user?.name}
                      </span>
                      <span className="header__favorite-count">{favoritesCount}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" onClick={handleLogout}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
};
