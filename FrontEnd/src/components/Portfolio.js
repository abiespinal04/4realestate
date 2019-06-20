import React, { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../store/actions'

class Portfolio extends Component {
  
  state = {
    client:{
  firstName: "",
  lastName: "",
  email: "",
  address: "",
    },
  clients:[]
};

shouldComponentUpdate(nextProps, nextState){
  console.log("Portfolio componentDidUpdate",nextState)
  return nextProps.clients !== this.state.clients
}

 componentDidUpdate(prevProps, prevState) {
  console.log("Portfolio componentDidUpdate",prevProps)
    if(this.state.clients !== prevState.clients)
    {this.setState({clients:this.props.User.client})}
  }

handleDelete = (client,index) =>{
  console.log("Portfolio handledelet", index)
    const newArray = this.props.User.clients.filter(c => c !== client)
    // delete newArray[index];
    this.setState({clients:newArray})
   
      
      this.props.DeleteClient(this.props.User,newArray)
   
 
          
}
  handleLog = () => {
      console.log("NEW CLIENTS", this.props.User)
  }
componentDidMount() {
  //  this.setState({clients:this.props.User.clients})
   console.log("Portfolio Componentdidmount", this.props.User.clients)
}

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.email}</p>
        <h4>Clients</h4>
        <div style={{textAlign:'center', backgroundColor:'red'}}>
         {this.props.agent.type === 'agent' ? 
        <p>
          {this.props.clients.map((client, index) => (
            
            client !==  null? 
            <div>
            <h4>{client.firstName}</h4>
            <h4>{client.lastName}</h4>
            <h4>{client.email}</h4>
            {console.log("OH well", client.address)}
            {client.address !== undefined ? <h4>{client.address.street} </h4>: null}
            {client.address !== undefined ? <h4>{client.address.city} </h4> : null}
            {client.address !== undefined ? <h4>{client.address.state} </h4>: null}
            {client.house !== undefined ? <h4>{client.house.total} </h4>: null}
            {client.house !== undefined ? <h4>{client.house.tax_year} </h4>: null}
            {client.house !== undefined ? <h4>{client.house.tax_amount} </h4>: null}
            {/* <h4>{client.address.city}</h4>
            <h4>{client.address.state}</h4> */}
            <button onClick={ () => this.handleDelete(client,index)}><i class="fas fa-trash-alt"></i></button>
            </div>
            : null
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

const mapStateToProps = (state) => {

  return{
      User: state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(Portfolio);
