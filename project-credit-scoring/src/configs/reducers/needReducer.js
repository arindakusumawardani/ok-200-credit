import {
    FIND_NEEDTYPE_BY_ID, FIND_NEEDTYPE_BY_ID_FAILURE, FIND_NEEDTYPE_BY_ID_SUCCESS,
    FIND_ALL_NEEDTYPE,
    FIND_ALL_NEEDTYPE_FAILURE,
    FIND_ALL_NEEDTYPE_SUCCESS, REMOVE_NEEDTYPE_BY_ID, REMOVE_NEEDTYPE_BY_ID_SUCCESS,
    SAVE_NEEDTYPE,
    SAVE_NEEDTYPE_FAILURE,
    SAVE_NEEDTYPE_SUCCESS, UPDATE_NEEDTYPE, UPDATE_NEEDTYPE_SUCCESS
} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllNeedReducer = (state = initialState, action) => {
    // console.log("ini action reducer", action.data)
    switch (action.type) {
        case FIND_ALL_NEEDTYPE:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_NEEDTYPE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_NEEDTYPE_FAILURE:
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

export const saveNeedReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_NEEDTYPE:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_NEEDTYPE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_NEEDTYPE_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            };
    }
}