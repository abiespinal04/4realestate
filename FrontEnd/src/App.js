import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Switch, Route} from 'react-router-dom'
import Home from '../src/screens/Home'
import AgentsScreen from './screens/AgentsScreen';
import AllAgents from './screens/AllAgents';
import AllClients from './screens/AllClients';
import AgentInfo from './screens/AgentInfo';
import LoginScreen from './screens/LoginScreen';
import {Provider} from 'react-redux'
import reducers from './store/reducers'
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

function App() {

  const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <React.Fragment>
    <Provider store= {store} >
    <NavBar/>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Switch>
       <Route path="/agentInfo" component={AgentInfo}></Route>
       <Route path="/clients" component={AllClients}></Route>
       <Route path="/agents" component={AllAgents}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={LoginScreen}></Route>
    </Switch>

    </div>
    </Provider>
    </React.Fragment>
  );
}

export default App;
