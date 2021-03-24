import React from 'react'
import {Button, Col, Container, Row} from "reactstrap";
import Containers from "../../components/Containers/Container";
import undraw_Notify from "../../assets/images/undraw_Notify.svg";

const Error = () => {
    return (

        <div>
            {
                <Container fluid style={{width: "100%"}}>

                    <Row>
                        <Col>
                            <div>
                                <div className="d-flex justify-content-center mb-3">
                                    <h1 style={{
                                        fontSize: "3vw",
                                        color: "#e42556",
                                        margin: "3%",
                                        textAlign: "center"
                                    }}>You Can't Access This Page</h1>
                                </div>
                                <hr/>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                            <div>
                                <div>
                                    <img src={undraw_Notify} alt=""
                                         className="img-fluid d-none d-md-block"/>
                                    <br/>

                                </div>
                            </div>
                    </Row>


                </Container>
                }
                </div>
                )
                }

                export default Error
