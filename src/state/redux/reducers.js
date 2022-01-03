import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// reducers
import privateReducer from '../../shared/features/private/state/privateReducer'
import reservedReducer from '../../pages/Reserved/state/reservedReducer'

export default (history) => combineReducers({
	//my reducers
	router: connectRouter(history),
	privateReducer,
	reservedReducer
})
