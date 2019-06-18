import React, { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../store/actions'

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  };

  handleAddClient = () =>{
      this.props.AddClient(this.state)
  }

  render() {
    return (
      <div>
           <p>AddClient</p>
          <input placeholder="firstName" onChange={(event) => this.setState({firstName:event.target.value})}/>
          <input placeholder="lastName" onChange={(event) => this.setState({lastName:event.target.value})}/>
          <input placeholder="email" onChange={(event) => this.setState({email:event.target.value})}/>
          <input placeholder="address" onChange={(event) => this.setState({address:event.target.value})}/>
            <button onClick={this.handleAddClient}>Submit</button>
      </div>
    );
  }
}

export default connect(null,action)(AddClient);
