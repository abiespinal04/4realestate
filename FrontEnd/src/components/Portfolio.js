import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions";
import "../CSS/Portfolio.css";

class Portfolio extends Component {
  state = {
    client: {
      firstName: "",
      lastName: "",
      imageURL: "",
      email: "",
      address: ""
    },
    clients: []
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.clients !== this.state.clients;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.clients !== prevState.clients) {
      this.setState({ clients: this.props.User.client });
    }
  }

  handleDelete = (client, index) => {
    const newArray = this.props.User.clients.filter(c => c !== client);
    // delete newArray[index];
    this.setState({ clients: newArray });

    this.props.DeleteClient(this.props.User, newArray);
  };
  handleLog = () => {
    console.log("NEW CLIENTS", this.props.User);
  };

  render() {
    return (
      <div>
        {/* <h1>{this.props.title}</h1> */}
        {/* <p>{this.props.email}</p> */}
        <h1 style={{ color: "gray" }}>
          You currently have: {this.props.clients.length} clients
        </h1>
        {this.props.agent.type === "agent" ? (
          <div className="clientList">
            {this.props.clients.map((client, index) =>
              client !== null ? (
                <div className="portfolioContainer">
                  <div className="innerContainer">
                    <div className="picAndButton">
                      <img
                        className="clientPicture"
                        src={client.imageURL}
                        alt="pic"
                      />
                      <button
                        className="profileButton"
                        onClick={() => this.handleDelete(client, index)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    </div>

                    <div className="theInfo">
                      <h3>{client.firstName}</h3>
                      <h3>{client.lastName}</h3>
                      <p>{client.email}</p>

                      {client.address !== undefined ? (
                        <h5>{client.address.street} </h5>
                      ) : null}
                      {client.address !== undefined ? (
                        <h5>{client.address.city} </h5>
                      ) : null}
                      {client.address !== undefined ? (
                        <h5>{client.address.state} </h5>
                      ) : null}
                      {client.house !== undefined ? (
                        <p>Total: {client.house.total} </p>
                      ) : (
                        <p>{null}</p>
                      )}
                      {client.house !== undefined ? (
                        <p>Tax year: {client.house.tax_year} </p>
                      ) : (
                        <p>{null}</p>
                      )}
                      {client.house !== undefined ? (
                        <p>Tax amount:{client.house.tax_amount} </p>
                      ) : (
                        <p>{null}</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <p>
            {this.props.clients.map(agent => (
              <div>
                <h4>{agent.firstName}</h4>
              </div>
            ))}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    User: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(Portfolio);
