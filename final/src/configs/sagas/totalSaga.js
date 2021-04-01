import axios from "../api";
import {
    FIND_TOTAL,
    FIND_TOTAL_FAILURE,
    FIND_TOTAL_SUCCESS
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects";

function* findAllCustomerSaga() {
    let result = yield axios.get('/total')
        .then(data => {
            return ({
                type: FIND_TOTAL_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_TOTAL_FAILURE,
                error: err
            })
        })
    yield put(result)
}

export function* watchFindAllTotal() {
    yield takeLatest(FIND_TOTAL, findAllCustomerSaga)
}