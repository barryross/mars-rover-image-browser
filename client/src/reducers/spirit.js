import moment from 'moment'
import { fromJS } from 'immutable';

import {GET_SPIRIT_IMAGES_SUCCESS, SET_DATE_SPIRIT} from '../actionTypes'
let now = moment().format("YYYY-MM-DD") //TODO: consider ways to avoid having this line appear in all three rover reducers

const initialState = fromJS({
	images:[],
	date:now
})

export default (state = initialState, action) => {
  switch (action.type) {
		case GET_SPIRIT_IMAGES_SUCCESS:
		let images = action.response.data.response.photos ? action.response.data.response.photos : []
		return state
			.set('images', images)
						
		case SET_DATE_SPIRIT:
		return state
		.set('date', moment(action.date).format("YYYY-MM-DD"))
		
   default:
    return state
   }
 }