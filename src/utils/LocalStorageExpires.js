import * as moment from 'moment';

export default {
  set(key, data) {
    const expiryObj = { expiry: moment().add(1, 'days') };
    const obj = Array.isArray(data)
      ? { value: data, ...expiryObj }
      : { ...data, ...expiryObj };
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  },
  get(key) {
    let data = JSON.parse(localStorage.getItem(key));
    if (!data) {
      return false;
    }
    if (data.expiry && moment(data.expiry).isAfter(moment())) {
      return data.value;
    }
    return false;
  },
  clean(key) {
    localStorage.removeItem(key);
  },
};
