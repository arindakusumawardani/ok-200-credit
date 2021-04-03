import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {findAllTotalAction} from "../../actions/totalAction";
import Containers from '../../components/Containers/Container'
import {Card} from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck';

function Content({
                     findAllTotalAction,
                     error,
                     isLoading,
                     dashboard
                 }) {

    const [data, setData] = useState([])

    const onReload = () => {
        findAllTotalAction()
    }

    useEffect(() => {
        onReload()
    }, [])

    useEffect(() => {

        setData(dashboard)

        console.log("ini data", data)
    }, [dashboard])

    useEffect(onReload, [findAllTotalAction])

    return (
        <Containers error={error}>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark" style={{fontSize:"1.5vw"}}>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container-fluid">
                        <Card style={{padding:"2vw"}}>
                            <CardDeck>
                                <Card>
                                    <Card.Header style={{height:"3vw"}}>
                                        <p className="text-success text-xl " >
                                            <i className="ion ion-ios-people-outline"/>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"1.3vw"}}>Total Customer</Card.Title>

                                        <Card.Text  style={{fontSize:"2.5vw", height:"7vw"}}>
                                            {data?.totalCustomer}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">  </small>
                                    </Card.Footer>
                                </Card>
                                <Card >
                                    <Card.Header style={{height:"3vw"}}>
                                        <p className="text-warning text-xl">
                                            <i className="ion ion-ios-cart-outline"/>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"1.3vw"}}>Total Transaction</Card.Title>

                                        <Card.Text  style={{fontSize:"2.5vw", height:"7vw"}}>
                                            {data?.totalTransaction}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">  </small>
                                    </Card.Footer>
                                </Card>
                                <Card >
                                    <Card.Header style={{height:"3vw"}}>
                                        <p className="text-danger text-xl">
                                            <i className="ion ion-ios-list-outline"/>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"1.3vw"}}>Total Approved</Card.Title>
                                        <Card.Text  style={{fontSize:"2.5vw", height:"7vw"}}>
                                            {data?.totalApproved}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">  </small>
                                    </Card.Footer>
                                </Card>
                                <Card >
                                    <Card.Header style={{height:"3vw"}}>
                                        <p className="text-success text-xl">
                                            <i className="ion ion-ios-people-outline"/>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"1.3vw"}}>Total Rejected</Card.Title>

                                        <Card.Text  style={{fontSize:"2.5vw", height:"7vw"}}>
                                            {data?.totalRejected}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">  </small>
                                    </Card.Footer>
                                </Card>

                            </CardDeck>
                        </Card>

                    </div>
                </div>
            </div>
        </Containers>

    );
}


const mapStateToProps = (state) => {
    return {
        error: state.findAllTotalReducer.error,
        dashboard: state.findAllTotalReducer.data
    }
}

const mapDispatchToProps = {
    findAllTotalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
