import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../store/actions'

class RegisterUserScreen extends Component {
    state = { 
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        address:'',
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
                <input placeholder='address' onChange={(event) => this.setState({address:event.target.value})}/>
                <input placeholder='imageURL' onChange={(event) => this.setState({imageURL:event.target.value})}/>
                <button onClick={this.handleRegisterUser}>Register</button>
            </div>
         );
    }
}
 
export default connect(null,action)(RegisterUserScreen);