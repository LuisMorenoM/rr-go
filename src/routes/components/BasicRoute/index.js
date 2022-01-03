import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { push } from 'connected-react-router';

//components


const BasicRouteComponent = ({ component: Component, ...rest}) => {

    return (
        <Route {...rest} component={Component} />
    )
}

BasicRouteComponent.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([
        PropTypes.func.isRequired,
        PropTypes.object.isRequired
    ]),
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const BasicRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicRouteComponent))


