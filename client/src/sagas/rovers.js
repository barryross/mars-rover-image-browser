import httpClient from '../utilities/httpClient'
import {GET_ROVER_IMAGES} from '../actionTypes/'
import { put, takeEvery } from 'redux-saga/effects'

 function* workerGetRoverImages(data){
	const { rover_name, date } = data;
	yield put({ type: "LOADING", data:true}); 
	const response = yield httpClient.get(`/api/rovers/${rover_name}?date=${date}`)
	yield put({ type: `GET_${rover_name}_IMAGES_SUCCESS`.toUpperCase(), response}); //Works for all three different rovers
	yield put({ type: "LOADING", data:false});
}

export function* watchRovers(){
	yield takeEvery(GET_ROVER_IMAGES, workerGetRoverImages)
}