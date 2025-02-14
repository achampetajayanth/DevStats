import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ycocqjzma220e2e8.us.auth0.com"
    clientId="3rpnzlXloW8Cofov1e5r8x4a8naFdlz8"
    authorizationParams={{
      redirect_uri: window.location.origin +"/Dashboard"
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

