import * as dayjs from 'dayjs';

export default {
  set(key, data) {
    const expiryObj = { expiry: dayjs().add(1, 'day').format() };
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
    if (data.expiry && dayjs(data.expiry).isAfter(dayjs())) {
      return data.value;
    }
    return false;
  },
  clean(key) {
    localStorage.removeItem(key);
  }
};
