import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import Favicon from 'react-favicon';
import icoFavicon from './Assets/img/fav.ico';

import './Assets/sass/main.sass';

import RootReducers from './Reducers';

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(hashHistory, store);

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
