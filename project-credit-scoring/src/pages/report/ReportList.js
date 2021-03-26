import Containers from '../../components/Containers/Container'
import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import Footer from "../../components/dashboard/Footer";
import SignIn from "../account/SignIn";
import {findAllReportAction} from "../../actions/reportAction";
import ReportRow from "./ReportRow";
import TableScrollbar from 'react-table-scrollbar';
import Error from "../Error";

function ReportList({
    isLoading, reports, error, findAllReportAction
                    }) {

    const onReload = () => {
        findAllReportAction();
        console.log("ini data", reports)
    }

    useEffect(onReload, [findAllReportAction])

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
                                                <h1 className="m-0 text-dark">Report</h1>
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
                                                            <a href="#" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-download"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={10}>
                                                        <table className="table table-bordered table-valign-middle table-head-fixed">
                                                            <thead style={{background:"#FCE051"}}>
                                                            <tr >
                                                                <th colSpan="5"> Customer Data</th>
                                                                <th colSpan="11">Transaction</th>
                                                                <th colSpan="5">Approved</th>
                                                            </tr>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                                <th>Id Number</th>
                                                                <th>Address</th>
                                                                <th>Employee Type</th>
                                                                <th>Income</th>
                                                                <th>Outcome</th>
                                                                <th>Loan Amount</th>
                                                                <th>Interest Rate</th>
                                                                <th>Tenor</th>
                                                                <th>Principle</th>
                                                                <th>Interest</th>
                                                                <th>Installment</th>
                                                                <th>Installment Total</th>
                                                                <th>Credit ratio</th>
                                                                <th>Finance Criteria</th>
                                                                <th>Employee Criteria</th>
                                                                <th>Approval</th>
                                                                <th>Submitted Date</th>
                                                                <th>Approved Date</th>
                                                            </tr>
                                                            </thead>

                                                            <tbody>
                                                            {
                                                                ! isLoading ?
                                                                    reports?.list?.map((e,i) => {
                                                                        return (
                                                                            <ReportRow key={i} data={e}
                                                                            number={(reports.page * reports.size) + 1 + i}/>
                                                                        )
                                                                    }) :
                                                                    <tr>
                                                                        <td> Loading ...</td>
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
                            <Footer/>
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
        reports: state.findAllReportReducer.data || [],
        error: state.findAllReportReducer.error,
        isLoading: state.findAllReportReducer.isLoading
    }
}

const mapDispatchToProps = {
    findAllReportAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);