import {
    FIND_ALL_TRANSACTION,
    FIND_TRANSACTION_BY_ID,
    SAVE_TRANSACTION,
    UPDATE_TRANSACTION
} from "../configs/constants/actions";

export function findAllTransactionAction() {
    return {
        type: FIND_ALL_TRANSACTION,
    }
}

export function saveTransactionAction(model) {
    return {
        type: SAVE_TRANSACTION,
        model
    }
}

export function findByIdTransactionAction(id) {
    return{
        type: FIND_TRANSACTION_BY_ID,
        id
    }
}

export function update(payload) {
    return {
        type: UPDATE_TRANSACTION,
        payload
    }
}