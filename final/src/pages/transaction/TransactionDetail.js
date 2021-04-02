import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useParams, useHistory, Redirect} from 'react-router-dom'
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle, faCross, faSave, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format"
import {Row, Col, Button} from "reactstrap";
import {
    findByIdApprovalAction,
    findByIdApprovalSubmitterAction,
    saveApprovalAction
} from "../../actions/approvalAction";
import Error from "../Error";
import swal from "sweetalert";
import Footer from "../../components/dashboard/Footer";
import TableScrollbar from "react-table-scrollbar";


function TransactionDetail({findByIdDispatch, transaction, isLoading, saveApprovalAction, savedApprove, findByIdApprovalSubmitterAction, transactionSubmitter, error }) {

    const {id} = useParams()
    const [redirect] = useState(false)
    const [data, setData] = useState({})
    const [approval, setApproval] = useState({
        id: null,
        approve: null
    })

    const history = useHistory()

    // const handleApproval = () => {
    //     saveApprovalAction({
    //         transaction: data?.transaction?.id,
    //         approve: true
    //     })
    //     history.push('/report')
    //     // console.log("handle", )
    // }

    const handleApproval = () => {
        setApproval({
            id: data?.transaction?.id,
            approve: true
        })

        saveApprovalAction({
            id: data.id,
            approve: {
                approve: true
            }
        })
        console.log(approval)
        history.push('/report')
        swal("Approve!", "Transaction has been approved!", "success");

    }

    const handleReject = () => {
        setApproval({
            id: data?.transaction?.id,
            approve: false
        })

        saveApprovalAction({
            id: data.id,
            approve: {
                approve: false
            }
        })
        console.log(approval)
        history.push('/report')
        swal("Reject!", "Transaction has been rejected!", "success");
    }
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     saveApprovalAction(approval)
    //
    //     console.log("handleSubmit", approval)
    // }

    useEffect(() => {
        if (savedApprove) {
            history.push('/report')
            console.log("useeffect", savedApprove)
        }
    }, [savedApprove])

    useEffect(() => {
        if (id && transaction) {
            console.log("ini data detail", transaction)
            setData({...transaction})
        } else if (id && transactionSubmitter) {
            console.log("ini data detail submiter", transactionSubmitter)
            setData({...transactionSubmitter})
        }
    }, [transaction, transactionSubmitter])

    useEffect(() => {
        if (id) {
            if (localStorage.getItem('readAllTransaction') == "true") {
                findByIdDispatch(id)
                console.log("readALL", findByIdDispatch)
            } else if (localStorage.getItem('inputTransaction') == "true"){
                findByIdApprovalSubmitterAction(id)
                console.log("inputTransaction", findByIdApprovalSubmitterAction)
            }
        }
    }, [id, findByIdDispatch, findByIdApprovalSubmitterAction])

    if (redirect === true) {
        return <Redirect to="/report"/>
    }

    return (
        <div>
            {
                localStorage.getItem("inputTransaction") == "true" || localStorage.getItem("readAllTransaction") == "true" ?
                    <>
                        <div>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Detail Transaction</h1>
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
                                                        {/*<h3 className="card-title">Detail Customer</h3>*/}
                                                        <div className="card-tools">
                                                            {/*<a href="/transaction/form" className="btn btn-tool btn-sm">*/}
                                                            {/*    <i className="fas fa-pencil-alt"/>*/}
                                                            {/*</a>*/}
                                                            {localStorage.getItem("inputTransaction") == "true" ?
                                                            <a href="/staff/transaction" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-arrow-left"/>
                                                            </a>:
                                                                <a href="/transaction" className="btn btn-tool btn-sm">
                                                                    <i className="fas fa-arrow-left"/>
                                                                </a>}
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-md-5">

                                                        <TableScrollbar rows={10}>
                                                        <table className="table table-borderless table-valign-middle">

                                                            <tbody>
                                                            <Row style={{width:"100%"}}>
                                                                <Col style={{width:"20%"}}>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold", width:"50%"}}>Full Name</td>
                                                                        <td>{data?.transaction?.customer?.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Number Identity</td>
                                                                        <td>{data?.transaction?.customer?.idNumber}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Email</td>
                                                                        <td>{data?.transaction?.customer?.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Address</td>
                                                                        <td>{data?.transaction?.customer?.address}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Submitter</td>
                                                                        <td>{data?.transaction?.customer?.submitter}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Employee Type</td>
                                                                        <td>{data?.transaction?.customer?.employeeType}</td>
                                                                    </tr>
                                                                    {data?.transaction?.customer?.employeeType == "CONTRACT"
                                                                    &&
                                                                    <>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Contract Duration</td>
                                                                            <td>{data?.transaction?.customer?.contractLength}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Contract Start</td>
                                                                            <td>{data?.transaction?.customer?.contractStart}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Contract End</td>
                                                                            <td>{data?.transaction?.customer?.contractEnd}</td>
                                                                        </tr>
                                                                    </>}
                                                                </Col>
                                                                <Col>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold", width:"50%"}}>Income</td>
                                                                        <td><NumberFormat value={data?.transaction?.income}
                                                                            displayType={'text'}
                                                                            thousandSeparator={true}
                                                                            prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Income</td>
                                                                        <td><NumberFormat value={data?.transaction?.income}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Outcome</td>
                                                                        <td><NumberFormat value={data?.transaction?.outcome}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Loan Amount</td>
                                                                        <td><NumberFormat value={data?.transaction?.loan}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Tenor</td>
                                                                        <td>{data?.transaction?.tenor} month</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Interest Rate</td>
                                                                        <td>{data?.transaction?.interestRate} %</td>
                                                                    </tr>
                                                                </Col>
                                                                <Col>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold", width:"50%"}}>Principal</td>
                                                                        <td><NumberFormat value={data?.transaction?.mainLoan}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Interest</td>
                                                                        <td><NumberFormat value={data?.transaction?.interest}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Installment</td>
                                                                        <td><NumberFormat value={data?.transaction?.installment}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Total Installment</td>
                                                                        <td><NumberFormat value={data?.transaction?.installmentTotal}
                                                                                          displayType={'text'}
                                                                                          thousandSeparator={true}
                                                                                          prefix={'Rp '}/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Loan Purpose</td>
                                                                        <td>{data?.transaction?.needType.type}</td>
                                                                    </tr>

                                                                    {localStorage.getItem("approveTransaction") == "true" &&
                                                                    <>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Credit Ratio</td>
                                                                            <td>{data?.transaction?.creditRatio} %</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Finance Criteria</td>
                                                                            <td>{data?.transaction?.financeCriteria ?
                                                                                "PASS" : "NOT PASS"
                                                                            }</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{fontWeight:"bold"}}>Employee Criteria</td>
                                                                            <td>{data?.transaction?.employeeCriteria ?
                                                                                "PASS" : "NOT PASS"
                                                                            }</td>
                                                                        </tr>
                                                                    </>}
                                                                    <tr>
                                                                        <td style={{fontWeight:"bold"}}>Notes</td>
                                                                        <td>{data?.transaction?.notes}</td>
                                                                    </tr>

                                                                </Col>

                                                            </Row>

                                                            {localStorage.getItem("approveTransaction") == "true" &&
                                                            <tr>
                                                                <div className="buttonForm">
                                                                <td>
                                                                    <Button style={{background: "#e42256"}}
                                                                            onClick={handleApproval}>
                                                                        <FontAwesomeIcon icon={faCheckCircle}/>
                                                                        Approve
                                                                    </Button>
                                                                </td>
                                                                <td>
                                                                    <Button style={{background: "#e42256"}}
                                                                            onClick={handleReject}>
                                                                        <FontAwesomeIcon icon={faTimesCircle}/>
                                                                        Reject
                                                                    </Button>
                                                                </td>
                                                                </div>
                                                            </tr>}

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
                        </div>
                    </>
                    :
                    <div>
                        <Error/>
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.findApprovalByIdReducer.isLoading || state.saveApprovalReducer.isLoading || state.findApprovalSubmitterByIdReducer.isLoading,
        transaction: state.findApprovalByIdReducer.data,
        savedApprove: state.saveApprovalReducer.data,
        transactionSubmitter: state.findApprovalSubmitterByIdReducer.data,
        error: state.findApprovalByIdReducer.error || state.saveApprovalReducer.error || state.findApprovalSubmitterByIdReducer.error,
    }
}

const mapDispatchToProps = {
    findByIdDispatch: findByIdApprovalAction, findByIdApprovalSubmitterAction,
    saveApprovalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetail)