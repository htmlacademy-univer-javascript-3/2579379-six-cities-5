const AUTH_TOKEN = 'six-cities-token';

export type Token = string;

export const setToken = (token: Token) => localStorage.setItem(AUTH_TOKEN, token);
export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN) ?? '';
export const removeToken = () => localStorage.removeItem(AUTH_TOKEN);
