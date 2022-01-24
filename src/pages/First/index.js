import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//Components
import { Title, Button } from '../../shared/components'

//Page Layout
import { Basic } from '../../layouts/page'

//styles
import styles from './styles/first.module.scss'

//Actions
import { togglePrivate } from '../../shared/features/private/state/privateActions'

const First = ({ togglePrivate, isPrivate }) => {

    const triggerClick = () => {
        togglePrivate(!isPrivate)
    }

    return (
        <Basic>
            <div className={styles.core}>
                <Basic.Header>
                    <div className={styles.header}>
                        <Title>First page.</Title>
                    </div>
                </Basic.Header>
                <Basic.Body>
                    <div className={styles.body}>
                        First page body
                        <Button onClick={() => triggerClick()} >
                            {isPrivate ? 'Remove private' : 'Go private'}
                        </Button>
                    </div>
                </Basic.Body>
            </div>
        </Basic>
    )
}

First.propTypes = {
    isPrivate: PropTypes.bool.isRequired,
    togglePrivate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { privateReducer } = state;
    return {
        isPrivate: privateReducer.isPrivate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePrivate: param => dispatch(togglePrivate(param))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(First)