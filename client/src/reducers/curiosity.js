import moment from 'moment'
import {GET_CURIOSITY_IMAGES_SUCCESS, SET_DATE_CURIOSITY} from '../actionTypes'
let now = moment().format("YYYY-MM-DD") //TODO: consider ways to avoid having this line appear in all three rover reducers

export default (state = {images:[], date:now}, action) => {
  switch (action.type) {
	 case GET_CURIOSITY_IMAGES_SUCCESS:
		return { ...state, images:action.response.data.response.photos }
		
		case SET_DATE_CURIOSITY:
		return { ...state, date:moment(action.date).format("YYYY-MM-DD") }
		
   default:
    return state
   }
 }