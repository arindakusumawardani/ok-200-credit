import Containers from '../../components/Containers/Container'
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import Footer from "../../components/dashboard/Footer";
import {findAllReportAction} from "../../actions/reportAction";
import ReportRow from "./ReportRow";
import TableScrollbar from 'react-table-scrollbar';
import Error from "../Error";
import {Button, ButtonGroup, Spinner} from "reactstrap";
import {PaginationButton} from "../../components/Buttons";
import {findReportByApprovedAction, findReportByRejectedAction} from "../../actions/approvalAction";

function ReportList({
    isLoading, reports, error,
                        findAllReportAction,  size, total,
                        currentPage, reportApproved, reportRejected,
                        findReportByRejectedAction, findReportByApprovedAction
                    }) {

    const [report, setReport] = useState([])
    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)

    const totalPage = Math.ceil(total/size)

    useEffect(() => {
        onReload()
    }, [])

    useEffect(() => {
        onReload()
    }, [pageParam, sizeParam])

    useEffect(() => {
        setReport(reports)
    }, [reports])

    useEffect(() => {
        setReport(reportApproved)
    }, [reportApproved])

    useEffect(() => {
        setReport(reportRejected)
    }, [reportRejected])

    const onReload = () => {
        findAllReportAction({page: pageParam, size: sizeParam});
    }

    const handleLimit = (limit) => {
        setSizeParam(limit)
        setPageParam(0)
    }

    const handleApproved = () =>{
        findReportByApprovedAction({page: pageParam, size: sizeParam})
    }
    const handleAll = () =>{
        onReload()
    }
    const handleRejected = () =>{
        findReportByRejectedAction({page: pageParam, size: sizeParam})
    }


    return (
        <div>
            {
                localStorage.getItem("readAllReport") == "true" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">All Report</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div className="card">
                                                    <div className="card-header border-0" >
                                                        <div className="card-tools" >
                                                            {/*<ButtonGroup>*/}
                                                            {/*    <Button onClick={handleApproved}>Rejected</Button>*/}
                                                            {/*    <Button onClick={handleAll}>All</Button>*/}
                                                            {/*    <Button onClick={handleRejected}>Approved</Button>*/}
                                                            {/*</ButtonGroup>*/}
                                                            <a href="/report/download" className="btn btn-tool btn-sm" >
                                                                <i className="fas fa-download"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={11}>
                                                        <table className="table table-striped table-bordered table-align-middle table-head-fixed text-nowrap">
                                                            <thead style={{background:"#FCE051"}}>
                                                            <tr >
                                                                <th colSpan="6" style={{textAlign: "center", backgroundColor:"#F6FDFE"}}> Customer Data</th>
                                                                <th colSpan="9" style={{textAlign: "center", backgroundColor:"#FFFFFF"}}>Transaction</th>
                                                                <th colSpan="6" style={{textAlign: "center", backgroundColor:"#F6FDFE"}}>Approved</th>
                                                            </tr>
                                                            <tr style={{textAlign: "center"}}>
                                                                <th>No</th>
                                                                <th>Full Name</th>
                                                                <th>Email</th>
                                                                <th>Number Identity</th>
                                                                <th>Address</th>
                                                                <th>Employee Type</th>
                                                                <th>Income</th>
                                                                <th>Outcome</th>
                                                                <th>Loan Amount</th>
                                                                <th>Interest Rate</th>
                                                                <th>Tenor</th>
                                                                <th>Principal</th>
                                                                <th>Interest</th>
                                                                <th>Installment</th>
                                                                <th>Total Installment</th>
                                                                <th>Credit Ratio</th>
                                                                <th>Finance Criteria</th>
                                                                <th>Employee Criteria</th>
                                                                <th>Status</th>
                                                                <th>Submitted Date</th>
                                                                <th>Approved Date</th>
                                                            </tr>
                                                            </thead>

                                                            <tbody>
                                                            {
                                                                ! isLoading ?
                                                                    report?.map((e,i) => {
                                                                        return (
                                                                            <ReportRow key={i} data={e}
                                                                            number={(pageParam * sizeParam) + 1 + i}/>
                                                                        )
                                                                    }) :
                                                                    // <tr>
                                                                        <div className="spinner">
                                                                            <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
                                                                        </div>
                                                                    // </tr>

                                                            }
                                                            </tbody>

                                                        </table>
                                                        </TableScrollbar>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <PaginationButton
                                            currentPage = {currentPage}
                                            setPage={setPageParam}
                                            totalPage={totalPage}
                                            handleLimit={handleLimit}
                                            size={sizeParam}
                                        />
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
        reportApproved: state.findReportByApprovedReducer.data,
        reportRejected: state.findReportByRejectedReducer.data,
        error: state.findAllReportReducer.error,
        isLoading: state.findAllReportReducer.isLoading,
        size: state.findAllReportReducer.pagination.size,
        total: state.findAllReportReducer.pagination.total,
        currentPage: state.findAllReportReducer.pagination.page
    }
}

const mapDispatchToProps = {
    findAllReportAction,
    findReportByRejectedAction,
    findReportByApprovedAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);