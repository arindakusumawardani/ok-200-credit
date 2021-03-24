import {combineReducers} from "redux";
import {
  findAllCustomerByIdReducer, findAllCustomerBySubmitter,
  findAllCustomerReducer,
  findCustomerByIdReducer,
  saveCustomerReducer,
  updateCustomerReducer
} from "./customerReducer";
import {
  finAllTransactionReducer, findAllTransactionByStaff,
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
import {findAllReportReducer} from "./reportReducer";
import {saveApprovalReducer, findAllApprovalReducer, findApprovalByIdReducer} from "./approvalReducer";
import {findAllNeedReducer, saveNeedReducer} from "./needReducer";


const rootReducer = combineReducers({
  //CUSTOMER
  findAllCustomerReducer,
  saveCustomerReducer,
  findCustomerByIdReducer,
  updateCustomerReducer,

  findAllCustomerBySubmitter,

  //TRANSACTION
  finAllTransactionReducer,
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

  //APPROVAL
  saveApprovalReducer,
  findAllApprovalReducer,
  findApprovalByIdReducer,

  //NEEDTYPE
  findAllNeedReducer,
  saveNeedReducer,
})

export default rootReducer