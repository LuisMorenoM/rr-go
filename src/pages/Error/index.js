import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//Components
import { Title } from '../../shared/components'

//Layout
import { Basic } from '../../layouts/page'

//styles
import styles from './styles/error.module.scss'

const Error = () => {

    return (
        <Basic>
            <div className={styles.core}>
                <Basic.Header>
                    <div className={styles.header}>
                        <Title>Error page.</Title>
                    </div>
                </Basic.Header>
                <Basic.Body>
                    <div className={styles.body}>
                        Error page body
                    </div>
                </Basic.Body>
            </div>
        </Basic>
    )
}

Error.propTypes = {
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)