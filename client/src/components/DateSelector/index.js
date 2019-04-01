import React from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { Button, Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({selectedDate, handleChange, className}) => {
	return (
		<div className={className}>
			<Icon name="calendar"/>
				<DatePicker
				customInput={<Button>{selectedDate}</Button>}
				showYearDropdown
				className="DatePicker"
				selected={new Date(selectedDate)}
				onChange={handleChange}
			/>
		</div>
	)
}

DateSelector.propTypes = {
  className: PropTypes.string
};
		 
export default DateSelector
