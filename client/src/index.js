import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <Auth0Provider
    domain="zemac.uk.auth0.com"
    clientId="NHTtzCq2YI2et2L9PdwLedx2F9tqQ6Pn"
    authorizationParams={ {
      redirect_uri: window.location.origin
    } }
    audience="this a unique API"
    scope="openid profile email"
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
