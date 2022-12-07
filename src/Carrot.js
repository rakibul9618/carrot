import { SnackbarProvider } from 'notistack';
import React from 'react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import Routes from './routes';
import * as Helpers from './helpers';
import successImg from './assets/images/success-svg.svg';
import errorImg from './assets/images/error-svg.svg';

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://2e454b1e87a147faaa6578872e6271e3@o605468.ingest.sentry.io/5923744',
    environment: process.env.NODE_ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

class Carrot extends React.Component {
  render() {
    return (
      <SnackbarProvider
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        ref={Helpers.notification.reference}
        action={key => <div onClick={() => Helpers.notification.close(key)}>DISMISS</div>}
        content={(key, obj) => {
          if (window.location.pathname === '/') {
            return <div />;
          }
          let error = false;
          let message = obj;
          let title = '';
          try {
            const notification = JSON.parse(obj);
            error = notification.error;
            message = notification.message;
            title = notification.title;
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Unable to parse notification object:', e);
          }
          return (
            <div className="notification" id={key}>
              <img
                className="notification-img"
                src={error ? errorImg : successImg}
                alt={error ? 'Error' : 'Success'}
              />
              <div>
                <div className="notification-title">{title}</div>
                <span className="notification-content">{message}</span>
              </div>
            </div>
          );
        }}
      >
        <Routes />
      </SnackbarProvider>
    );
  }
}

export default Carrot;
