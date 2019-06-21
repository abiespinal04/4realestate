import firebase from "firebase";
import {
  LOAD_AGENTS,
  REGISTER_USER,
  LOGIN_USER,
  LOAD_CLIENTS,
  HIRED_USER
} from "./types";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../../utilities/API_URL.js";

//LOADS THE SCREEN WITH DATA FROM THE DATABASE
export const LoadAgents = agents => {
  console.log("Inside LoadStudent action", agents);
  return { type: LOAD_AGENTS, payload: agents };
};
export const LoadClients = clients => {
  console.log("Inside LoadStudent action", clients);
  return { type: LOAD_CLIENTS, payload: clients };
};

export const RegisterUser = agents => {
  console.log("Inside RegisterUser action:", agents);
  const { email, password } = agents;
  return async dispatch => {
    // const { data } = await Axios.delete(`${API_URL}students/${student.id}`);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Created user successfully", res);
        axios
          .post(`${API_URL}AgentList/addAgent`, agents)
          .then(() => {
            dispatch({ type: LOGIN_USER, payload: agents });
            dispatch({ type: REGISTER_USER, payload: agents });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    //
    // dispatch({ type: REGISTER_USER, payload: agents });
  };
};

export const LoginUser = user => {
  const { email, password } = user;
  return async dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // dispatch({type:LOGIN_USER, payload:users})
        axios.get(`${API_URL}AgentList/${email}`).then(res => {
          console.log("Logged in successfully", res.data);
          dispatch({ type: LOGIN_USER, payload: res.data.agent[0].agent });
        });
        // console.log("Logged in successfully", res)
      })
      .catch(err => console.log(err));
  };
};

export const DeleteClient = (agent, clients) => {
  console.log("YUURR", agent);

  const agentEmail = agent.email;
  const newAgent = { ...agent };
  newAgent.clients = clients;
  return dispatch => {
    
    axios
      .get(`${API_URL}agentList/${agentEmail}`)
      .then(res => {
        console.log("YUURR", res.data.agent[0]);
        console.log("AGENT", agent);

        agent = res.data.agent[0];
        agent.agent.clients = clients;

        axios
          .post(`${API_URL}agentList/addClient`, agent)
          .then(res => {
            dispatch({ type: LOGIN_USER, payload: agent.agent });
            console.log("Response", res);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
};

export const HiredUser = (agent, clients) => {
  const agentEmail = agent.email;
  const newAgent = { ...agent };
  newAgent.clients = { ...clients };

  // let firstResponse
  // let secondResponse = []
  return dispatch => {
    axios
      .get(`${API_URL}agentList/${agentEmail}`)
      .then(res => {
        console.log("YUURR", res.data.agent[0]);
        console.log("AGENT", agent);

        // res.data.agent[0].clients= clients;
        agent = res.data.agent[0];
        agent.agent.clients = clients;
        // console.log("RESPONSE",agent.agent.clients)

        axios
          .post(`${API_URL}agentList/addClient`, agent)
          .then(res => {
            // dispatch({ type: HIRED_USER, payload: agent.agent });
            console.log("Response", res);
          })
          .catch(err => console.log("FindAgent Error", err));
      })
      .catch(err => console.log("FindAgent Error", err));

    // console.log("New agent state", datas);
    // console.log(data.agent[0].agent);

    // data.agent[0].agent.clients = clients;
    // const newAgent = data.agent[0].agent;
    // const [firstResponse, secondResponse] = await Promise.all([
    //   axios.get(`http://localhost:3000/agentList/${agentEmail}`),
    //   axios.post("http://localhost:3000/AgentList/addClient", firstResponse.agent[0].agent)
    // ]);
  };
};

export const FindAgent = (agent, clients) => {
  const agentEmail = agent.email;
  const newAgent = { ...agent };
  newAgent.clients = { ...clients };

  // let firstResponse
  // let secondResponse = []
  return dispatch => {
    axios
      .get(`${API_URL}agentList/${agentEmail}`)
      .then(res => {
        console.log("YUURR", res.data.agent[0]);
        console.log("AGENT", agent);

        // res.data.agent[0].clients= clients;
        agent = res.data.agent[0];
        agent.agent.clients = clients;
        // console.log("RESPONSE",agent.agent.clients)

        axios
          .post(`${API_URL}agentList/addClient`, agent)
          .then(res => {
            dispatch({ type: LOGIN_USER, payload: agent.agent });
            console.log("Response", res);
          })
          .catch(err => console.log("FindAgent Error", err));
      })
      .catch(err => console.log("FindAgent Error", err));

    // console.log("New agent state", datas);
    // console.log(data.agent[0].agent);

    // data.agent[0].agent.clients = clients;
    // const newAgent = data.agent[0].agent;
    // const [firstResponse, secondResponse] = await Promise.all([
    //   axios.get(`http://localhost:3000/agentList/${agentEmail}`),
    //   axios.post("http://localhost:3000/AgentList/addClient", firstResponse.agent[0].agent)
    // ]);
  };
};

// window.globalAgent = {}
// export const FindAgent = (agent, clients) => {
//   const agentEmail = agent.email;
//   const newAgent = {...agent};
//   newAgent.clients = clients;
//   console.log("LOOK here for agent info", agent.clients)
//   return dispatch => {
//     axios.get(`http://localhost:3000/agentList/${agentEmail}`)
//       .then(res => {
//         globalAgent = res.data.agent[0].agent
//         console.log("LOOK agent is here", agent)
//         axios.post("http://localhost:3000/AgentList/addClient", globalAgent)
//         .then(res => {
//           dispatch({type:LOGIN_USER, payload:res.data.agent[0]})
//           console.log("MAKING CALL")
//         })
//         .catch(err => console.log(err))
//         console.log("New data fuck", res.data.agent[0])

//       })
//       .catch(err => console.log(err));
//     // AddClient()
//     // data.agent[0].agent.clients = clients
//     // console.log("New data fuck", data.agent[0].id)
//     // console.log("New data fuck", data.agent[0].agent.clients)
//     // console.log("New data fuck", clients)
//     //   if( clients === clients){
//     //   AddClient(data.agent[0], clients)
//     //   }
//   };
// };

export const AddClient = (agent, clients) => {
  const newAgent = { ...agent };
  newAgent.agent.clients = clients;
  console.log("Calling AddClient action", newAgent);

  axios
    .post(`${API_URL}agentList/addClient`, newAgent)
    .then(data => console.log("MAKING CALL"))
    .catch(err => console.log(err));
};
