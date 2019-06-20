import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../store/actions'

class RegisterUserScreen extends Component {
    state = { 
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        address: {
            street: "",
            city: "",
            state: ""
          },
        type:'',
        clients:[],
        imageURL:''

     }

     handleRegisterUser = () => {
        
        this.props.RegisterUser(this.state)
     }
    render() { 
        return ( 
            <div>
                <input placeholder='firstName' onChange={(event) => this.setState({firstName:event.target.value})}/>
                <input placeholder='lastName' onChange={(event) => this.setState({lastName:event.target.value})}/>
                <input placeholder='email' onChange={(event) => this.setState({email:event.target.value})}/>
                <input placeholder='password' onChange={(event) => this.setState({password:event.target.value})}/>
                <input placeholder='imageURL' onChange={(event) => this.setState({imageURL:event.target.value})}/>
                <input placeholder='type' onChange={(event) => this.setState({type:event.target.value})}/>
                <input
          placeholder="street"
          onChange={event => {
            let newObj = { ...this.state.address };
            newObj.street = event.target.value;
            this.setState({ address: newObj });
          }}
        />

        <input
          placeholder="city"
          onChange={event => {
            let newObj = { ...this.state.address };
            newObj.city = event.target.value;
            this.setState({ address: newObj });
          }}
        />

        <input
          placeholder="state"
          onChange={event => {
            let newObj = { ...this.state.address };
            newObj.state = event.target.value;
            this.setState({ address: newObj });
          }}
        />
                <button onClick={this.handleRegisterUser}>Register</button>
            </div>
         );
    }
}
 
export default connect(null,action)(RegisterUserScreen);