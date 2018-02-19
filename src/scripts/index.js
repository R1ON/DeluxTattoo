import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Favicon from 'react-favicon';

import { store } from './store';

import Home from './pages/home';
import Portfolio from './pages/portfolio';

import icoFavicon from '../images/fav.ico';
import '../styles/main/index.sass';

const renderApp = () => {
  render(
    <div>
      <Favicon url={icoFavicon} />
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Router>
      </Provider>
    </div>,
    document.querySelector('#mount_place')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(Home, () => { renderApp(); });
}
