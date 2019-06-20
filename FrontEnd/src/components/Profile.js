import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Profile extends Component {
    state = {  }

      handleAddButton = () => {
        console.log("Profile", this.props.Agent)
        
        if(this.props.Agent.type === 'agent'){
          return (
            <Link to='/addClient'><i class="fas fa-user-plus"></i></Link>
          )
        } else return null
      }
    render() { 
        return ( 
            <div style={{textAlign:'center', marginLeft:20, marginTop:15}}>
                 <img
                style={{ maxHeight: 250, maxWidth: 200, borderRadius:'100%'}}
                src={this.props.Agent.imageURL}
                alt="Mountain"
              />
              <h3>{this.props.Agent.firstName}</h3>
              <p>{this.props.Agent.lastName}</p>
              <div style={{display:'inline-block'}}>
              <Link ><p><i class="fas fa-edit"></i></p></Link>
              {this.handleAddButton()}
              </div>
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