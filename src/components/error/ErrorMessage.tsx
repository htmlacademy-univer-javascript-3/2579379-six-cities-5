import './error-message.style.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clearError } from '../../store/error-slice/error-slice';
import { useEffect } from 'react';

export const ErrorMessage = () => {
  const error = useAppSelector((state) => state.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error.error) {
      const timeout = setTimeout(() => {
        dispatch(clearError());
      }, 20000);

      return () => clearTimeout(timeout);
    }
  }, [error, dispatch]);

  return error.error
    ? <div className='error'><div className='error-message'>{error.error}</div></div>
    : null;
};
