import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {findAllTotalAction} from "../../actions/totalAction";
import Containers from '../../components/Containers/Container'

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
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="card">

                                    <div className="card-body">

                                        {localStorage.getItem("master") == "false" &&
                                            <>
                                        <div
                                            className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                            <p className="text-success text-xl">
                                                <i className="ion ion-ios-people-outline"/>
                                            </p>
                                            <p className="d-flex flex-column text-right">
                                              <span className="font-weight-bold">
                                                  {data?.totalCustomer}
                                              </span>
                                                <span className="text-muted">Customer</span>
                                            </p>
                                        </div>
                                        {/* /.d-flex */}
                                        <div
                                            className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                            <p className="text-warning text-xl">
                                                <i className="ion ion-ios-cart-outline"/>
                                            </p>
                                            <p className="d-flex flex-column text-right">
                                                  <span className="font-weight-bold">
                                                    {/*<i className="ion ion-android-arrow-up text-warning"/>{" "}*/}
                                                      {data?.totalTransaction}
                                                  </span>
                                                <span className="text-muted">Transaction</span>
                                            </p>
                                        </div>
                                        {/* /.d-flex */}
                                        <div
                                            className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                            <p className="text-danger text-xl">
                                                <i className="ion ion-ios-list-outline"/>
                                            </p>
                                            <p className="d-flex flex-column text-right">
                                                  <span className="font-weight-bold">
                                                    {/*<i className="ion ion-android-arrow-down text-danger"/>{" "}*/}
                                                      {data?.totalApproved}
                                                  </span>
                                                <span className="text-muted">Approved</span>
                                            </p>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                            <p className="text-success text-xl">
                                                <i className="ion ion-ios-people-outline"/>
                                            </p>
                                            <p className="d-flex flex-column text-right">
                                                  <span className="font-weight-bold">
                                                    {/*<i className="ion ion-android-arrow-up text-success"/>{" "}*/}
                                                      {data?.totalRejected}
                                                  </span>
                                                <span className="text-muted">Rejected</span>
                                            </p>
                                        </div>
                                        </>
                                        }
                                        {localStorage.getItem("master") == "true" &&
                                        <div
                                            className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                            <p className="text-success text-xl">
                                                <i className="ion ion-ios-people-outline"/>
                                            </p>
                                            <p className="d-flex flex-column text-right">
                                                  <span className="font-weight-bold">
                                                    {/*<i className="ion ion-android-arrow-up text-success"/>{" "}*/}
                                                      {data?.totalUser}
                                                  </span>
                                                <span className="text-muted">Total User</span>
                                            </p>

                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* /.col-md-6 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
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
