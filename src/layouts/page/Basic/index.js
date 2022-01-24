import React from "react"
import PropTypes from 'prop-types'

// styles
import styles from './styles/basic.module.scss';

export const Basic = ({ children }) => (
  <div className={styles.core}>
      {children}
  </div>    
)

Basic.Header = ({ children }) => <div className={styles.header}>{children}</div>
Basic.Body = ({ children }) => <div className={styles.body}>{children}</div>

Basic.propTypes = {
    children: PropTypes.node.isRequired
}

Basic.Header.propTypes = {
    children: PropTypes.node
}

Basic.Body.propTypes = {
    children: PropTypes.node
}