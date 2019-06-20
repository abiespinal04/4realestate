import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {


    

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.email}</p>
        <h4>Clients</h4>
        <div style={{textAlign:'center', backgroundColor:'red'}}>
         {this.props.agent.type === 'agent' ? 
        <p>
          {this.props.clients.map(client => (
            <div>
            <h4>{client.firstName}</h4>
            <button><i class="fas fa-trash-alt"></i></button>
            </div>
            
          ))}
            </p>
             : <p>{this.props.clients.map(agent => (
                <div>
                <h4>{agent.firstName}</h4>
                </div>
             ))}</p>}   
            </div>
          <p>Clients:{this.props.clients.length}</p>
      
      </div>
    );
  }
}

export default Portfolio;
