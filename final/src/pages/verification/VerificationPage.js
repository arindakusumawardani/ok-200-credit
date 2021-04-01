import React from 'react'
import gambar from "../../assets/images/undraw_authentication_fsn5.svg";
import {Button} from "reactstrap";

const VerificationPage = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 pr-lg-5 mb-md-0">
                    <div>
                        <img src={gambar} alt=""
                             className="img-fluid d-none d-md-block"/>
                    </div>
                </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                    <h1 style={{color: "#e42256", fontSize: "55px"}}>Your account is verified!</h1><br/>
                    <h4 style={{color: "#e42256"}}>Try to sign in</h4><br/>
                    {/*<h4 style={{color: "#e42256"}}>Please, back to home!</h4><br/>*/}
                    <Button href="/"
                            style={{background: "#e42256"}}>
                        SIGN IN
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage