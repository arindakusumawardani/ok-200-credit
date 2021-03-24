import {FIND_ALL_REPORT, FIND_ALL_REPORT_FAILURE, FIND_ALL_REPORT_SUCCESS} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_REPORT:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_REPORT_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_REPORT_FAILURE:
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