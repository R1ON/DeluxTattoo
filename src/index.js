import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import Favicon from 'react-favicon';

import './Assets/sass/main.sass';

import rootReducers from './Reducers';

import Home from './Pages/Home';

const store = createStore(rootReducers, composeWithDevTools(
	applyMiddleware(thunk)
));

const history = syncHistoryWithStore(hashHistory, store);

const renderApp = () => {
	render(
		<div>
			<Favicon url="./Assets/img/favicon/tattooMachine.ico" />
			<Provider store={store}>
				<Router history={history}>
					<Route path='/' component={Home} />
				</Router>
			</Provider>
		</div>,
		document.querySelector('#mount_place')
	)
}

renderApp()

if(module.hot) {
	module.hot.accept(Home, () => { renderApp() })
}
