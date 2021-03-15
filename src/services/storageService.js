const KEY_TOKEN = 'token';
const KEY_USER = 'user';

const destroy = (key) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}

const get = (key) => {
  let value = localStorage.getItem(key);
  if (!value) {
    value = sessionStorage.getItem(key);
  }
  return value;
}

const setUserLocal = (user) => {
  localStorage.setItem(KEY_USER, user);
}

const setUserSession = (user) => {
  sessionStorage.setItem(KEY_USER, user);
}

const setTokenLocal = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
}

const setTokenSession = (token) => {
  sessionStorage.setItem(KEY_TOKEN, token);
}

const getUser = () => {
  return get(KEY_USER);
};

const getToken = () => {
  return get(KEY_TOKEN);
};

const destroyToken = () => {
  destroy(KEY_TOKEN);
};

const destroyUser = () => {
  destroy(KEY_USER);
};

export {
  getToken,
  destroyToken,
  getUser,
  destroyUser,
  setUserSession,
  setUserLocal,
  setTokenSession,
  setTokenLocal
};
