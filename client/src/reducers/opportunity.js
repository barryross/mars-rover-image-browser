import moment from 'moment'
import {GET_OPPORTUNITY_IMAGES_SUCCESS, SET_DATE_OPPORTUNITY} from '../actionsTypes'

let now = moment().format("YYYY-MM-DD")

export default (state = {images:[], date:now}, action) => {
  switch (action.type) {
	 case GET_OPPORTUNITY_IMAGES_SUCCESS:
		return { ...state, images:action.response.data.response.photos }
		
		case SET_DATE_OPPORTUNITY:
	  return { ...state, date:moment(action.date).format("YYYY-MM-DD") }
   default:
    return state
   }
 }