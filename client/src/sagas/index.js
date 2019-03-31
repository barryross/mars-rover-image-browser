import { all } from 'redux-saga/effects'
import { watchRovers } from './rovers'

export default function* rootSaga(){
	yield all([
		watchRovers()
	])
}