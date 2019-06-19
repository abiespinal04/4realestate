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
        // dispatch({type:LOGIN_USER, payload:users})
        axios.get(`http://localhost:3000/AgentList/${email}`)
        .then( res => {
            console.log("Logged in successfully", res.data)
            dispatch({type:LOGIN_USER, payload:res.data.agent[0].agent})
            
        })
        // console.log("Logged in successfully", res)
    })
    .catch(err => console.log(err))
    }
   
}

export const FindAgent =  (email,clients) => {
  const agentEmail = email.email
  
  return async dispatch => {
  const {data} = await axios.get(`http://localhost:3000/AgentList/${agentEmail}` )
  // AddClient()
  // data.agent[0].agent.clients = clients
  // console.log("New data fuck", data.agent[0].id)
  console.log("New data fuck", data.agent[0].agent.clients)
    if( clients !== clients){
    AddClient(data.agent[0], clients)
    } 
  }
  
}

export const AddClient = (agent, clients) => {
  const newAgent = {...agent};
  newAgent.clients = clients;
  console.log("Calling AddClient action",newAgent)
  return async dispatch => {
  // const {data} = await axios.post('http://localhost:3000/AgentList/addClient', newAgent)
  
  }
 
 
}

