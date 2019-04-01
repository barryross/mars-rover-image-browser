import React from 'react'
import PropTypes from 'prop-types';
import Photo from './Photo'
import moment from 'moment'
import { Message } from 'semantic-ui-react'

import './styles.scss'

const PhotoDisplay = (props) => {
	const { images, name, status, launch, end } = props
	let formattedLaunch = moment(launch).format("MM/DD/YYYY") //For consistent formatting with the date-picker
	let formattedEnd = moment(end).format("MM/DD/YYYY") 
	return (
		<div className="display-container">
		{ images.length > 0 ? 
			images.map( image => 
				<Photo image={image} />
			) 
			: <Message negative>
				  <Message.Header>No images are available for the date that you have selected.</Message.Header>
					<p> Images for <strong>{name}</strong> are available from the date it was launched, 
					<strong>{formattedLaunch}</strong> until <strong>{status === "completed" ? formattedEnd : "yesterday."}</strong></p>
					<p>Please ensure you've selected a date within this range.*</p>
					<p> *NOTE: There are not images available for every day within a range.</p>
					<p>If you have selected a date within the range above, and are seeing no results, try for another date close to your selection.</p>
		  	</Message>
			}
		</div>
	)
}

PhotoDisplay.propTypes = {
	images: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	launch: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired
};

export default PhotoDisplay
		 