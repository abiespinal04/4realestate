import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/AgentCard.css'
import {connect} from 'react-redux'

class AgentCard extends Component {
  state = {  }
  render() { 
   return ( 
      <div className="mainContainer">
    <Link
        to={{
          pathname: "/agentInfo",
            agentInfo: this.props.agent
        }}
      >
            <img
                style={{ maxHeight: 250, maxWidth: 200, }}
                src={this.props.agent.agent.imageURL}
                alt="Mountain"
              />
          </Link>
          <div >
          <h1>{this.props.agent.agent.firstName}</h1>
          <h4>{this.props.agent.agent.lastName}</h4>
          <p>{this.props.agent.createdAt}</p>
          <button><i class="fas fa-heart"></i></button>
         
        </div>
        </div>
  
       );
  }
}
const mapStateToProps = (state) => {
  return{
    Agent : state.SingleUserReducer
  }
}

 
export default connect(mapStateToProps,null)(AgentCard);

 
