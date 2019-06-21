import React, { Component } from 'react';
import config from '../config/firebase'
import firebase from 'firebase';
import {connect} from 'react-redux'
import * as action from '../store/actions'
import {Link} from 'react-router-dom'
import '../CSS/Login.css'


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
        try{
        this.props.LoginUser(this.state)
        setTimeout(() => {
            console.log('  ')
        },2000)
        }
        catch{ console.log('')}
        
    }
/**<label>Username:</label>  <label>Password:</label>*/

    render() { 
        
        return ( 
            <div className = "logincontain">
            <div className = "bb">
                <h1>Login</h1>
                <div className = "logbox">
                <i class="fas fa-user"></i>
                <input placeholder='email' onChange={(event) => this.setState({email:event.target.value})}/>
                </div>
                <div className = "logbox">
                <i class="fas fa-lock"></i>
                <input placeholder='password' type = "password" onChange={(event) => this.setState({password:event.target.value})}/>
                </div>
                <Link to="/profile"state={this.props.Agent}>
                <button className = "logbtn" onClick={this.handleLoginUser}>Submit</button>
                </Link>
                <Link to='registerUser'>
                <button className = "logbtn" onClick={this.handleLoginUser}>Register</button>
                </Link>
            </div>
            </div>
         );
    }
}

export default connect(null,action)(LoginScreen);