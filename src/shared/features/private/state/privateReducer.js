import privateConstants from './privateConstants'

const init_state = {
	isPrivate: false
}

const privateReducer = (state = init_state, action) => {
    switch (action.type) {
        case privateConstants.PRIVATE_TOGGLE:
			return {
				...state,
                isPrivate: action.value
            }
        default:
            return state
    }
}

export default privateReducer;