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
<<<<<<< HEAD
        {/* <h1>{this.props.title}</h1> */}
        {/* <p>{this.props.email}</p> */}
        <h1>Clients</h1>
        {this.props.agent.type === "agent" ? (
          <div className="clientList">
            {this.props.clients.map((client, index) =>
              client !== null ? (
                <div className="portfolioContainer">
                  <div className="innerContainer">
                    <img
                      className="clientPicture"
                      src={client.imageURL}
                      alt="pic"
                    />
=======
        <h1>{this.props.title}</h1>
        <p>{this.props.email}</p>
        {this.props.title === 'Agent Profile' ? <h4>Clients</h4>:  <h4>Agents</h4>}
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
>>>>>>> master

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
                        <p>not found</p>
                      )}
                      {client.house !== undefined ? (
                        <p>Tax year: {client.house.tax_year} </p>
                      ) : (
                        <p>not found</p>
                      )}
                      {client.house !== undefined ? (
                        <p>Tax amount:{client.house.tax_amount} </p>
                      ) : (
                        <p>not found</p>
                      )}
                    </div>
                  </div>
<<<<<<< HEAD
                  <button
                    className="profileButton"
                    onClick={() => this.handleDelete(client, index)}
                  >
                    <i className="fas fa-trash-alt" />
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
        <p>Clients:{this.props.clients.length}</p>
=======
                ) : null
              )}
            </div>
          ) : (
            <p>
              {this.props.clients.map(agent => (
                // <div>
                //   <h4>{agent.firstName}</h4>
                // </div>
                null
              ))}
            </p>
          )}
        </div>
        {/* <p>Clients:{this.props.clients.length}</p> */}
>>>>>>> master
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
