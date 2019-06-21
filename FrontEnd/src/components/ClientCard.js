import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/ClientCard.css";
import { connect } from "react-redux";

class ClientCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer grow">
        <Link
          to={{
            pathname: "/clientInfo",
            clientInfo: this.props.client
          }}
        >
          <img src={this.props.client.agent.imageURL} alt="Mountain" />
        </Link>
        <div>
        
          <h1>{this.props.client.agent.firstName}</h1>
          <h4>{this.props.client.agent.lastName}</h4>
          <p>{this.props.client.agent.createdAt}</p>
          {/* <button>
            <i class="fas fa-heart" />
          </button> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Client: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(ClientCard);
