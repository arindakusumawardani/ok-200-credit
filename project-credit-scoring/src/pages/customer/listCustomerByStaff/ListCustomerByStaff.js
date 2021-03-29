import React, {useEffect} from 'react'
import {findAllCustomerAction} from '../../../actions/customerAction'
import {connect} from "react-redux"
import Containers from "../../../components/Containers/Container";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import TableScrollbar from 'react-table-scrollbar';
import Row from "./Row";
import Error from "../../Error";
import Footer from "../../../components/dashboard/Footer";
import {Spinner} from "reactstrap";

function CustomerListBySubmitter({
                          error,
                          isLoading,
                          customers,
                          findAllCustomerAction
                      }) {

    const onReload = () => {
        findAllCustomerAction();
    };

    useEffect(onReload, [findAllCustomerAction])

    return (

        <div>
            {
                localStorage.getItem("roles") == "STAFF" ?
                    <>
                <Containers error={error}>
                    <Header/>
                    <Menu/>
                    <div className="content-wrapper">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">List Customer</h1>
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
                                                {/*<h3 className="card-title">List Customer</h3>*/}
                                                <div className="card-tools">
                                                    {/*<a href="#" className="btn btn-tool btn-sm">*/}
                                                    {/*    <i className="fas fa-download"/>*/}
                                                    {/*</a>*/}
                                                    <a href="/customer/form" className="btn btn-tool btn-sm">
                                                        <i className="fas fa-plus-circle"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-body table-responsive p-0">

                                                <TableScrollbar rows={10}>
                                                    <table className="table table-striped table-valign-middle">
                                                        <thead style={{textAlign: "left", background:"#FCE051"}}>
                                                        <tr>
                                                            <th>Number</th>
                                                            <th>Customer Name</th>
                                                            <th>ID Card</th>
                                                            <th>Employee Type</th>
                                                            <th>Submitter</th>
                                                            <th>Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody style={{textAlign: "left"}}>
                                                        {
                                                            !isLoading ?
                                                                customers?.list?.map((e, i) => {

                                                                    return (
                                                                        <Row key={i} data={e}
                                                                                     number={(customers.page * customers.size) + 1 + i}/>
                                                                    )
                                                                })
                                                                :
                                                                <tr>
                                                                    <div>
                                                                        <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
                                                                    </div>
                                                                </tr>
                                                        }
                                                        </tbody>
                                                    </table>
                                                </TableScrollbar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </Containers>
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
        error: state.findAllCustomerBySubmitter.error,
        customers: state.findAllCustomerBySubmitter.data || [],
        isLoading: state.findAllCustomerBySubmitter.isLoading
    }
}

const mapDispatchToProps = {
    findAllCustomerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListBySubmitter)
