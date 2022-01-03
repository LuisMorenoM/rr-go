
//constants
import reservedConstants from './reservedConstants'

const init_state = {
    weather: {
        isFetching: false,
        value: null
    }
}

const reservedReducer = (state = init_state, action) => {
    switch (action.type) {
        case reservedConstants.RESERVED_WEATHER_REQUEST:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    isFetching: true
                }
            }
        case reservedConstants.RESERVED_WEATHER_SUCCESS:
            return {
                ...state,
                weather: {
                    isFetching: false,
                    value: action.value
                }
            }
        case reservedConstants.RESERVED_WEATHER_FAILURE:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    isFetching: false
                }
            }
        default:
            return state;
    }
}

export default reservedReducer