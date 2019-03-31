import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import Display from '../components/Display'

const mapStateToProps = state => {
    return {
			rovers: state.rovers
    }
}

const mapDispatchToProps = dispatch => {
    return {

		}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Display));
