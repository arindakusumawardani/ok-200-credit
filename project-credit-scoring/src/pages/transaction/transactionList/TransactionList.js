import {Button, Container, Table} from "reactstrap";
import Containers from '../../../components/Containers/Container'
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {findAllTransactionAction} from "../../../actions/transactionAction";
import TransactionRow from "./TransactionRow";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import SignIn from "../../login/SignIn";
import TableScrollbar from 'react-table-scrollbar';
import Error from "../../Error";

function TransactionList({
                             isLoading,
                             transactions,
                             error,
                             findAllTransactionAction
                         }) {

    const onReload = () => {
        findAllTransactionAction();
    };

    useEffect(onReload, [findAllTransactionAction])

    return (
        <div>
            {
                localStorage.getItem("roles") == "MASTER" || localStorage.getItem("roles") == "SUPERVISOR" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">List Transaction</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div className="card">
                                                    <div className="card-header border-0">
                                                        {/*<h3 className="card-title">List Customer</h3>*/}
                                                        <div className="card-tools">

                                                        </div>
                                                    </div>

                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={10}>
                                                        <table className="table table-striped table-valign-middle">
                                                            <thead style={{textAlign: "left", background:"#FCE051"}}>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Name</th>
                                                                <th>Employee Type</th>
                                                                <th>Loan</th>
                                                                <th>Tenor</th>
                                                                <th>Interest Rate</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody style={{textAlign: "left"}}>
                                                            {
                                                                !isLoading ?
                                                                    transactions?.list?.map((e, i) => {
                                                                        return (
                                                                            <TransactionRow key={i} data={e}
                                                                                            number={(transactions.page * transactions.size) + 1 + i}/>
                                                                        )
                                                                    }) :
                                                                    <tr>
                                                                        <td colSpan="3"> Loading..</td>
                                                                    </tr>
                                                            }
                                                            </tbody>
                                                        </table>
                                                        </TableScrollbar>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Footer/>*/}

                        </Containers>
                    </>
                    :
                    <div>
                       <Error/>
                    </div>
            }
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        error: state.finAllTransactionReducer.error,
        transactions: state.finAllTransactionReducer.data || [],
        isLoading: state.finAllTransactionReducer.isLoading
    }
}

const mapDispatchToProps = {
    findAllTransactionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);