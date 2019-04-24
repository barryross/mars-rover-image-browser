import React from 'react';
import { shallow, mount, unmount} from 'enzyme';
import { Menu } from 'semantic-ui-react'

import Header from './Header';

	describe('<Header />', () => {
		let image;
		beforeEach(() => {
			
				});

			it('should render the Menu componentg', () => {
					const renderedComponent = shallow(<Header/>);
					expect(renderedComponent.contains(<Menu/>))

			});


});
