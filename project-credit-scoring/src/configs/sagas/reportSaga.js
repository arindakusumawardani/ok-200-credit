
import axios from "../api";
import {put, takeLatest} from "redux-saga/effects";
import {FIND_ALL_REPORT, FIND_ALL_REPORT_FAILURE, FIND_ALL_REPORT_SUCCESS} from "../constants/actions";


function* findAllReportSaga(data) {

    let result = yield axios.get("/report")
        .then (data => {
            return ({
                type: FIND_ALL_REPORT_SUCCESS,
                data : data
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_REPORT_FAILURE,
                error: err
            })
        })
    yield put (result)
}

export function* watchFindAllReport() {
    yield takeLatest (FIND_ALL_REPORT, findAllReportSaga)
}