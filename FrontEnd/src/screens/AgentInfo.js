import React, { Component } from 'react';



const AgentInfo = (props) => {
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
        </div>
     );
}
 
export default AgentInfo;