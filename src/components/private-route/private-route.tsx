import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../consts/consts';

type PrivateProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateProps) => {
  const {authorizationStatus, children} = props;

  return (authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>);
};
