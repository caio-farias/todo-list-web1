import axios from 'axios'

import { getAuthToken } from './utils';

const baseURL = 'http://localhost:8000';

const api = axios.create({ baseURL, crossdomain: true });

api.interceptors.request.use(config => {
  const token = getAuthToken();

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `${token}`;
  }

  return { ...config, headers };
});

export default api;