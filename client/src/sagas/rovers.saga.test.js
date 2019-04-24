

import { put, takeEvery } from 'redux-saga/effects';
import watchRovers, { getImages } from './rovers'
import {setLoading, getRoverImagesSuccess, getRoverImagesError} from '../actions'

const data = {
		rover_name:"Curiosity",
		date:"2019-01-01"
}
describe('getRepos Saga', () => {
	let getImagesGenerator;

	// We have to test twice, once for a successful load and once for an unsuccessful one
	// so we do all the stuff that happens beforehand automatically in the beforeEach
	beforeEach(() => {
		getImagesGenerator = getImages(data);
	});

	it('should dispatch the loading action as True', () => {
		const putDescriptor = getImagesGenerator.next().value;
		expect(putDescriptor).toEqual(put(setLoading(true)));
});


	it('should dispatch the images success action if it requests the data successfully', () => {
			const response = {
				data:{
					response:{
						photos:[{
							name: 'First image',
					}]
					}
				}
			}
			let photos = response.data.response.photos
			getImagesGenerator.next(); //why do we have to do this? 
			getImagesGenerator.next(); //setLoading
			const putDescriptor = getImagesGenerator.next(response).value
			expect(putDescriptor).toEqual(put(getRoverImagesSuccess(data.rover_name, photos)));
	});

	it('should call the getRoverImagesError action if the response errors', () => {
		const response = {
			err:{
				success:false
				}
			}
		
			getImagesGenerator.next(); //why do we have to do this? 
			getImagesGenerator.next(); //setLoading
			const putDescriptor = getImagesGenerator.next(response).value;
			expect(putDescriptor).toEqual(put(getRoverImagesError(response.err)));
	});

});