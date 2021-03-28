import {
    FIND_ALL_NEEDTYPE, REMOVE_NEEDTYPE_BY_ID, SAVE_NEEDTYPE
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
export function removeByIdNeedAction(id) {
    return {
        type: REMOVE_NEEDTYPE_BY_ID,
        id
    }
}