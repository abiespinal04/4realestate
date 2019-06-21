import React, { Component } from 'react';
import "../CSS/Home.css"
import ProfileCard from '../components/Profile';
import HomeList from '../components/HomeList'
import {connect} from 'react-redux'
import Portfolio from '../components/Portfolio';


class Profile extends Component {
    state = { 
        HomeList: [{home:'Home', price:200000}],
        title:'',
        agent:{
        clients:[{
            firstName:'',
            lastName:''
        }
        ]
        },
        myAgent: ''
     }
     
     
     componentDidMount() {

        // localStorage.getItem('user') && this.setState({myAgent: JSON.parse( localStorage.getItem('user')) })
         console.log("Component did mount", this.props.Agent)
         if(this.props.Agent.type === 'agent'){
            this.setState({title:'Agent Porfolio'})
            } else if (this.props.Agent.type === 'client') {
                this.setState({title:'Client Porfolio'})
            }
     }

     shouldComponentUpdate(nextProps, nextState){
         const update = nextProps.Agent !== this.state.agent;
        console.log("shouldComponentUpdate",this.props.Agent, update)
        this.forceUpdate()
         return update
     }

     componentDidUpdate(prevProps, prevState) {
        //  localStorage.setItem('user', JSON.stringify(this.props.Agent))
        console.log("componentDidUpdate",this.props.Agent)
         if(prevState.agent !== this.props.Agent){
             this.setState({agent: JSON.parse( localStorage.getItem('user'))})
             if(this.props.Agent.type === 'agent'){
                this.setState({title:'Agent Profile', agent:this.props.Agent})
                } else if (this.props.Agent.type === 'client') {
                    this.setState({title:'Client Profile'})
                }
         }
     }
        handleTest = () => {

        //  JSON.parse(localStorage.getItem('user'))
          console.log("Storage value",  JSON.parse(localStorage.getItem('user')).email)
        }
     handleTitle = () => {
        return this.state.title
     }

    render() { 
        return ( 
            <div className="HomeContainer"> 
              <ProfileCard/>

              /*This is causing a bug */
                <Portfolio
                title={this.state.title}
                email={this.props.Agent.email}
                agent={this.props.Agent}
                clients={this.state.agent.clients}
                />
              
                <div>
                    <HomeList/>
                </div>
                <button onClick={this.handleTest}>Test</button>
                {/* {setTimeout( () =>{
                    this.forceUpdate()
                },2000)} */}
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {

    return{
      Agent : state.SingleUserReducer
    }
  }
export default connect(mapStateToProps,null)(Profile);