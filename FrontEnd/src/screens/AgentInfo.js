import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions'


const AgentInfo = (props) => {

const  handleHire = () => {
    console.log("Beginning the hiring process",props.location.agentInfo.agent);
    console.log("Client,", props.User)
    const newClient = [...props.location.agentInfo.agent.clients]
    newClient.push(props.User)
    // alert(`${props.User.firstName} wants to hire you`)

  
    props.HiredUser(props.location.agentInfo.agent, newClient);
  }

  const  handleRenderHire = () => {
    if(props.User.type !== 'agent'){
      return (
        <button onClick={handleHire}><i class="fab fa-hire-a-helper"></i></button>
      )
    } else return null
  }

    return ( 
        <div>
            <img
              style={{ maxHeight: 500, maxWidth: 450, }}
              src={props.location.agentInfo.agent.imageURL}
              alt="Mountain"
            />
            <h1>{props.location.agentInfo.agent.firstName}</h1>
            <h2>{props.location.agentInfo.agent.lastName}</h2>
            <h5>Clients: {props.location.agentInfo.agent.clients.length}</h5>
            {handleRenderHire()}
        </div>
     );
}
 
const mapStateToProps = (state) => {

  return{
    User:state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(AgentInfo);