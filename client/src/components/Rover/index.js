import React, {Component} from 'react'
import PhotoDisplay from '../../components/PhotoDisplay'
import DateSelector from '../../components/DateSelector'
import { Button } from 'semantic-ui-react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import './style.scss'

export default class extends Component{	
	handleDateSelect = (date) => {
		const { setSelectedDate, name } = this.props
 		setSelectedDate(name, date)
	}
	componentDidMount = () =>{
		const {getRoverImages, name, currentlySelectedDate} = this.props
		getRoverImages(name, currentlySelectedDate)
	}
	render(){
		const { name, status, images, currentlySelectedDate, loading} = this.props
		return(
			<section>
				<h1 className="rover-name">Rover name: {name}  </h1>
				<h3>Mission status: {status}</h3>
				<Segment className="Rover-search-bar">
					<DateSelector
						className="DateSelector"
						selectedDate={currentlySelectedDate}
						handleChange={this.handleDateSelect}
						dateFormat="YYYY-MM-DD"
					/>
					<Button primary onClick={()=> this.props.getRoverImages(name, currentlySelectedDate)}>Search</Button>
				</Segment>
				<Dimmer active={loading}>
       	 <Loader indeterminate>Retrieving {name} photos</Loader>
      	</Dimmer>
				{ !loading && <PhotoDisplay {...this.props} images={images}/> }
			</section>
		)
	}

}