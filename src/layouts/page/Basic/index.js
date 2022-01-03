import React from "react"
import PropTypes from 'prop-types'

// styles
import styles from './styles/basic.module.scss';

export const Basic = (props) => (
  <div className={styles.core}>
      {props.children}
  </div>    
)

Basic.Header = (props) => <div className={styles.header}>{props.children}</div>
Basic.Body = (props) => <div className={styles.body}>{props.children}</div>

Basic.propTypes = {
    children: PropTypes.node.isRequired
}

Basic.Header.propTypes = {
    children: PropTypes.node
}

Basic.Body.propTypes = {
    children: PropTypes.node
}