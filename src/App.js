import React from 'react';
import { Provider } from "react-redux";
import {  Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from "~/routes"
import GlobalStyle from '~/styles/global'

import store from './store'
import history from '~/services/history';


function App() {
  return (
    <div className="App">
      < Provider store={store}>
        <Router history= {history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
