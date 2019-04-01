import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import rootSaga from './sagas'
import curiosity from './reducers/curiosity'
import opportunity from './reducers/opportunity'
import spirit from './reducers/spirit'
import ui from './reducers/ui'
import 'semantic-ui-css/semantic.min.css'
import { combineReducers } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const history = createHistory()

const store = createStore(
  combineReducers({
		Curiosity:curiosity,
		Opportunity:opportunity,
		Spirit:spirit,
		ui,
		router: connectRouter(history)
	}),
  initialState,
  compose(
    composeWithDevTools(
    applyMiddleware(
			sagaMiddleware,
			routerMiddleware(history)
		),
  ))
);


sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
