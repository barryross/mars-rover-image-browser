import httpClient from '../utilities/httpClient'
import { put, takeEvery } from 'redux-saga/effects'

 function* workerGetCurosityImages(){
	const data = yield httpClient.get('/api/rovers/curiosity?date=2017-01-01')
  yield put({ type: "GET_CURIOSITY_SUCCESS", data});
}

export function* watchRovers(){
	yield takeEvery('GET_CURIOSITY_IMAGES', workerGetCurosityImages)
}