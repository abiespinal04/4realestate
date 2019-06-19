import React, { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../store/actions'

class AddClient extends Component {
  state = {
      client:{
    firstName: "",
    lastName: "",
    email: "",
    address: "",
      },
    clients:[]
  };

  shouldComponentUpdate(nextProps, nextState){
    return nextState.clients !== this.props.User
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.clients !== this.props.User)
    this.props.AddClient(this.state.clients)
  }

  handleAddClient = () =>{
      let newArray = [...this.state.clients]
      newArray.push(this.state.client)
      this.setState({clients:newArray})      
  }
    handleLog = () => {
        console.log("NEW CLIENTS", this.props.User)
    }
  componentDidMount() {
     this.setState({clients:this.props.User.clients})
     console.log("Componentdidmount", this.props.User.clients)
  }


  render() {
    return (
      <div>
           <p>AddClient</p>
          <input placeholder="firstName" onChange={(event) => {
              let newObj = {...this.state.client}
                newObj.firstName = event.target.value;
              this.setState({client:newObj})
              }}/>
          <input placeholder="lastName" onChange={(event) => 
          {
            let newObj = {...this.state.client}
              newObj.lastName = event.target.value;
            this.setState({client:newObj})
            }}/>
       
          <input placeholder="email" onChange={(event) =>
           {
            let newObj = {...this.state.client}
              newObj.email = event.target.value;
            this.setState({client:newObj})
            }}/>
        
          <input placeholder="address" onChange={(event) =>
           {
            let newObj = {...this.state.client}
              newObj.address = event.target.value;
            this.setState({client:newObj})
            }}/>
          
       
            <button onClick={this.handleAddClient}>Submit</button>
            <button onClick={this.handleLog}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return{
        User: state.SingleUserReducer
    }
}

export default connect(mapStateToProps,action)(AddClient);
