import { TOGGLE_CLOSED, TOGGLE_LOCKED } from '../constants'

export const rootReducer = (
    state = { locked: false, closed: false },
    { type, payload }
) => {

    switch (type) {
        case TOGGLE_CLOSED:
            return {
                ...state,
                closed: !state.closed
            }
        case TOGGLE_LOCKED:
            return {
                ...state,
                locked: !state.locked
            }
        default:
            return state
    }
}