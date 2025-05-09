import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store';



ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="153083246431-8lg4oqq3gitg51tlepiggldq9rkc9ofl.apps.googleusercontent.com">
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  </GoogleOAuthProvider>
);
