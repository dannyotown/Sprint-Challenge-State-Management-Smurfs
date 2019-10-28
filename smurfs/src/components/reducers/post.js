import {
    API_SUCCESS,
    API_FAIL,
    API_POSTSTART
} from "../actions";

const initialState = {
    post: false,
    success: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_POSTSTART:
            return {
                ...state,
                post: true,
            };
        case API_SUCCESS:
            return {
                ...state,
                post: true,
                success: action.payload
            };
        case API_FAIL:
            return {
                ...state,
                post: false,
                error: action.payload
            };
        default:
            return state;
    }
}