
import { fromJS } from 'immutable';
import { LOADING } from '../actionTypes'

const initialState = fromJS({
	loading:false
})
export default (state = initialState, action) => {
  switch (action.type) {
		case LOADING:
		return state.set('loading', action.data)
   default:
    return state
   }
 }