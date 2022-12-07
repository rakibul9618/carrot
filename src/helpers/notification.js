import React from 'react';

window.notification = {};
class Notification {
  reference = React.createRef();

  close = key => {
    if (this.reference.current) this.reference.current.closeSnackbar(key);
  };

  success = (message, title = '') => {
    if (this.reference.current) {
      const obj = { error: false, message, title };
      this.reference.current.enqueueSnackbar(JSON.stringify(obj), {
        autoHideDuration: 5000,
        preventDuplicate: true,
        variant: 'success',
      });
    }
  };

  error = (message, title = '') => {
    if (this.reference.current) {
      const obj = { error: true, message, title };
      this.reference.current.enqueueSnackbar(JSON.stringify(obj), {
        autoHideDuration: 5000,
        preventDuplicate: true,
        style: { whiteSpace: 'pre-line' },
        variant: 'error',
      });
    }
  };
}

export default new Notification();
