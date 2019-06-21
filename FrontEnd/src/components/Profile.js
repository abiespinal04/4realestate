import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/Profile.css";

class Profile extends Component {
  state = {};

  handleAddButton = () => {
    console.log("Profile", this.props.Agent);

    if (this.props.Agent.type === "agent") {
      return (
        <Link to="/addClient">
          <i class="fas fa-user-plus" />
          <p>Add Customer</p>
        </Link>
      );
    } else return null;
  };
  render() {
    return (
      <div className="profileContainer">
        <div className="pictureAndInfo">
          <img src={this.props.Agent.imageURL} alt="Mountain" />
          <h3>{this.props.Agent.firstName}</h3>
          <h3>{this.props.Agent.lastName}</h3>
          <div className="portfolio">
            {/* <Link to='editprofile'><p><i class="fas fa-edit"></i></p></Link> */}
            {this.handleAddButton()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Agent: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
