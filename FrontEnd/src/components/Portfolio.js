import React, { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../store/actions'

class Portfolio extends Component {
  state = {};
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
  return nextState.clients !== this.props.User
}

// componentDidUpdate(prevProps, prevState) {
//   if(prevProps.clients !== this.props.User)
//   this.props.FindAgent(this.props.User,this.state.clients)
// }

handleDelete = () =>{

    let newArray = [...this.state.clients]
    newArray.push(this.state.client)
    this.setState({clients:newArray})
    setTimeout(()=> {
      
      this.props.DeleteClient(this.props.User,this.state.clients)
    },1000)
 
          
}
  handleLog = () => {
      console.log("NEW CLIENTS", this.props.User)
  }
componentDidMount() {
   this.setState({clients:this.props.User.clients})
   console.log("Componentdidmount", this.props.User.clients)
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
            <div>
            <h4>{client.firstName}</h4>
            <button onClick={ (index) => this.handleDelete(index)}><i class="fas fa-trash-alt"></i></button>
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

const mapStateToProps = (state) => {

  return{
      User: state.SingleUserReducer
  }
}

export default connect(mapStateToProps,action)(Portfolio);
