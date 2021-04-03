import React, {useEffect, useState} from "react";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {connect} from "react-redux";
import {Redirect, useHistory, useParams} from 'react-router-dom'
import Containers from "../../components/Containers/Container";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import {Row, Col, FormGroup, Input, Label, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {
    findAllRoleAction,
    findRoleByIdAction,
    removeByIdRoleAction,
    saveRoleAction,
    updateRoleAction
} from "../../actions/roleAction";

const RoleMenu = ({saveRoleAction, saveRole, error, isLoading, role, roles, findRoleByIdAction, updateRoleAction, findAllRoleAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)
    const [roleUsed, setRoleUsed] = useState([])

    useEffect(() => {
        findAllRoleAction()
    }, [findAllRoleAction])

    useEffect(() => {
        setRoleUsed(roles.list)
    }, [roles.list])

    console.log("list role",roleUsed)

    const [data, setData] = useState({
        name: "",
        inputCustomer: false,
        readAllCustomer: false,
        inputTransaction: false,
        readAllTransaction: false,
        approveTransaction: false,
        readAllReport: false,
        readAllReportByTransaction: false
    })
    const history = useHistory()

    useEffect(() => {
        if (id) {
            findRoleByIdAction(id)
        }
    }, [id, findRoleByIdAction])

    useEffect(() => {
        if (id && role) {
            setData({...role})
        }
    }, role)

    useEffect(() => {
        if (saveRole) {
            swal("Add Loan Purpose Success", "", "success")
            history.push('/role')
        }
    }, [saveRole, history, error])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value.toUpperCase()})
    }

    const handleChecked = (e) => {
        let name = e.target.name
        let value = e.target.checked
        setData({...data, [name]: value})
        roleUsed.map((e,i)=>{
            if(data.name == e.name){
                setData({...data, name: ""})
                swal("Sorry name is already exist", '', "error")
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.inputCustomer || data.readAllCustomer || data.inputTransaction || data.approveTransaction || data.readAllReportByTransaction || data.readAllReport || data.readAllTransaction){
            if (id) {
                updateRoleAction(id, data)
            } else {
                saveRoleAction(data)
            }
            swal("Save Success!", "", "success");
            history.push('/role')
        } else {
            swal("Please select role access!", "", "error")
        }
    }

    if (redirect === true) {
        return <Redirect to="/role"/>
    }

    return (
        <div>
            {
                localStorage.getItem("master") == "true" ?
                    <>
                        <Containers>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <div className="col-sm-11">
                                                <h1 className="m-0 text-dark">Management Role</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <div className="col-lg-11" >

                                                <div className="card">
                                                    <div className="card-header border-0">
                                                    </div>

                                                    <div className="card-body table-responsive  p-md-5">
                                                        <form onSubmit={handleSubmit}>
                                                            <FormGroup row>
                                                                <Label htmlFor="type" sm={3}
                                                                       style={{textAlign: "left"}}>Role Name
                                                                {/*<span style={{color: "red"}}> *</span>*/}
                                                                </Label>

                                                                {/*<Col>*/}
                                                                {/*    <h6 style={{textAlign: "left", color: "grey"}}>Role*/}
                                                                {/*        name*/}
                                                                {/*        <span style={{color: "red"}}> *</span>*/}
                                                                {/*    </h6>*/}
                                                                {/*</Col>*/}
                                                                <Col sm={12} style={{textAlign: "left"}}>
                                                                    <Input
                                                                        required
                                                                        onChange={handleChange}
                                                                        value={data?.name}
                                                                        type="text"
                                                                        name="name"
                                                                        placeholder="role name"/>
                                                                </Col>
                                                            </FormGroup><br/>

                                                            <Row>
                                                                <Col>

                                                                    <h6>Access :</h6>
                                                                    <br/>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h6>Customer</h6>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="inputCustomer"
                                                                               onChange={handleChecked}
                                                                               checked={data.inputCustomer}
                                                                               value={data.inputCustomer}
                                                                               id="defaultCheck1"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck1">
                                                                            Input Customer
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllCustomer"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllCustomer}
                                                                               checked={data?.readAllCustomer}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Customer
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <hr/>
                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h6>Transaction</h6>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="inputTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.inputTransaction}
                                                                               checked={data?.inputTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Input Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllTransaction}
                                                                               checked={data?.readAllTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="approveTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.approveTransaction}
                                                                               checked={data?.approveTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Approval Transaction
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <hr/>
                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h6>Report</h6>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllReport"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllReport}
                                                                               checked={data?.readAllReport}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Report
                                                                        </label>
                                                                    </div>

                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllReportByTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllReportByTransaction}
                                                                               checked={data?.readAllReportByTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read Report By Submitter
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <br/>

                                                            <Row>
                                                                <Col sm={{size: 10, offset: 2}}
                                                                     style={{textAlign: "right"}}>
                                                                    <Button style={{background: "#e42256"}}>
                                                                        <FontAwesomeIcon icon={faSave} style={{marginRight:"0.5vw"}}/>
                                                                         Submit
                                                                    </Button> {' '}
                                                                    <Button href="/role"
                                                                            style={{background: "#e42256"}}>
                                                                        <FontAwesomeIcon
                                                                            icon={faArrowLeft} style={{marginRight:"0.5vw"}}/>
                                                                         Cancel
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Footer/>*/}

                        </Containers>
                        <Footer/>
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
        saveRole: state.saveRoleReducer.data,
        error: state.saveRoleReducer.error,
        isLoading: state.saveRoleReducer.isLoading || state.findRoleByIdReducer.isLoading,
        role: state.findRoleByIdReducer.data,
        roles: state.findAllRoleReducer.data || []
    }
}

const mapDispatchToProps = {
    saveRoleAction,
    findRoleByIdAction,
    removeByIdRoleAction,
    updateRoleAction,
    findAllRoleAction
}


export default connect(mapStateToProps, mapDispatchToProps)(RoleMenu)