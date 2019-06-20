import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions'


const AgentInfo = (props) => {

const  handleHire = () => {
    console.log("Beginning the hiring process")
    alert(`${props.User.firstName} wants to hire you`)
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
            <button onClick={handleHire}><i class="fab fa-hire-a-helper"></i></button>
        </div>
     );
}
 
const mapStateToProps = (state) => {

  return{
    User:state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(AgentInfo);