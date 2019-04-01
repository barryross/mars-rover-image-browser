import { combineReducers } from 'redux';

import curiosity from './curiosity'
import opportunity from './opportunity'
import spirit from './spirit'
import ui from './ui'

const rootReducer = combineReducers({
	Curiosity:curiosity,
	Opportunity:opportunity,
	Spirit:spirit,
	ui,
});

export default rootReducer;