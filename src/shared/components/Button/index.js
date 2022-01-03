import React from 'react'
import PropTypes from 'prop-types'

//style
import styles from './styles/button.module.scss'

export const Button = (props) => {

    return (
        <>
            <button 
                className={styles.core}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
