import axios from 'axios';
import { AxiosInstance } from 'axios';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const WAIT_TIMEOUT = 5000;

export const configureAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: WAIT_TIMEOUT,
  });

  return api;
};
