import moment from 'moment';
import {GET_SPIRIT_IMAGES_SUCCESS, SET_DATE_SPIRIT} from '../actionTypes';

let now = moment().format("YYYY-MM-DD");

export default (state = {images:[], date:now}, action) => {
  switch (action.type) {
	 case GET_SPIRIT_IMAGES_SUCCESS:
		return { ...state, images:action.response.data.response.photos }
	
		case SET_DATE_SPIRIT:
		return { ...state, date:moment(action.date).format("YYYY-MM-DD") }
		
   default:
    return state
   }
 }