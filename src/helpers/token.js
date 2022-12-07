const token = {
  get: type => {
    const item = window.localStorage.getItem(type || 'user:token');
    return item;
  },
  remove: type => {
    const item = window.localStorage.removeItem(type || 'user:token');
    return item;
  },
  set: (newToken, type) => {
    const item = window.localStorage.setItem(type || 'user:token', newToken);
    return item;
  },
};

export default token;
