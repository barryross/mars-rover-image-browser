import React from 'react';
import { mount, unmount} from 'enzyme';

import Photo from './index';

	describe('<Photo />', () => {
		let image;
		beforeEach(() => {
						image = {
							id: 660632,
							sol: 2072,
							camera: {
									id: 20,
									name: 'FHAZ',
									rover_id: 5,
									full_name: 'Front Hazard Avoidance Camera'
							},
							img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02072/opgs/edr/fcam/FLB_581437194EDR_F0701752FHAZ00341M_.JPG',
							earth_date: '2018-06-04',
							rover: {
									id: 5,
									name: 'Curiosity',
									landing_date: '2012-08-06',
									launch_date: '2011-11-26',
									status: 'active',
									max_sol: 2385,
									max_date: '2019-04-22',
									total_photos: 350532,
									cameras: [
											{
													name: 'FHAZ',
													full_name: 'Front Hazard Avoidance Camera'
											},
											{
													name: 'NAVCAM',
													full_name: 'Navigation Camera'
											},
											{
													name: 'MAST',
													full_name: 'Mast Camera'
											},
											{
													name: 'CHEMCAM',
													full_name: 'Chemistry and Camera Complex'
											},
											{
													name: 'MAHLI',
													full_name: 'Mars Hand Lens Imager'
											},
											{
													name: 'MARDI',
													full_name: 'Mars Descent Imager'
											},
											{
													name: 'RHAZ',
													full_name: 'Rear Hazard Avoidance Camera'
											}
									]
							}
					}
				});

			it('should render the rover name heading', () => {
					const renderedComponent = mount(<Photo image={image} />);
					expect(renderedComponent.text()).toContain(`Rover: ${image.rover.name}`);
					renderedComponent.unmount();

			});
			
			it('should render the camera name', () => {
				const renderedComponent = mount(<Photo image={image} />);
				expect(renderedComponent.text()).toContain(image.camera.name);
				renderedComponent.unmount();

		});

		it('should render the full camera name', () => {
			const renderedComponent = mount(<Photo image={image} />);
			expect(renderedComponent.text()).toContain(image.camera.full_name);
			renderedComponent.unmount();

	});


});
