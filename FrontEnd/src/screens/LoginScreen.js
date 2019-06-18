import React, { Component } from 'react';
import config from '../config/firebase'
import firebase from 'firebase';

class LoginScreen  extends Component {
    state = {  }
    async componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp(config);
   
    }
    render() { 
        
        return ( 

            <div>
                <label>Username:</label>
                <input placeholder='username'/>
                <label>Password:</label>
                <input placeholder='password'/>
            </div>
         );
    }
}
 
export default LoginScreen;