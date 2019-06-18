import firebase from "firebase";
import { LOAD_AGENTS, REGISTER_USER, LOGIN_USER } from "./types";
import axios from "axios";
import {Link,Redirect} from 'react-router-dom'

//LOADS THE SCREEN WITH DATA FROM THE DATABASE
export const LoadAgents = agents => {
  console.log("Inside LoadStudent action", agents);
  return { type: LOAD_AGENTS, payload: agents };
};

export const RegisterUser = agents => {
    console.log("Inside RegisterUser action:", agents)
  const { email, password } = agents;
  return async dispatch => {
    // const { data } = await Axios.delete(`${API_URL}students/${student.id}`);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Created user successfully", res);
        axios
          .post("http://localhost:3000/AgentList/addAgent", agents)
          .then( () => {
              dispatch({type:REGISTER_USER, payload:agents})
            dispatch({type:LOGIN_USER, payload:agents})
            })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    //
    // dispatch({ type: REGISTER_USER, payload: agents });
  };
};


export const LoginUser = user => {
    const {email, password} = user
    return async dispatch => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res => {
        window.location = '/home' 
        console.log("Logged in successfully")
        
    })
    .catch(err => console.log(err))
    }
}
