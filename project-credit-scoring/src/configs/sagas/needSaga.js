import {
    FIND_NEEDTYPE_BY_ID,
    FIND_ALL_NEEDTYPE,
    FIND_ALL_NEEDTYPE_FAILURE,
    FIND_ALL_NEEDTYPE_SUCCESS, REMOVE_NEEDTYPE_BY_ID, REMOVE_NEEDTYPE_BY_ID_FAILURE, REMOVE_NEEDTYPE_BY_ID_SUCCESS,
    SAVE_NEEDTYPE,
    SAVE_NEEDTYPE_FAILURE,
    SAVE_NEEDTYPE_SUCCESS, UPDATE_NEEDTYPE
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects"
import axios from "axios";

function* findAllNeedSaga() {
    let result = yield axios.get("/need")
        .then(data => {
            return ({
                type: FIND_ALL_NEEDTYPE_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_ALL_NEEDTYPE_FAILURE,
                error: err
            })
        })
    yield put(result)
}


function* saveNeedSaga(action) {
    let model = action.model;
    let method = 'POST', url = '/need';

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_NEEDTYPE_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_NEEDTYPE_FAILURE,
                error: e
            }
        })
    yield put(result)
}


export function* watchFindAllNeed() {
    yield takeLatest(FIND_ALL_NEEDTYPE, findAllNeedSaga)
}

export function* watchSaveNeed() {
    yield takeLatest(SAVE_NEEDTYPE, saveNeedSaga)
}