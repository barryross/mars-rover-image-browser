import React from 'react'
import './styles.css'

export default (props) => {

	return (
		<div className="display-container">
		{	props.rovers.map(image => <img src={`${image.img_src}`} alt="image from mars rover"/>)}
		</div>
	)
}