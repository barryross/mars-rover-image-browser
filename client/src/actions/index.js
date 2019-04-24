
import { GET_ROVER_IMAGES, LOADING, GET_ROVER_IMAGES_ERROR } from '../actionTypes'

export const getRoverImages = (rover_name, date) =>{
	return {
		type: GET_ROVER_IMAGES,
		rover_name,
		date
 }
}
export const getRoverImagesSuccess = (rover_name, data) =>{
	return {
		type: `GET_${rover_name}_IMAGES_SUCCESS`.toUpperCase(),
		data
 }
}

export const getRoverImagesError = (err) =>{
	return {
		type: GET_ROVER_IMAGES_ERROR,
		err
 }
}

export const setSelectedDate = (rover_name, date) => {
	return {
		type: `SET_DATE_${rover_name}`.toUpperCase(),
		date
 }
}

export const setLoading = (data) => {
	return {
		type: LOADING,
		data
 }
}
