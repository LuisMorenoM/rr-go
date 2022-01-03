import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// styles
import styles from './styles/default.module.scss';

//Actions
import { togglePrivate } from '../../../shared/features/private/state/privateActions'

// components
import { NavBar } from '../components'

const DefaultLayoutComponent = (props) => {
    return (
        <React.StrictMode>
            <div className={styles.core}>
                {/* CONTAINER */}
                <div className={styles.container}>
                    {/* HEADER */}
                    <div className={styles.header}>
                        <NavBar isPrivate={props.isPrivate} togglePrivate={props.togglePrivate} />
                    </div>
                    {/* BODY */}
                    <div className={styles.body}>
                        {props.children}
                    </div>
                    {/* FOOTER */}
                </div>
            </div>
        </React.StrictMode>
    )
}

DefaultLayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    togglePrivate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	let { privateReducer } = state;
    return {
        isPrivate: privateReducer.isPrivate
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
        togglePrivate: param => dispatch(togglePrivate(param))
	}
}

export const DefaultLayout = withRouter(connect(mapStateToProps, mapDispatchToProps)(DefaultLayoutComponent))

