import React, {useEffect, useState} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import gambar from "../../assets/images/undraw_authentication_fsn5.svg"
import {
    faEnvelope,
    faKey, faLock, faLockOpen, faServer,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../account/login.css"
import {Input, Label, FormGroup, Button, Container, Form, Col} from "reactstrap";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import swal from "sweetalert";
import Error from "../Error";

const EditPassword = ({isLoading}) => {

    return (
        <div>
            {
                localStorage.getItem("roles") == "STAFF" ?
                    <>
                        <div>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">

                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-header border-0">
                                                        {/*<h3 className="card-title">Detail Customer</h3>*/}
                                                        <div className="card-tools">
                                                            <a href="/dashboard" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-arrow-left"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <div className="col-md-12">
                                                            <div className="form form-container">
                                                                <div className="row align-items-center">

                                                                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                                                                        <img src={gambar} alt=""
                                                                             className="img-fluid mb-3 d-none d-md-block"/>
                                                                    </div>

                                                                    <div className="col-md-7 col-lg-6 ml-auto">

                                                                        <h1 style={{
                                                                            color: "#e42256",
                                                                            fontSize: "55px"
                                                                        }}>Change Password</h1>
                                                                        {!isLoading ?
                                                                            <Form>
                                                                                <div className="row">
                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faLock}/>
                                        </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            type="password"
                                                                                            name="password"
                                                                                            placeholder="password"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>


                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            type="password"
                                                                                            name="newPassword"
                                                                                            placeholder="new password"
                                                                                            className="form-control bg-white border-left-0 border-md"/>
                                                                                    </div>
                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faLockOpen}/>
                                        </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            type="password"
                                                                                            name="confirmPassword"
                                                                                            placeholder="confirm password"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>


                                                                                    <div
                                                                                        className="form-group col-lg-12 mx-auto mb-0">
                                                                                        <Button
                                                                                            style={{background: "#e42256"}}
                                                                                            block>
                                            <span className="font-weight-bold"
                                                  style={{color: "#ffff"}}>CHANGE PASSWORD</span>
                                                                                        </Button>
                                                                                    </div>

                                                                                </div>
                                                                            </Form>
                                                                            :
                                                                            <div>Loading...</div>
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
                            </div>
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
export default EditPassword;