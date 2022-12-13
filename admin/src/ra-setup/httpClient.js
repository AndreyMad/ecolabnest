import { fetchUtils } from 'react-admin';
import config from '../config';

export default (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = JSON.parse(localStorage.getItem(config.tokenKey));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
