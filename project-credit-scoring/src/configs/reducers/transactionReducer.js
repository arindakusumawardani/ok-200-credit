import {
    FIND_ALL_CUSTOMER,
    FIND_ALL_TRANSACTION,
    FIND_ALL_TRANSACTION_FAILURE,
    FIND_ALL_TRANSACTION_SUCCESS,
    FIND_CUSTOMER_BY_SUBMITTER_FAILURE,
    FIND_CUSTOMER_BY_SUBMITTER_SUCCESS,
    FIND_TRANSACTION_BY_ID,
    FIND_TRANSACTION_BY_ID_FAILURE,
    FIND_TRANSACTION_BY_ID_SUCCESS,
    FIND_TRANSACTION_BY_STAFF,
    FIND_TRANSACTION_BY_STAFF_FAILURE,
    FIND_TRANSACTION_BY_STAFF_SUCCESS,
    SAVE_TRANSACTION,
    SAVE_TRANSACTION_FAILURE,
    SAVE_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION,
    UPDATE_TRANSACTION_FAILURE,
    UPDATE_TRANSACTION_SUCCESS
} from "../constants/actions";


const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const finAllTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_TRANSACTION:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_TRANSACTION_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_TRANSACTION_FAILURE:
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

export const saveTransactionReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_TRANSACTION:
            return {
                ...state,
                data: null,
                isLoading: true
            };
        case SAVE_TRANSACTION_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_TRANSACTION_FAILURE:
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

export const findTransactionByIdReducer = (state = {initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_TRANSACTION_BY_ID:
            return {
                ...state,
                isLoading: true

            };
        case FIND_TRANSACTION_BY_ID_SUCCESS:
            console.log("ini reducer", action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_TRANSACTION_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
    }
}

export const updateTransactionReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case UPDATE_TRANSACTION:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case UPDATE_TRANSACTION_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case UPDATE_TRANSACTION_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            };
    }
}

export const findAllTransactionByStaff = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_TRANSACTION_BY_STAFF:
            return {
                ...state,
                isLoading: true
            };
        case FIND_TRANSACTION_BY_STAFF_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_TRANSACTION_BY_STAFF_FAILURE:
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
