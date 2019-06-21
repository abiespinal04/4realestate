import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions";

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
        <h1>{this.props.title}</h1>
        <p>{this.props.email}</p>
        <h4>Clients</h4>
        <div style={{ textAlign: "center", backgroundColor: "red" }}>
          {this.props.agent.type === "agent" ? (
            <div>
              {this.props.clients.map((client, index) =>
                client !== null ? (
                  <div>
                    <img src={client.imageURL} alt="pic" />
                    <h4>{client.firstName}</h4>
                    <h4>{client.lastName}</h4>
                    <h4>{client.email}</h4>

                    {client.address !== undefined ? (
                      <h4>{client.address.street} </h4>
                    ) : null}
                    {client.address !== undefined ? (
                      <h4>{client.address.city} </h4>
                    ) : null}
                    {client.address !== undefined ? (
                      <h4>{client.address.state} </h4>
                    ) : null}
                    {client.house !== undefined ? (
                      <h4>Total: {client.house.total} </h4>
                    ) : (
                      <p>not found</p>
                    )}
                    {client.house !== undefined ? (
                      <h4>Tax year: {client.house.tax_year} </h4>
                    ) : (
                      <p>not found</p>
                    )}
                    {client.house !== undefined ? (
                      <h4>Tax amount:{client.house.tax_amount} </h4>
                    ) : (
                      <p>not found</p>
                    )}
                    {/* <h4>{client.address.city}</h4>
            <h4>{client.address.state}</h4> */}
                    <button onClick={() => this.handleDelete(client, index)}>
                      <i class="fas fa-trash-alt" />
                    </button>
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
        <p>Clients:{this.props.clients.length}</p>
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
