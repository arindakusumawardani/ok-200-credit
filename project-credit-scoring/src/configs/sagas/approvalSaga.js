import {put, takeLatest} from "redux-saga/effects";
import axios from "../api";
import {
    FIND_ALL_APPROVAL,
    FIND_ALL_APPROVAL_FAILURE,
    FIND_ALL_APPROVAL_SUCCESS,
    FIND_APPROVAL_BY_ID,
    FIND_APPROVAL_BY_ID_FAILURE,
    FIND_APPROVAL_BY_ID_SUCCESS,
    SAVE_APPROVAL,
    SAVE_APPROVAL_FAILURE,
    SAVE_APPROVAL_SUCCESS
} from "../constants/actions";

function* saveApprovalSaga(action) {
    let model = action.model
    let method = 'POST', url = '/approval'

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return{
                type: SAVE_APPROVAL_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return{
                type: SAVE_APPROVAL_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* findApprovalByIdSaga(action) {
    let result = yield axios.get(`/approval/${action.id}`)
        .then(data => {
            console.log("ini saga", data)
            return ({
                type: FIND_APPROVAL_BY_ID_SUCCESS,
                data: data

            })
        })
        .catch(err => {
            return ({
                type: FIND_APPROVAL_BY_ID_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* findAllApprovalSaga(data) {

    let result = yield axios.get("/approval/waiting")
        .then (data => {
            return ({
                type : FIND_ALL_APPROVAL_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_APPROVAL_FAILURE,
                error: err
            })
        })
    yield put(result)
}

export function* watchSaveApproval() {
    yield takeLatest(SAVE_APPROVAL, saveApprovalSaga)
}

export function* watchFindAllApproval() {
    yield takeLatest(FIND_ALL_APPROVAL, findAllApprovalSaga)
}

export function* watchFindApprovalById() {
    yield takeLatest (FIND_APPROVAL_BY_ID, findApprovalByIdSaga)
}