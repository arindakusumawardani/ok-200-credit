import React from "react";
import {useHistory} from "react-router";
import {
  faCogs,
  faFolderPlus,
  faHome, faLock,
  faSignOutAlt,
  faUserCog,
  faUserPlus,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function Header() {

  const history = useHistory();

  const handleOnclick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('roles')
    localStorage.removeItem('username')
    // history.push('/')
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{background:"#ff8370"}}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faHome}/>
          </Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/*{localStorage.getItem("roles") == "MASTER" &&*/}
        {/*<ul className="navbar-nav ml-auto">*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="/need">*/}
        {/*          <FontAwesomeIcon icon={faFolderPlus}/>*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="/register">*/}
        {/*          <FontAwesomeIcon icon={faUserPlus}/>*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*</ul>*/}
        {/*}*/}
        {localStorage.getItem("roles") == "STAFF" &&
        <>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown">
              {/*<i className="far fa-bell" />*/}
              <FontAwesomeIcon icon={faCogs}/>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <FontAwesomeIcon icon={faUserCog}/> Setting Profile
                <span className="float-right text-muted text-sm"></span>
              </a>
              <div className="dropdown-divider" />
              <a href="/staff/password" className="dropdown-item">
                <FontAwesomeIcon icon={faLock} /> Change Password
                <span className="float-right text-muted text-sm"></span>
              </a>
            </div>
          </li>
        </>
        }
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={handleOnclick}
            href="/"
          >
            <FontAwesomeIcon icon={faSignOutAlt}/>
          </a>
        </li>
      </ul>
    </nav>
  );
}
