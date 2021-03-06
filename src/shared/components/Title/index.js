import React from 'react'
import PropTypes from 'prop-types'

//style
import styles from './styles/title.module.scss'

export const Title = ({ children }) => {

    return (
        <h1 className={styles.core}>{children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
}
