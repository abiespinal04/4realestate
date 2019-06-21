import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AgentCard from "../components/AgentCard";
import * as action from "../store/actions";
import Profile from "../components/Profile";
import { API_URL } from "../utilities/API_URL";
import "../CSS/AllAgents.css";

class AllClients extends Component {
  state = {
    agentList: []
  };

  async componentDidMount() {
    const { data } = await axios.get(`${API_URL}AgentList`);
    console.log("Inside agentScreen componentDidMount: ", data.agentList);
    this.props.LoadAgents(data.agentList);
    console.log("Data coming from load Agents reducer", data.agentList[0]);
    this.setState({ agentList: data.agentList });
  }

  handleAgentRendering = () => {
    const userList = this.state.agentList.filter(agent => agent.agent.type === 'client');
    console.log("SSSSSSS", userList)
    return userList.map((agent, index) => (
      <AgentCard agent={agent} index={index} key={index} />
    ));
  };

  render() {
    return (
      <div id="agentPage">
        <h1 style={{fontFamily:'Abril Fatface'}}>Clients</h1>
        <div>{this.handleAgentRendering()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AgentList: state.AgentList,
    Agent: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(AllClients);
