import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import 'semantic-ui-css/semantic.min.css'

import reducer from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  compose(
    composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
		),
  ))
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
