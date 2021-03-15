import jwtDecode from 'jwt-decode';
import { getToken } from "./storageService"

const getUser = () => {
  const token = getToken();
  return token ? jwtDecode(token) : null;
};

export { getUser };
