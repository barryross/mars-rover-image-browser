import React from 'react'
import Display from '../../containers/Display'
export default (props) => {
	console.log("rover props", props)
	return (
		<div>
		<button onClick={()=> props.getRoverImages("curiosity", "2017-01-01")}></button>
		<Display/>
		</div>
	)
}