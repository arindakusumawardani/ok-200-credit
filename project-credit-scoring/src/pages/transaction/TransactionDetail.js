import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useParams, useHistory, Redirect} from 'react-router-dom'
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle, faCross, faSave, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format"
import {Button} from "reactstrap";
import {findByIdApprovalAction, saveApprovalAction} from "../../actions/approvalAction";
import Error from "../Error";
import swal from "sweetalert";


function TransactionDetail({findByIdDispatch, transaction, isLoading, saveApprovalAction, savedApprove}) {

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

            setData({...transaction})
        }
        console.log("ini data", transaction)
    }, [transaction])

    useEffect(() => {
        if (id) {
            console.log("ID",id)
            findByIdDispatch(id)
        }
    }, [id, findByIdDispatch])

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

                                                            <a href="/approval/staff" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-arrow-left"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-striped table-valign-middle">

                                                            <tbody style={{textAlign: "left"}}>

                                                            <tr>
                                                                <td>Name</td>
                                                                <td>{data?.transaction?.customer?.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Employee Type</td>
                                                                <td>{data?.transaction?.customer?.employeeType}</td>
                                                            </tr>
                                                            {data?.transaction?.customer?.employeeType == "CONTRACT"
                                                            &&
                                                            <>
                                                                <tr>
                                                                    <td>Contract Start</td>
                                                                    <td>{data?.transaction?.customer?.contractStart}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Contract Length</td>
                                                                    <td>{data?.transaction?.customer?.contractLength}</td>
                                                                </tr>
                                                            </>}
                                                            <tr>
                                                                <td>Income</td>
                                                                <td><NumberFormat value={data?.transaction?.income}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Outcome</td>
                                                                <td><NumberFormat value={data?.transaction?.outcome}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Loan</td>
                                                                <td><NumberFormat value={data?.transaction?.loan}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tenor</td>
                                                                <td>{data?.transaction?.tenor} month</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Interest Rate</td>
                                                                <td>{data?.transaction?.interestRate} %</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Main Loan</td>
                                                                <td><NumberFormat value={data?.transaction?.mainLoan}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Interest</td>
                                                                <td><NumberFormat value={data?.transaction?.interest}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Installment</td>
                                                                <td><NumberFormat value={data?.transaction?.installment}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Installment Total</td>
                                                                <td><NumberFormat value={data?.transaction?.installmentTotal}
                                                                                  displayType={'text'}
                                                                                  thousandSeparator={true}
                                                                                  prefix={'Rp '}/></td>
                                                            </tr>
                                                            {localStorage.getItem("approveTransaction") == "true" &&
                                                                <>
                                                                    {console.log("dataaa masuk", data?.transaction)}
                                                            <tr>
                                                                <td>Credit ratio</td>
                                                                <td>{data?.transaction?.creditRatio} %</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Finance Criteria</td>
                                                                <td>{data?.transaction?.financeCriteria ?
                                                                    "True" : "False"
                                                                }</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Employee Criteria</td>
                                                                <td>{data?.transaction?.employeeCriteria ?
                                                                    "True" : "False"
                                                                }</td>
                                                            </tr>
                                                            </>}
                                                            <tr>
                                                                <td>Notes</td>
                                                                <td>{data?.transaction?.notes}</td>
                                                            </tr>
                                                            {localStorage.getItem("approveTransaction") == "true" &&
                                                            <tr>
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
                                                            </tr>}

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Footer/>*/}
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
        isLoading: state.findApprovalByIdReducer || state.saveApprovalReducer.loading,
        transaction: state.findApprovalByIdReducer.data,
        savedApprove: state.saveApprovalReducer.data
    }
}

const mapDispatchToProps = {
    findByIdDispatch: findByIdApprovalAction,
    saveApprovalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetail)