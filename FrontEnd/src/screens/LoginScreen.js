import React, { Component } from 'react';
import config from '../config/firebase'
import firebase from 'firebase';
import {connect} from 'react-redux'
import * as action from '../store/actions'
import {Link} from 'react-router-dom'

class LoginScreen  extends Component {
    state = { 
        email:'',
        password:''

     }
    async componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp(config);
   
    }

    handleLoginUser = () => {
        this.props.LoginUser(this.state)
        
    }

    render() { 
        
        return ( 

            <div>
                <label>Username:</label>
                <input placeholder='email' onChange={(event) => this.setState({email:event.target.value})}/>
                <label>Password:</label>
                <input placeholder='password' onChange={(event) => this.setState({password:event.target.value})}/>
                <Link
            to="/home"
            state={this.props.Agent}
          >
                <button onClick={this.handleLoginUser}>Submit</button>
                </Link>
                <Link to='registerUser'>
                <button onClick={this.handleLoginUser}>Register</button>
                </Link>
            </div>
         );
    }
}

export default connect(null,action)(LoginScreen);