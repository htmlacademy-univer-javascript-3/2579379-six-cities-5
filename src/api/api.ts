import axios from 'axios';
import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { removeErrorAction } from '../store/api-actions';
import { setError } from '../store/actions';
import { store } from '../store/store';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const WAIT_TIMEOUT = 5000;

export const errorHandler = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(removeErrorAction());
};

type MessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const configureAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: WAIT_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<MessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const message = (error.response.data);
        errorHandler(message.message);
      }

      throw error;
    }
  );

  return api;
};
