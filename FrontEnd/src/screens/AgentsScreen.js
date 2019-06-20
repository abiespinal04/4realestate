import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utilities/API_URL";

class AgentsScreen extends Component {
  state = {
    agentList: []
  };
  async componentDidMount() {
    const { data } = await axios.get(`${API_URL}AgentList`);
    console.log("Inside agentScreen componentDidMount: ", data.agentList);
    this.setState({ agentList: data.agentList });
  }

  handleAgentRendering = () => {
    return this.state.agentList.map((agent, index) => (
      <div>
        {/* <h1>{console.log(agent.agent.clients[0].firstName)}</h1> */}
        <h1>{agent.agent.firstName}</h1>
        <h4>{agent.agent.lastName}</h4>
        <h6>Clients</h6>
        {agent.agent.clients.map(client => {
          return <li>{client.firstName}</li>;
        })}
      </div>
    ));
  };

  render() {
    return <div>{this.handleAgentRendering()}</div>;
  }
}

export default AgentsScreen;
