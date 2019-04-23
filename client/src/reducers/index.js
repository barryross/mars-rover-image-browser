import { combineReducers } from 'redux-immutable';

import { connectRouter } from 'connected-react-router/immutable'

import curiosity from './curiosity'
import opportunity from './opportunity'
import spirit from './spirit'
import ui from './ui'

const rootReducer = (history) => combineReducers({
	Curiosity:curiosity,
	Opportunity:opportunity,
	Spirit:spirit,
	ui,
	router: connectRouter(history)
});

export default rootReducer;