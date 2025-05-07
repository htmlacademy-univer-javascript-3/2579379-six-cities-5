import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../consts/consts';
import { useAppSelector } from '../../store/hooks';
import { authStatus } from '../../store/selectors';

type PrivateProps = {
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateProps) => {
  const authorizationStatus = useAppSelector(authStatus);
  const {children} = props;

  return (authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>);
};
