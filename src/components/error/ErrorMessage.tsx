import './error-message.style.css';
import { useAppSelector } from '../../store/hooks';

export const ErrorMessage = () => {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error'><div className='error-message'>{error}</div></div>
    : null;
};
