import iZtoast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

export default {
  error: (message, title = 'Error') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: 'bottomLeft'
    });
  },
  success: (message, title = 'Success') => {
    return iZtoast.success({
      title: title,
      message: message,
      position: 'bottomLeft'
    });
  }
};
