import {GET_ROVER_IMAGES, GET_ROVER_IMAGES_ERROR} from '../actionTypes/'
import { setLoading, getRoverImagesError, getRoverImagesSuccess } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from '../services/api'

 export function* getImages(data){
	yield put(setLoading(true)); 
	const response = yield call(api.fetchRovers, data);
	console.log("response", response)
	if(response.data){
		const { photos } = response.data.response
		yield put(getRoverImagesSuccess(data.rover_name, photos)); // Works for all three different rovers
		yield put(setLoading(false)); 
	}else{
		yield put(getRoverImagesError(response.err))
		yield put(setLoading(false)); 
	}


}
export default function* watchRovers(){
	yield takeEvery(GET_ROVER_IMAGES, getImages)
}