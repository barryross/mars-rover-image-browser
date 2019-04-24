import moment from 'moment'
import { fromJS } from 'immutable';

import {GET_OPPORTUNITY_IMAGES_SUCCESS, SET_DATE_OPPORTUNITY} from '../actionTypes'
let now = moment().format("YYYY-MM-DD") //TODO: consider ways to avoid having this line appear in all three rover reducers

const initialState = fromJS({
	images:[],
	date:now
})

export default (state = initialState, action) => {
  switch (action.type) {
		case GET_OPPORTUNITY_IMAGES_SUCCESS:
		return state
			.set('images', action.data)
						
		case SET_DATE_OPPORTUNITY:
		return state
		.set('date', moment(action.date).format("YYYY-MM-DD"))
		
   default:
    return state
   }
 }