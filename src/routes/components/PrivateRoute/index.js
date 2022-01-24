import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'

//components


const PrivateRouteComponent = ({ component: Component, isPrivate, ...rest}) => {

    // check if private is enabled. 
    if (!isPrivate) {
        //if not redirect outside the route or whatever you wanna do.
        return(<Redirect to="/error"/>)
    }

    return (
        <Route {...rest} component={Component} />
    )
}

PrivateRouteComponent.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([
        PropTypes.func.isRequired,
        PropTypes.object.isRequired
    ]),
    isPrivate: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    const { privateReducer } = state;
	return {
        isPrivate: privateReducer.isPrivate
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const PrivateRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent))


