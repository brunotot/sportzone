import jwtDecode from 'jwt-decode';
import { destroyToken, destroyUser, getToken } from "./storageService"
import axios from 'axios';

const api = axios.create({
  baseURL: `https://sportzone-server.herokuapp.com/api/auth/`
});

const getUser = () => {
  const token = getToken();
  if (token) {
    try {
      const { user } = jwtDecode(token);
      return user;
    } catch (e) {}
  }
  return null;
};

const login = async (username, password) => {
  return await api.post(`signin`, {username, password});
};

const logout = (setUser) => {
  setUser(null);
  destroyToken();
  destroyUser();
};

export { getUser, login, logout };
