import React, {useEffect} from "react";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {connect} from "react-redux";
import Containers from "../../components/Containers/Container";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import {Row, Col, FormGroup, Input} from "reactstrap";


const RoleList = () => {

    return (
        <div>
            {
                localStorage.getItem("roles") == "MASTER" ?
                    <>
                        <Containers>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Role Menu</h1>
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
                                                                <i className="fas fa-plus-circle"/>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="card-body table-responsive p-0">
                                                        <form>
                                                            <FormGroup row>
                                                                <Col sm={12}>
                                                                    <Input
                                                                        required
                                                                        type="text"
                                                                        name="type"
                                                                        placeholder="input role"/>
                                                                </Col>
                                                            </FormGroup>

                                                            <Row>
                                                                <Col style={{textAlign: "left"}} >
                                                                    <h3>Customer</h3>
                                                                </Col>
                                                                <Col style={{textAlign:"left"}}>
                                                                    <div  className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck1"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck1">
                                                                            Input Customer
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Customer
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <br/>
                                                            <Row>
                                                                <Col style={{textAlign:"left"}}>
                                                                    <h3>Transaction</h3>
                                                                </Col>
                                                                <Col style={{textAlign:"left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Input Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Approval Transaction
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <br/>
                                                            <Row>
                                                                <Col style={{textAlign:"left"}}>
                                                                    <h3>Report</h3>
                                                                </Col>
                                                                <Col style={{textAlign:"left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Report
                                                                        </label>
                                                                    </div>

                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox"
                                                                               value=""
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
            }
            }

                const mapDispatchToProps = {
            }


                export default connect(mapStateToProps, mapDispatchToProps)(RoleList)