import React from 'react';
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {  Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from "~/routes"
import GlobalStyle from '~/styles/global'

import { store, persistor } from './store'
import history from '~/services/history';


function App() {
  return (
    <div className="App">
      < Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history= {history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate >
      </Provider>
    </div>
  );
}

export default App;
