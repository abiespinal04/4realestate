import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AgentCard from "../components/AgentCard";
import * as action from "../store/actions";
import Profile from "../components/Profile";
import "../CSS/AllAgents.css";

class AllAgents extends Component {
  state = {
    agentList: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/AgentList");
    console.log("Inside agentScreen componentDidMount: ", data.agentList);
    this.props.LoadAgents(data.agentList);
    console.log("Data coming from load Agents reducer", this.props.AgentList);
    this.setState({ agentList: data.agentList });
  }

  handleAgentRendering = () => {
    return this.state.agentList.map((agent, index) => (
      <AgentCard agent={agent} index={index} key={index} />
    ));
  };

  render() {
    return (
      <div id="agentPage">
        <h1>All Agents</h1>
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
)(AllAgents);
