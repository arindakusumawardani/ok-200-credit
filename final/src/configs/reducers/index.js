import {combineReducers} from "redux";
import {
  findAllCustomerBySubmitter,
  findAllCustomerReducer,
  findCustomerByIdReducer,
  saveCustomerReducer,
  updateCustomerReducer
} from "./customerReducer";
import {
  findAllTransactionByStaff, findAllTransactionReducer,
  findTransactionByIdReducer,
  saveTransactionReducer,
  updateTransactionReducer
} from "./transactionReducer";
import {loginReducer} from "./loginReducer";
import {
  findAccountByIdReducer,
  findAllAccountReducer,
  removeAccountByIdReducer,
  saveAccountReducer,
  updateAccountReducer
} from "./signupReducer";
import {findAllReportByStaff, findAllReportReducer} from "./reportReducer";
import {
  saveApprovalReducer,
  findAllApprovalReducer,
  findApprovalByIdReducer,
  findApprovalSubmitterByIdReducer, findReportByApprovedReducer, findReportByRejectedReducer
} from "./approvalReducer";
import {
  findAllNeedReducer,
  findNeedTypeByIdReducer,
  removeNeedTypeByIdReducer,
  saveNeedReducer,
  updateNeedTypeReducer
} from "./needReducer";
import {
  findAllRoleReducer,
  findRoleByIdReducer,
  removeRoleByIdReducer,
  saveRoleReducer,
    updateRoleReducer
} from "./roleReducer";
import {changePasswordReducer} from "./userReducer";
import {findAllTotalReducer} from "./totalReducer";


const rootReducer = combineReducers({
  //CUSTOMER
  findAllCustomerReducer,
  saveCustomerReducer,
  findCustomerByIdReducer,
  updateCustomerReducer,

  findAllCustomerBySubmitter,

  //TRANSACTION
  findAllTransactionReducer,
  saveTransactionReducer,
  findTransactionByIdReducer,
  updateTransactionReducer,
  findAllTransactionByStaff,

  //LOGIN
  loginReducer,

  //SIGNUP
  findAllAccountReducer,
  saveAccountReducer,
  findAccountByIdReducer,
  updateAccountReducer,
  removeAccountByIdReducer,

  //REPORT
  findAllReportReducer,
  findAllReportByStaff,

  //APPROVAL
  saveApprovalReducer,
  findAllApprovalReducer,
  findApprovalByIdReducer,
  findApprovalSubmitterByIdReducer,
  findReportByApprovedReducer,
  findReportByRejectedReducer,

  //NEEDTYPE
  findAllNeedReducer,
  saveNeedReducer,
  findNeedTypeByIdReducer,
  updateNeedTypeReducer,
  removeNeedTypeByIdReducer,

  //ROLE
  findAllRoleReducer,
  saveRoleReducer,
  removeRoleByIdReducer,
  findRoleByIdReducer,
  updateRoleReducer,

  //USER
  changePasswordReducer,

  //TOTAL
  findAllTotalReducer

})

export default rootReducer