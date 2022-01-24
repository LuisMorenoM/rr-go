import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//Components
import { Title, Button } from '../../shared/components'

//actions
import { getWeatherAction } from './state/reservedActions'

//Layout
import { Basic } from '../../layouts/page'

//styles
import styles from './styles/reserved.module.scss'

const Reserved = ({ getWeatherAction, weather }) => {

    useEffect(() => {
        getWeatherAction()
    }, [])

    return (
        <Basic>
            <div className={styles.core}>
                <Basic.Header>
                    <div className={styles.header}>
                        <Title>Reserved page.</Title>
                    </div>
                </Basic.Header>
                <Basic.Body>
                    <div className={styles.body}>
                        {weather.isFetching && (
                            <div>Fetching...</div>
                        )}
                        {weather.value && (
                            <div>
                                Today is {weather.value}
                            </div>
                        )}
                        {!weather.isFetching && (
                            <Button onClick={getWeatherAction}>Get Weather Manually</Button>
                        )}
                    </div> 
                </Basic.Body>
            </div>
        </Basic>
    )
}

Reserved.propTypes = {
    getWeatherAction: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    let { reservedReducer } = state
    return {
        weather: reservedReducer.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherAction: () => dispatch(getWeatherAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserved)