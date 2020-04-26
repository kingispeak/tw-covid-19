import Vue from 'vue';
import axios from 'axios';
import toast from './Toast';

Vue.prototype.$http = axios;
window.axios = axios;

const axiosResponseHandler = {
  error(error) {
    if (
      Object.prototype.hasOwnProperty.call(error.config, 'errorHandle') &&
      error.config.errorHandle === false
    ) {
      return Promise.reject(error);
    }

    if (error && error.response) {
      if (process.env.NODE_ENV !== 'production') {
        window.console.error(error.response);
      }
      switch (error.response.status) {
        case 400:
          toast.error('Bad Request');
          break;
        case 401:
          toast.error('Unauthorized');
          break;
        case 403:
          toast.error('Forbidden');
          break;
        case 404:
          toast.error('Not Found');
          break;
        case 422:
          toast.error('Unprocessable Entity');
          break;
        case 500:
          toast.error('Internal Server Error');
          break;
        case 503:
          toast.error('Service Unavailable');
          break;
        default:
          toast.error(`連接錯誤${error.response.status}`);
      }
    } else {
      toast.error('連接到服務器失敗');
    }
    return Promise.reject(error);
  },
  success(response) {
    switch (response.status) {
      // case 200: // OK
      case 201: // 201 Created
      case 204: // 204 No Content
        toast.success('操作成功');
        break;
    }
    return Promise.resolve(response);
  },
};

window.axios.interceptors.request.use(config => config);

// apply interceptor on response
window.axios.interceptors.response.use(
  axiosResponseHandler.success,
  axiosResponseHandler.error
);

export default axios;
