import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from "~/routes"
import GlobalStyle from '~/styles/global'

import store from './store'


function App() {
  return (
    <div className="App">
      < Provider store={store}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
