import { LOGIN_USER, REGISTER_USER, APPLY_FILTERS } from '../actions/types';

const initialState = {
    user: null,
    filters: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload,
            };
        case APPLY_FILTERS:
            return {
                ...state,
                filters: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
