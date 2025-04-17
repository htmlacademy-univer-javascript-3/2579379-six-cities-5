import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../consts/consts';
import { useAppSelector } from '../../store/hooks';

type PrivateProps = {
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateProps) => {
  const authorizationStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const {children} = props;

  return (authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>);
};
