import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import Rover from '../components/Rover'
import { getRoverImages, setSelectedDate} from '../actions'

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
