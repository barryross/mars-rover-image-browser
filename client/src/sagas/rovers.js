import httpClient from '../utilities/httpClient'
import { put, takeEvery } from 'redux-saga/effects'

 function* workerGetCurosityImages(){
	const goals = yield httpClient.get('/api/rovers/curiosity/photos?date=2017-01-01')
  yield put({ type: "GET_CURIOSITY_SUCCESS", data:goals.data });
}

export function* watchRovers(){
	yield takeEvery('GET_CURIOSITY_IMAGES', workerGetCurosityImages)
}