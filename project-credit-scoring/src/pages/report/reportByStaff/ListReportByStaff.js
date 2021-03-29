import Containers from '../../../components/Containers/Container'
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import TableScrollbar from 'react-table-scrollbar';
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import Row from "./Row";
import Footer from "../../../components/dashboard/Footer";
import {findAllReportAction} from "../../../actions/reportAction";
import Error from "../../Error";
import {Button, ButtonGroup, Spinner} from "reactstrap";
import {PaginationButton} from "../../../components/Buttons";

function ReportList({
                        isLoading, reports, error, findAllReportAction, size, total, currentPage
                    }) {

    const [report, setReport] = useState([])

    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)

    const totalPage = Math.ceil(total/size)

    useEffect(() => {
        onReload()
    }, [pageParam, sizeParam])

    useEffect(() => {
        onReload()
    }, [])

    useEffect(() => {
        if(report) {
            setReport(reports)
        }
    }, [reports])

    const onReload = () => {
        findAllReportAction({page: pageParam, size: sizeParam});
        console.log("ini data", reports)
    }

    useEffect(onReload, [findAllReportAction, pageParam, sizeParam])

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
                                                        <h5>Limit</h5>
                                                        <ButtonGroup size="sm">
                                                            <Button onClick={() => {setSizeParam(1)}}>1</Button>
                                                            <Button onClick={() => {setSizeParam(2)}}>2</Button>
                                                            <Button onClick={() => {setSizeParam(3)}}>3</Button>
                                                        </ButtonGroup>

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
                                                                    <th>Id Card</th>
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
                                                                    <th>Approval</th>
                                                                    <th>Submitted Date</th>
                                                                    <th>Approved Date</th>
                                                                </tr>
                                                                </thead>

                                                                <tbody>
                                                                {
                                                                    ! isLoading ?
                                                                        report.map((e,i) => {
                                                                            return (
                                                                                <Row key={i} data={e}
                                                                                           number={(pageParam * sizeParam) + 1 + i}/>
                                                                            )
                                                                        }) :
                                                                        <tr>
                                                                            <div>
                                                                                <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
                                                                            </div>
                                                                        </tr>

                                                                }
                                                                </tbody>

                                                            </table>
                                                        </TableScrollbar>
                                                        <br></br>
                                                        <PaginationButton
                                                            currentPage = {currentPage}
                                                            setPage={setPageParam}
                                                            totalPage={totalPage}
                                                        />
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
        reports: state.findAllReportByStaff.data || [],
        error: state.findAllReportByStaff.error,
        isLoading: state.findAllReportByStaff.isLoading,
        size: state.findAllReportByStaff.pagination.size,
        total: state.findAllReportByStaff.pagination.total,
        currentPage: state.findAllReportByStaff.pagination.page
    }
}

const mapDispatchToProps = {
    findAllReportAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);