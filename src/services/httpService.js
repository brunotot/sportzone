import axios from 'axios';
import { getToken } from './storageService';

const API_URL = "https://sportzone-server.herokuapp.com";

axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = { 
        ...config.headers, 
        Authorization: `Bearer ${token}`
      };
    }
    config.url = `${API_URL}${config.url}`;

    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err.response.data)
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
