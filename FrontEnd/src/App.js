import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Switch, Route} from 'react-router-dom'
import Home from '../src/screens/Home'

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>

    </div>
    </React.Fragment>
  );
}

export default App;
