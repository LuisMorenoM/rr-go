import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Components
import { Button } from '../../../../shared/components';

//style
import styles from './styles/navbar.module.scss'

export const NavBar = (props) => {

    const triggerToggle = () => {
        props.togglePrivate(!props.isPrivate)
    }

    return (
        <nav className={styles.core}>
            <div className={styles.container}>
                <Link to={`/`} className={styles.item}>First</Link>
                <Link to={`/second`} className={styles.item}>Second</Link>
                <Link to={`/reserved`} className={styles.item}>Reserved</Link>
                {props.isPrivate && (
                    <>
                        <span>PRIVATE ON</span>
                        <Button onClick={() => triggerToggle()}>Remove private</Button>
                    </>
                )}
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    isPrivate: PropTypes.bool.isRequired,
    togglePrivate: PropTypes.func.isRequired
}
