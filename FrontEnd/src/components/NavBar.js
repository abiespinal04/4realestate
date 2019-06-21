import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Logo from "../res/4R_LOGO.png";
import firebase from "firebase";

class NavBar extends Component {
  state = {};

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Signout sucessful");
          firebase
            .app()
            .delete()
            .then(function() {});
        },
        function(error) {
          // An error happened.
        }
      );
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/home">
          <img style={{ width: "auto", height: 50 }} src={Logo} />{" "}
          <span className="sr-only">(current)</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agents">
                Agents
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/clients">
                Clients
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
