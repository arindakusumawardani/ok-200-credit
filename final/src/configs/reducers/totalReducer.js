import {
    FIND_TOTAL, FIND_TOTAL_FAILURE, FIND_TOTAL_SUCCESS
} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllTotalReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_TOTAL:
            return {
                ...state,
                isLoading: true
            };
        case FIND_TOTAL_SUCCESS:
            console.log("reducer total", action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_TOTAL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}
