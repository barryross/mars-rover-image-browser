import { GET_ROVER_IMAGES, LOADING } from '../actionTypes';

import { getRoverImages, setLoading, setSelectedDate} from '../actions';

describe('All Actions', () => {
  describe('getRoverImages', () => {
    it('should return the correct type, rover name, and date', () => {
      const fixture = {
							rover_name: "Rover name",
							date: "2019-01-01"
						}

      const expectedResult = {
        type: GET_ROVER_IMAGES,
								...fixture
      };

      expect(getRoverImages(fixture.rover_name, fixture.date)).toEqual(expectedResult);
    });
		});

		describe('setSelectedDate', () => {
			it('should return the correct type and date', () => {
				const rover = 'curiosity'
					const date = '2019-01-01'
					const expectedResult = {
							type: `SET_DATE_CURIOSITY`,
							date
					};
					expect(setSelectedDate(rover, date)).toEqual(expectedResult);
			});
	});

		
		describe('setLoading', () => {
			it('should return the correct type and value', () => {
					const fixture = true
					const expectedResult = {
							type: LOADING,
							data: fixture
					};
					expect(setLoading(fixture)).toEqual(expectedResult);
			});
	});


});
