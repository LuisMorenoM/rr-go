import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Actions
import { togglePrivate } from '../../../../shared/features/private/state/privateActions'

//Components
import { Button } from '../../../../shared/components'

//style
import styles from './styles/navbar.module.scss'

const NavBarComponent = ({ togglePrivate, isPrivate }) => {

    const triggerToggle = () => {
        togglePrivate(!isPrivate)
    }

    return (
        <nav className={styles.core}>
            <div className={styles.container}>
                <Link to={`/`} className={styles.item}>First</Link>
                <Link to={`/second`} className={styles.item}>Second</Link>
                <Link to={`/reserved`} className={styles.item}>Reserved</Link>
                {isPrivate && (
                    <>
                        <span>PRIVATE ON</span>
                        <Button onClick={() => triggerToggle()}>Remove private</Button>
                    </>
                )}
            </div>
        </nav>
    )
}

NavBarComponent.propTypes = {
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

export const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent))