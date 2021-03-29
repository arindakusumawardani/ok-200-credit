import React from "react";
import {faCheckDouble, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function Menu() {
  return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{background:"#e42256"}}>
        {/* Brand Logo */}
        <a className="brand-link">
          {/*<img*/}
          {/*  src="dist/img/AdminLTELogo.png"*/}
          {/*  alt="AdminLTE Logo"*/}
          {/*  className="brand-image img-circle elevation-3"*/}
          {/*  style={{ opacity: ".8" }}*/}
          {/*/>*/}
          <span className="brand-text font-weight-light">OK' 200</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/*<img*/}
              {/*  src="dist/img/user2-160x160.jpg"*/}
              {/*  className="img-circle elevation-2"*/}
              {/*  alt="User Image"*/}
              {/*/>*/}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {localStorage.getItem('username')}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            {localStorage.getItem("roles") == "MASTER" &&
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                <li className="nav-item has-treeview">
                    <Link to="/role" className="nav-link">
                        <i className="nav-icon fas fa-users"/>
                        <p>
                            Management Roles
                        </p>
                    </Link>
                </li>

              <li className="nav-item has-treeview">
                <Link to="/master" className="nav-link">
                  <i className="nav-icon fas fa-users"/>
                  <p>
                    Account User
                  </p>
                </Link>
              </li>
              {/*<li className="nav-item has-treeview">*/}
              {/*  <a href="/customer/form" className="nav-link">*/}
              {/*    <i className="nav-icon fas fa-user-check"/>*/}
              {/*    <p>*/}
              {/*      Form Customer*/}
              {/*    </p>*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="nav-item has-treeview">
                <a href="/need" className="nav-link">
                  <i className="nav-icon fas fa-list-alt"/>
                  <p>
                    Loan Purpose
                  </p>
                </a>
              </li>
              {/*<li className="nav-item has-treeview">*/}
              {/*  <a href="/transaction" className="nav-link">*/}
              {/*    <i className="nav-icon fas fa-wallet"/>*/}
              {/*    <p>*/}
              {/*      Transaction*/}
              {/*    </p>*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li className="nav-item has-treeview">*/}
              {/*  <a href="/report" className="nav-link">*/}
              {/*    <i className="nav-icon fas fa-check-double"/>*/}
              {/*    <p>*/}
              {/*      Report*/}
              {/*    </p>*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
            }
            {localStorage.getItem("roles") == "STAFF" &&
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
              {/*<li className="nav-item has-treeview">*/}
              {/*  <a href="/customer/form" className="nav-link">*/}
              {/*    <i className="nav-icon fas fa-user-check"/>*/}
              {/*    <p>*/}
              {/*      Form Customer*/}
              {/*    </p>*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="nav-item has-treeview">
                <a href="/customer/staff" className="nav-link">
                  <i className="nav-icon fas fa-list-alt"/>
                  <p>
                    Customer
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/approval/staff" className="nav-link">
                  <i className="nav-icon fas fa-wallet"/>
                  <p>
                    Transaction
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/report/staff" className="nav-link">
                  <i className="nav-icon fas fa-check-double"/>
                  <p>
                    Report
                  </p>
                </a>
              </li>
            </ul>
            }

            {localStorage.getItem("roles") == "SUPERVISOR" &&
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >

              <li className="nav-item has-treeview">
                <a href="/transaction" className="nav-link">
                  <i className="nav-icon fas fa-wallet"/>
                  <p>
                    Transaction
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/report" className="nav-link">
                  <i className="nav-icon fas fa-check-double"/>
                  <p>
                    Report
                  </p>
                </a>
              </li>
            </ul>
            }

          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
  );
}