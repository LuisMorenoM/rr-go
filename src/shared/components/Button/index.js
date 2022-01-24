import React from 'react'
import PropTypes from 'prop-types'

//style
import styles from './styles/button.module.scss'

export const Button = ({ children, onClick }) => {

    return (
        <button 
            className={styles.core}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
