import axios, { InternalAxiosRequestConfig } from 'axios';
import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { getToken } from '../services/token';
import { errorHandler } from '../store/error-slice/error-slice';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const WAIT_TIMEOUT = 5000;

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

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

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
