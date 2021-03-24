import React from "react";
import {useHistory} from "react-router";
import {faFolderPlus, faHome, faSignOutAlt, faUserPlus, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
          <a href="/master/home" className="nav-link">
            <FontAwesomeIcon icon={faHome}/>
          </a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {localStorage.getItem("roles") == "MASTER" &&
        <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/need">
                  <FontAwesomeIcon icon={faFolderPlus}/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <FontAwesomeIcon icon={faUserPlus}/>
                </a>
              </li>
        </ul>
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
