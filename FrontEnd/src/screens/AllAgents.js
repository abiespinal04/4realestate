import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AgentCard from "../components/AgentCard";
import * as action from '../store/actions'
import Profile from "../components/Profile";

class AllAgents extends Component {
  state = {
    agentList: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/AgentList");
    console.log("Inside agentScreen componentDidMount: ", data.agentList);
    this.props.LoadAgents(data.agentList)
    console.log("Data coming from load student  reducer",this.props.AgentList)
    this.setState({ agentList:data.agentList,});

  }

  handleAgentRendering = () => {
    return this.state.agentList.map((agent, index) => (
        <AgentCard 
        agent={agent}
        index={index}
        /> 
    ));
  };

  render() {
    return (
    <div>
    {this.handleAgentRendering()}
    </div>);
  }
}

const mapStateToProps = (state) => {

  return{
    AgentList : state.AgentList,
    Agent : state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(AllAgents);
