import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// styles
import styles from './styles/default.module.scss';

// components
import { NavBar } from '../components'

const DefaultLayoutComponent = ({ children }) => {
    return (
        <React.StrictMode>
            <div className={styles.core}>
                {/* CONTAINER */}
                <div className={styles.container}>
                    {/* HEADER */}
                    <div className={styles.header} data-testid={'default_header'}>
                        <NavBar />
                    </div>
                    {/* BODY */}
                    <div className={styles.body} data-testid={'default_body'}>
                        {children}
                    </div>
                    {/* FOOTER */}
                </div>
            </div>
        </React.StrictMode>
    )
}

DefaultLayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export const DefaultLayout = withRouter(connect(mapStateToProps, mapDispatchToProps)(DefaultLayoutComponent))

