import {
    FIND_ALL_NEEDTYPE, SAVE_NEEDTYPE
} from "../configs/constants/actions";

export function findAllNeedAction() {
    return {
        type: FIND_ALL_NEEDTYPE
    }
}

export function saveNeedAction(model) {
    return {
        type: SAVE_NEEDTYPE,
        model
    }
}