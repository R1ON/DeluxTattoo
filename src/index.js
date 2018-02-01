import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import Favicon from 'react-favicon';

import icoFavicon from './Assets/img/fav.ico';
import { store, history } from './Store';

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

import './Assets/sass/main.sass';

const renderApp = () => {
  render(
    <div>
      <Favicon url={icoFavicon} />
      <Provider store={store}>
        <Router history={history}>
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
