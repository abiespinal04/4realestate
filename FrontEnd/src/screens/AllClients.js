import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ClientCard from "../components/ClientCard";
import * as action from "../store/actions";
import Profile from "../components/Profile";
import "../CSS/AllClients.css";

class AllClients extends Component {
  state = {
    clientList: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/clients");
    console.log("Inside Clientscreen componentDidMount: ", data.client);
    this.props.LoadClients(data.client);
    console.log("Data coming from load Client reducer", this.props.ClientList);
    this.setState({ clientList: data.client });
  }

  handleClientRendering = () => {
    return this.state.clientList.map((client, index) => (
      <ClientCard client={client} index={index} />
    ));
  };

  render() {
    return (
      <div id="clientPage">
        <h1>All Clients</h1>
        <div>{this.handleClientRendering()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ClientList: state.ClientList,
    Client: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(AllClients);
