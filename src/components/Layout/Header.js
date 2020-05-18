import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

class Header extends Component {

  logout() {
    this.props.logout();

    window.location.href = "/";
  }

  render() {

    const { validToken, user } = this.props.security;

    const userIsAuthenticated = (
      <div id="mobile-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-user-circle mr1" />
              {user.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard"
              onClick={this.logout.bind(this)}>
              Logout
            </Link>
          </li>

        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div id="mobile-nav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Main
            </Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-header menubar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Daily Management Tool
          </Link>
          {headerLinks}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  security: state.security
})

export default connect(mapStateToProps, { logout })(Header);
