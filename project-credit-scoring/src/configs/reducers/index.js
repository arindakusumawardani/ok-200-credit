import {combineReducers} from "redux";
import {
  findAllCustomerByIdReducer, findAllCustomerBySubmitter,
  findAllCustomerReducer,
  findCustomerByIdReducer,
  saveCustomerReducer,
  updateCustomerReducer
} from "./customerReducer";
import {
  finAllTransactionReducer, findAllTransactionByStaff, findAllTransactionReducer,
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
import {saveApprovalReducer, findAllApprovalReducer, findApprovalByIdReducer} from "./approvalReducer";
import {
  findAllNeedReducer,
  findNeedTypeByIdReducer,
  removeNeedTypeByIdReducer,
  saveNeedReducer,
  updateNeedTypeReducer
} from "./needReducer";


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

  //NEEDTYPE
  findAllNeedReducer,
  saveNeedReducer,
  findNeedTypeByIdReducer,
  updateNeedTypeReducer,
  removeNeedTypeByIdReducer,

})

export default rootReducer