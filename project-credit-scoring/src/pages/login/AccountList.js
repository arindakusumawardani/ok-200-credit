import React, {useEffect} from "react";
import AccountRow from "./AccountRow";
import {findAllAccountAction, removeByIdAccountAction} from "../../actions/signupAction";
import {connect} from "react-redux";
import Containers from '../../components/Containers/Container'
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import Footer from "../../components/dashboard/Footer";
import SignIn from "./SignIn";
import swal from "sweetalert";


function AccountList({
                         error,
                         isLoading,
                         accounts,
                         findAllAccountAction,
                         dispatchRemoveById,
                         isRemoved
                     }) {

    const onReload = () => {
        findAllAccountAction();
    }

    const onDelete = (id) => {
        swal({
            title: "Are you sure to delete this data?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    dispatchRemoveById(id);
                    swal("Successful deleted", {
                        icon: "success"
                    });
                } else {
                    swal("Failed to delete")
                }
            });
    };

    useEffect(onReload, [findAllAccountAction])

    useEffect(() => {
        onReload()
    }, [findAllAccountAction])

    useEffect(() => {
        if(isRemoved) {
            onReload()
        }
    }, [isRemoved])


    return (
        <div>
            {
                localStorage.getItem("roles") == "MASTER" ?
                    <>
            <Containers error={error} >
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">List Account</h1>
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
                                            <a href="/register" className="btn btn-tool btn-sm">
                                                <i className="fas fa-user-plus"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-striped table-valign-middle">

                                        <thead>
                    <tr>
                        <th>Number</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Verification</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !isLoading ?
                            accounts?.list?.map((e,i) => {

                                return(
                                    <AccountRow onDeleted={() => onDelete(e.id)} key={i} data={e} number={(accounts.page * accounts.size) + 1 + i}/>
                                )
                            }) :
                            <tr>
                                <td colSpan="3"> Loading..</td>
                            </tr>
                    }
                    </tbody>
                                        </table>
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
                        <SignIn/>
                    </div>
            }

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        accounts: state.findAllAccountReducer.data || [],
        isLoading: state.findAllAccountReducer.isLoading,
        error: state.findAllAccountReducer.error || state.removeAccountByIdReducer.error,
        isRemoved: state.removeAccountByIdReducer
    }
}

const mapDispatchToProps = {
    findAllAccountAction,
    dispatchRemoveById: removeByIdAccountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList)
