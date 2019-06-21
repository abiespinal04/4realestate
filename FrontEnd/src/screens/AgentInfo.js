import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../CSS/AgentInfo.css'
import * as action from '../store/actions'


class AgentInfo extends Component{

    state = {
      agent:''
    }

    componentDidMount(){
      this.setState({agent:this.props.location.agentInfo.agent})
    }
    shouldComponentUpdate(nextProps, nextState) {
      return nextState.agent !== this.props.location.agentInfo.agent
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.agent === this.props.location.agentInfo.agent){
        this.setState({agent:this.props.location.agentInfo.agent})
      }
    }

  handleHire = () => {
    console.log("Beginning the hiring process",this.props.location.agentInfo.agent);
    console.log("Client,", this.props.User)
    const newClient = [...this.props.location.agentInfo.agent.clients]
    newClient.push(this.props.User)
    // alert(`${this.props.User.firstName} wants to hire you`)

   
    this.props.HiredUser(this.props.location.agentInfo.agent, newClient);
  }

  handleRenderHire = () => {
    if(this.props.User.type !== 'agent' && this.props.User.type !== this.props.location.agentInfo.agent.type){
      return (
        <button onClick={this.handleHire}><i class="fab fa-hire-a-helper"></i></button>
      )
    } else return null
  }

  render() {
    return ( 
      <div style={{width:'100%', backgroundColor:'#d3d3d3'}}>
        <div className="mainContainerInfo">
            <img
              style={{ maxHeight: 250, maxWidth: 450, }}
              src={this.props.location.agentInfo.agent.imageURL}
              alt="Mountain"
            />
            <h1 style={{color:'black'}}>{this.props.location.agentInfo.agent.firstName}</h1>
            <h2>{this.props.location.agentInfo.agent.lastName}</h2>
            <h5>Clients: {this.props.location.agentInfo.agent.clients.length}</h5>
            {this.handleRenderHire()}
        </div>
        </div>
     );
    }
}
 
const mapStateToProps = (state) => {

  return{
    User:state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(AgentInfo);