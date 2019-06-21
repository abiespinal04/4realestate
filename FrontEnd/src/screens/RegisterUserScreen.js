import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions";
import "../CSS/RegisterUserScreen.css";
import { Link } from "react-router-dom";

class RegisterUserScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      street: "",
      city: "",
      state: ""
    },
    type: "",
    clients: [],
    imageURL: ""
  };

  handleRegisterUser = () => {
    this.props.RegisterUser(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="px-4 py-3">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="firstName"
            onChange={event => this.setState({ firstName: event.target.value })}
          />
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="lastName"
            onChange={event => this.setState({ lastName: event.target.value })}
          />

          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />

          <input
            className="form-control"
            aria-describedby="emailHelp"
            type="password"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="imageURL"
            onChange={event => this.setState({ imageURL: event.target.value })}
          />

          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                agent
              </a>
              <a className="dropdown-item" href="#">
                client
              </a>
            </div>
          </div> */}
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="type"
            onChange={event => this.setState({ type: event.target.value })}
          />
        </form>
        <div>
          <form className="px-4 py-3">
            <input
              placeholder="street"
              onChange={event => {
                let newObj = { ...this.state.address };
                newObj.street = event.target.value;
                this.setState({ address: newObj });
              }}
            />

            <input
              placeholder="city"
              onChange={event => {
                let newObj = { ...this.state.address };
                newObj.city = event.target.value;
                this.setState({ address: newObj });
              }}
            />

            <input
              placeholder="state"
              onChange={event => {
                let newObj = { ...this.state.address };
                newObj.state = event.target.value;
                this.setState({ address: newObj });
              }}
            />
          </form>
          <Link to="/profile">
            <button class="btn btn-primary" onClick={this.handleRegisterUser}>
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  action
)(RegisterUserScreen);
