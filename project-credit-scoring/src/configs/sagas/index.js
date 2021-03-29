import { all } from "redux-saga/effects";
import {
  watchFindAllCustomer,
  watchFindAllCustomerBySubmitter,
  watchFindCustomerById,
  watchSaveCustomer,
  watchUpdateCustomer
} from "./customerSaga";
import {
  watchFindAllTransaction, watchFindAllTransactionByStaff,
  watchFindTransactionById,
  watchSaveTransaction,
  watchUpdateTransactionById
} from "./transactionSaga";
import {watchLoginSaga} from "./loginSaga";
import {
  watchFindAllAccount,
  watchFindByIdAccount,
  watchRemoveById,
  watchSaveAccount,
  watchUpdateAccountById
} from "./signupSaga";
import {watchFindAllReport, watchFindReportByStaff} from "./reportSaga";
import {watchFindAllApproval, watchFindApprovalById, watchSaveApproval} from "./approvalSaga";
import {watchFindAllNeed, watchFindByIdNeed, watchRemoveNeedById, watchSaveNeed, watchUpdateNeedById} from "./needSaga";
import {watchFindAllRole, watchFindByIdRole, watchRemoveRoleById, watchSaveRole} from "./roleSaga";

export default function* rootSaga() {
  yield all([
    watchFindAllCustomer(),
    watchSaveCustomer(),
    watchUpdateCustomer(),
    watchFindCustomerById(),

    watchFindAllTransaction(),
    watchSaveTransaction(),
    watchFindTransactionById(),
    watchUpdateTransactionById(),

    watchLoginSaga(),

    watchFindAllAccount(),
    watchSaveAccount(),
    watchFindByIdAccount(),
    watchUpdateAccountById(),
    watchRemoveById(),

    watchFindAllReport(),
    watchFindReportByStaff(),

    watchSaveApproval(),
    watchFindAllApproval(),
    watchFindApprovalById(),

    watchFindAllCustomerBySubmitter(),

    watchSaveNeed(),
    watchFindAllNeed(),
    watchFindByIdNeed(),
    watchUpdateNeedById(),
    watchRemoveNeedById(),

    watchFindAllTransactionByStaff(),

    watchFindAllRole(),
    watchSaveRole(),
    watchRemoveRoleById(),
    watchFindByIdRole()
  ])
}