import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//style
import styles from './styles/title.module.scss'

export const Title = (props) => {

    return (
        <>
            <h1 className={styles.core}>{props.children}</h1>
        </>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
}
