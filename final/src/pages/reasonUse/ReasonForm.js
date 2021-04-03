import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {Button, Form, FormGroup, Input, Label, Col, Spinner} from "reactstrap";
import {findAllNeedAction, findNeedByIdAction, saveNeedAction, updateNeedAction} from "../../actions/needAction";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import swal from "sweetalert";

const ReasonForm = ({saveNeedAction, saveNeedType, error, isLoading, needType, findNeedByIdAction, update, updateNeedAction, findAllNeedAction, needs}) => {
    const {id} = useParams()
    const [redirect] = useState(false)
    console.log("handlesubmit", error)

    const [needUsed, setNeedUsed] = useState([])

    useEffect(() => {
        findAllNeedAction()
    }, [findAllNeedAction])

    useEffect(() => {
        setNeedUsed(needs.list)
    }, [needs.list])

    console.log("needUsed", needUsed)

    const [data, setData] = useState({})
    const history = useHistory()

    useEffect(() => {
        if (id) {
            findNeedByIdAction(id)
        }
    }, [id, findNeedByIdAction])

    useEffect(() => {
        if (id && needType) {
            setData({...needType})
        }
    }, [needType])

    useEffect(() => {
        if (saveNeedType) {
            swal("Add Loan Purpose Success", "", "success")
            history.push('/need')
        }
        if (error) {
            swal("Sorry data already exist", '', "error")
        }
        console.log("error", error)
    }, [saveNeedType, history, error])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value.toUpperCase()})
        console.log("handlechange", data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let oke = true
        needUsed.map((e,i)=>{
            if(data.type == e.type){
                oke = false
            }
        })
        if(oke){
            if (id) {
                updateNeedAction(id, data)
            } else {
                saveNeedAction(data)
            }
            swal("Save Success!", "", "success");
            history.push('/need')
        } else {
            swal("Sorry loan purpose is already exist!", "", "error")
        }
    }

    if (redirect === true) {
        return <Redirect to="/need"/>
    }

    return (
        <div>
            {
                localStorage.getItem("master") == "true" ?
                    <>
                        <div>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2" style={{
                                            marginTop: '30px',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <div className="col-sm-11">
                                                <h1 className="m-0 text-dark">Loan Purpose</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row"
                                             style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <div className="col-lg-11" style={{alignContent: "center"}}>
                                                <div className="card">
                                                    <div className="card-body table-responsive p-md-5">
                                                        <div className="col-md-12">
                                                            <div className="form form-container">
                                                                {!isLoading ?
                                                                    <Form onSubmit={(e) => handleSubmit(e)}>
                                                                        <FormGroup row>
                                                                            <Label htmlFor="type" sm={3}
                                                                                   style={{textAlign: "left"}}>Loan Purpose</Label>
                                                                            <Col sm={12}>
                                                                                <Input
                                                                                    required
                                                                                    onChange={handleChange}
                                                                                    value={data?.type || ''}
                                                                                    type="text"
                                                                                    name="type"
                                                                                    placeholder="loan purpose"/>
                                                                            </Col>
                                                                        </FormGroup>
                                                                        <FormGroup check >
                                                                            {/*<Col sm={{size: 10, offset: 2}}>*/}
                                                                            <div className="buttonForm">
                                                                                <Button style={{background: "#e42256", marginRight:"0.2vw"}}>
                                                                                    <FontAwesomeIcon icon={faSave} style={{marginRight:"0.5vw"}}/>
                                                                                    Submit
                                                                                </Button>
                                                                                <Button href="/need"
                                                                                        style={{background: "#e42256"}}>
                                                                                    <FontAwesomeIcon
                                                                                        icon={faArrowLeft} style={{marginRight:"0.5vw"}}/>
                                                                                    Cancel
                                                                                </Button>
                                                                            </div>
                                                                            {/*</Col>*/}
                                                                        </FormGroup>

                                                                    </Form> :
                                                                    <div className="spinner">
                                                                        <Spinner style={{
                                                                            width: '5rem',
                                                                            height: '5rem',
                                                                            color: "#e42256"
                                                                        }}/>{' '}
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        saveNeedType: state.saveNeedReducer.data,
        error: state.saveNeedReducer.error,
        isLoading: state.saveNeedReducer.isLoading || state.findNeedTypeByIdReducer.isLoading,
        needType: state.findNeedTypeByIdReducer.data,
        update: state.updateNeedTypeReducer.data,
        needs: state.findAllNeedReducer.data || []
    }
}

const mapDispatchToProps = {
    saveNeedAction,
    updateNeedAction,
    findNeedByIdAction,
    findAllNeedAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ReasonForm)