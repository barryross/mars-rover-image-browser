import React from 'react'
import PropTypes from 'prop-types';
import Photo from './Photo'
import moment from 'moment'
import './styles.scss'

const PhotoDisplay = (props) => {
	const { images, name, status, launch, end } = props
	let formattedLaunch = moment(launch).format("MM/DD/YYYY") //For consistant formatting with the datepicker
	let formattedEnd = moment(end).format("MM/DD/YYYY") 
	return (
		<div className="display-container">
		{ images.length > 0 ? 
			images.map( image => 
				<Photo image={image} />
			) 
			: <div className="unavailable">
					<p>No images are available for the date that you have selected. </p><p> Images for {name} are available from the date it was launched, {formattedLaunch} until {status === "completed" ? formattedEnd : "yesterday."}</p>
					<p>Please ensure you've selected a date within this range</p>
				</div> 
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
		 