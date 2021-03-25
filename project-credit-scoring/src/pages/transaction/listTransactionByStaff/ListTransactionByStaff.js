import {Button, Container, Table} from "reactstrap";
import Containers from '../../../components/Containers/Container'
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {findAllTransactionAction} from "../../../actions/transactionAction";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import TableScrollbar from 'react-table-scrollbar';
import Row from "../../transaction/listTransactionByStaff/Row";

function TransactionList({
                             isLoading,
                             transactions,
                             error,
                             findAllTransactionAction
                         }) {

    const onReload = () => {
        findAllTransactionAction();

        console.log("on reload", )
    };

    useEffect(onReload, [findAllTransactionAction])


    return (
        <div>
            {
                localStorage.getItem("roles") == "STAFF" ?
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
                                                        <div className="card-tools">

                                                        </div>
                                                    </div>

                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={10}>
                                                            <table className="table table-striped table-valign-middle">
                                                                <thead
                                                                    style={{textAlign: "left", background: "#FCE051"}}>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Name</th>
                                                                    <th>Employee Type</th>
                                                                    <th>Loan</th>
                                                                    <th>Tenor</th>
                                                                    <th>Interest Rate</th>
                                                                    <th>Pending Approval</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody style={{textAlign: "left"}}>
                                                                {
                                                                    !isLoading ?
                                                                        transactions?.list?.map((e, i) => {
                                                                            return (
                                                                                <Row key={i} data={e}
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
                    <p>
                        cannot access
                    </p>
            }
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        error: state.findAllTransactionByStaff.error,
        transactions: state.findAllTransactionByStaff.data || [],
        isLoading: state.findAllTransactionByStaff.isLoading
    }
}

const mapDispatchToProps = {
    findAllTransactionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);