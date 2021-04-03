import React, {useEffect, useState} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import undraw_Updated_resume_re_q1or from "../../assets/images/undraw_Updated_resume_re_q1or.svg"
import {
    faArrowLeft,
    faEnvelope, faKey, faSave,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./login.css"
import {Spinner, Button, Form, Col, Label, Input, FormGroup, Row} from "reactstrap";
import {findAccountByIdAction, saveAccountAction} from "../../actions/signupAction";
import {connect} from "react-redux";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import swal from "sweetalert";
import Error from "../Error";
import {findAllRoleAction} from "../../actions/roleAction";
import Footer from "../../components/dashboard/Footer";

const SignUp = ({saveDispatch, error, saveAccount, account, isLoading, findAccountByIdAction, roles, findAllRoleAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)

    const [photo, setPhoto] = useState({
        profilePicture: {}
    })
    const [data, setData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        profilePicture: "",
        role: ""
    })
    const history = useHistory()

    const onReload = () => {
        findAllRoleAction()
    }
    useEffect(onReload, [findAllRoleAction])

    useEffect(() => {
        findAllRoleAction()
    }, [findAllRoleAction])

    useEffect(() => {
        if (id) {
            findAccountByIdAction(id)
        }
        console.log("")
    }, [id, findAccountByIdAction])

    useEffect(() => {
        if (id && account) {
            setData({...account})
        }
    }, [account])
    console.log("ini id", id)

    useEffect(() => {
        if (saveAccount) {
            swal("Register Success", "", "success")
            history.push('/master')
        }
        if (error) {
            swal("Register error", `${error.message}`, "error")
        }
    }, [saveAccount, history, error])

    const handlePhoto = async (e) => {
        let name = e.target.name
        let value = e.target.files[0]
        setPhoto({...photo, [name]: value})

        const formData = new FormData()
        formData.append("file", value)
        formData.append("upload_preset", "ve2u0qv8")

        const response = await fetch("https://api.cloudinary.com/v1_1/nielnaga/image/upload", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        }).then(res => res.json())
            .then(res => {
                console.log(res.url)
                setData({
                    ...data,
                    [name]: res.url
                })
            })
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})
    }

    const handleRoles = (e) => {
        setData({
            ...data,
            role: e
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        saveDispatch(data)
        swal("Save Success!", "", "success");

        console.log("submit" , data)
    }

    if (redirect === true) {
        return <Redirect to="/master"/>
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
                                                <h1 className="m-0 text-dark">Account</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <div className="col-lg-11">
                                                <div className="card">
                                                    <div className="card-body table-responsive p-md-5">
                                                        <div className="col-md-12">
                                                            <div className="form form-container">

                                                                        {!isLoading ?
                                                                            <Form onSubmit={handleSubmit}>
                                                                                <div className="row">

                                                                                    <Label htmlFor="type" sm={3}
                                                                                           style={{textAlign: "left"}}>Full Name</Label>
                                                                                    <Col sm={12} style={{marginBottom:"1vw"}}>
                                                                                        <Input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data?.fullName || ""}
                                                                                            type="text"
                                                                                            name="fullName"
                                                                                            placeholder="full name"/>
                                                                                    </Col>

                                                                                    <Label htmlFor="type" sm={3}
                                                                                           style={{textAlign: "left"}}>Username</Label>
                                                                                    <Col sm={12} style={{marginBottom:"1vw"}}>
                                                                                        <Input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data.username || ""}
                                                                                            type="text"
                                                                                            name="username"
                                                                                            placeholder="username"
                                                                                            minLength={4}
                                                                                            maxLength={10}/>
                                                                                    </Col>

                                                                                    <Label htmlFor="type" sm={3}
                                                                                           style={{textAlign: "left"}}>Email</Label>
                                                                                    <Col sm={12} style={{marginBottom:"1vw"}}>
                                                                                        <Input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data.email || ""}
                                                                                            type="email"
                                                                                            name="email"
                                                                                            placeholder="email address"/>
                                                                                    </Col>

                                                                                    {
                                                                                        window.location.pathname != "/register" ?
<>
                                                                                            <Label htmlFor="type" sm={3}
                                                                                                   style={{textAlign: "left"}}>New Password</Label>
                                                                                            <Col sm={12} style={{marginBottom:"1vw"}}>
                                                                                                <Input
                                                                                                    required
                                                                                                    onChange={handleChange}
                                                                                                    value={data.password || ""}
                                                                                                    type="password"
                                                                                                    name="password"
                                                                                                    placeholder="new password"/>
                                                                                            </Col>
                                                                                            </>

                                                                                            // <div
                                                                                            //     className="input-group col-lg-12 mb-4">
                                                                                            //     <div
                                                                                            //         className="input-group-prepend">
                                                                                            // <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                            //     <FontAwesomeIcon icon={faKey}/>
                                                                                            // </span>
                                                                                            //     </div>
                                                                                            //     <input
                                                                                            //         required
                                                                                            //         onChange={handleChange}
                                                                                            //         value={data.password || ""}
                                                                                            //         type="password"
                                                                                            //         name="password"
                                                                                            //         placeholder="Input new password"
                                                                                            //         className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                            // </div>
: <> </>
                                                                                    }

                                                                                    <Label htmlFor="type" sm={3}
                                                                                           style={{textAlign: "left"}}>Role</Label>
                                                                                    <Col sm={12} style={{marginBottom:"1vw"}}>
                                                                                        <select
                                                                                            style={{width:"100%", height:"calc(1.5em + .75rem + 10px)",
                                                                                                borderRadius:"0.2vw", border: "1px solid #ced4da"}}
                                                                                            onChange={e => setData({
                                                                                                ...data,
                                                                                                role: e.target.value
                                                                                            })}>
                                                                                            <option selected disabled hidden>Choose role
                                                                                            </option>
                                                                                            {roles?.list?.map((e, i) => (
                                                                                                <option key={i} value={e.name}
                                                                                                        data={e}
                                                                                                        selected={e.id == data?.id || false}>{e.name}</option>
                                                                                            ))}
                                                                                        </select>
                                                                                    </Col>
                                                                                    </div>

                                                                                    <Row>
                                                                                        <Col sm={{size: 10, offset: 2}}
                                                                                             style={{textAlign: "right"}}>
                                                                                            <Button style={{background: "#e42256"}}>
                                                                                                <FontAwesomeIcon icon={faSave} style={{marginRight:"0.5vw"}}/>
                                                                                                Submit
                                                                                            </Button> {' '}
                                                                                            <Button href="/master"
                                                                                                    style={{background: "#e42256"}}>
                                                                                                <FontAwesomeIcon
                                                                                                    icon={faArrowLeft} style={{marginRight:"0.5vw"}}/>
                                                                                                Cancel
                                                                                            </Button>
                                                                                        </Col>
                                                                                    </Row>
                                                                            </Form>
                                                                            :
                                                                            <div className="spinner">
                                                                                <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
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
                            <Footer/>

                        </div>
                    </>
                    :
                    <div>
                        <Error/>
                    </div>
            }
        </div>

    );

}
const mapStateToProps = (state) => {
    return {
        account: state.findAccountByIdReducer.data,
        saveAccount: state.saveAccountReducer.data,
        error: state.saveAccountReducer.error,
        isLoading: state.findAccountByIdReducer.isLoading || state.saveAccountReducer.isLoading,
        update: state.updateAccountReducer,
        roles: state.findAllRoleReducer.data
    }
}

const mapDispatchToProps = {
    saveDispatch: saveAccountAction,
    findAccountByIdAction,
    findAllRoleAction
}

export default connect(mapStateToProps,
    mapDispatchToProps)(SignUp);