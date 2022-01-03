
//constants
import reservedConstants from './reservedConstants'

//services
import { getWeather } from '../../../services/api/weatherApi'

export const getWeatherAction = () => {
    return async dispatch => {
        dispatch({
            type: reservedConstants.RESERVED_WEATHER_REQUEST
        })

        let actualWeather = await getWeather().catch((e) => {
            dispatch({
                type: reservedConstants.RESERVED_WEATHER_FAILURE
            })
        })
        
        if (!actualWeather) return;
        if (!actualWeather.status) {
            dispatch({
                type: reservedConstants.RESERVED_WEATHER_FAILURE
            })
            return;
        }

        dispatch({
            type: reservedConstants.RESERVED_WEATHER_SUCCESS,
            value: actualWeather.value
        })
    }
}