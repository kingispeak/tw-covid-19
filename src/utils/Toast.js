import iZtoast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

class Toast {
  constructor() {
    this.toast = iZtoast;
  }

  error(message, title = 'Error') {
    return this.toast.error({
      title: title,
      message: message,
      position: 'bottomLeft'
    });
  }

  success(message, title = 'Success') {
    return this.toast.success({
      title: title,
      message: message,
      position: 'bottomLeft'
    });
  }
}

export default new Toast();
