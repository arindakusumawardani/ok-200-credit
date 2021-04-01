import {
    FIND_ALL_APPROVAL,
    FIND_APPROVAL_BY_ID, FIND_APPROVAL_SUBMITTER_BY_ID, FIND_REPORT_BY_APPROVED, FIND_REPORT_BY_REJECTED,
    SAVE_APPROVAL
} from "../configs/constants/actions";

export function saveApprovalAction (model) {
    return{
        type: SAVE_APPROVAL,
        model
    }
}

export function findByIdApprovalAction(id) {
    console.log("action find approval by id", id)
    return{
        type: FIND_APPROVAL_BY_ID,
        id
    }
}

export function findByIdApprovalSubmitterAction(id) {
    console.log("action find approval by id", id)
    return{
        type: FIND_APPROVAL_SUBMITTER_BY_ID,
        id
    }
}

export function findAllApprovalAction(pagination) {
    return {
        type: FIND_ALL_APPROVAL,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }
    }
}

export function findReportByApprovedAction(pagination) {
    return {
        type: FIND_REPORT_BY_APPROVED,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }
    }
}

export function findReportByRejectedAction(pagination) {
    return {
        type: FIND_REPORT_BY_REJECTED,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }
    }
}


