
import { GET_ROVER_IMAGES } from '../actionTypes'

export const getRoverImages = (rover_name, date) =>{
	return {
		type: GET_ROVER_IMAGES,
		rover_name,
		date
 }
}

export const setSelectedDate = (rover_name, date) => {
	return {
		type: `SET_DATE_${rover_name}`.toUpperCase(),
		date
 }
}