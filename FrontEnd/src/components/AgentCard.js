import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/AgentCard.css'

const AgentCard = (props) => {
  return ( 
    <div className="mainContainer">
  <Link
      to={{
        pathname: "/agentInfo",
          agentInfo: props.agent
      }}
    >
          <img
              style={{ maxHeight: 250, maxWidth: 200, }}
              src={props.agent.agent.imageURL}
              alt="Mountain"
            />
        </Link>
        <div >
        <h1>{props.agent.agent.firstName}</h1>
        <h4>{props.agent.agent.lastName}</h4>
        <p>{props.agent.createdAt}</p>
      </div>
      </div>

     );
}
 
export default AgentCard;