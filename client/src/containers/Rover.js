import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import Rover from '../components/Rover'
import { getRoverImages, setSelectedDate} from '../actions'

//This use of ownProps below is to minimize excess state data that the Rover component has access to.  
//(e.g. When it is being used for Opportunity, we only want to pass Opportunity images to the Rover component)
const mapStateToProps = (state, ownProps) => {
    return {	
				images:state[ownProps.name].images,  
				currentlySelectedDate:state[ownProps.name].date,
				loading:state.ui.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
			getRoverImages: (rover_name, date) => {
				dispatch(getRoverImages(rover_name, date))
			},
			setSelectedDate: (rover_name, date) => {
				dispatch(setSelectedDate(rover_name, date))
			}
		}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rover));
