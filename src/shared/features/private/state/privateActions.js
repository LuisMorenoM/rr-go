
import privateConstants from './privateConstants'

export const togglePrivate = toggle => {
    return dispatch => {
        dispatch({
            type: privateConstants.PRIVATE_TOGGLE,
            value: toggle
        })
    }
}