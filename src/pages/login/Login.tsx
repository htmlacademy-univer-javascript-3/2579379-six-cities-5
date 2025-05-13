import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AuthorizationStatus, AppRoute } from '../../consts/consts';
import { Navigate } from 'react-router-dom';
import { FormEventHandler } from 'react';
import { login } from '../../store/api-actions';
import { authStatus } from '../../store/selectors';

export const Login = () => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(authStatus);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (email && password) {
      dispatch(login({ email, password }));
    }
  };

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Paris</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

