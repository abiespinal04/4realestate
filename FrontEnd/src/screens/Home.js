import React, { Component } from "react";
//import "../CSS/Home.css";
import Profile from "../components/Profile";
import HomeList from "../components/HomeList";
import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";
// import info from '../components/generalinfo';
// import HomeCard from '../components/HomeCard'


/*
 <div className= "HomeContainer2">
                    <div className="lol">
                        {result}
                    </div>
                       <div id = "titleholder">
                    <h3 id = "h2title">We're here to help</h3>
                </div>
              

                </div>
*/
class Home extends Component {
  state = {};

  
  render() {
    // let result = info.map(item => <HomeCard url={item.url} info={item.detail} title = {item.title}/>)
    
    return (
    <div className="HomeContainer3">
     
      {/* <div class = "homedetails" id = "left">
        <div class = "mydetails">
        <h1 className = "pi"> The only Place</h1>
        <h2 className = "pi">to get a 4 realestate
        </h2>
        </div>
      </div> */}
      

      <div class = "homedetails" id = "right">
        <div class = "mydetails">
        <h1 className = "pi"> The perfect place where</h1>
        <h2 className = "pi">Agents and Clients can connect</h2>
        </div>
      </div>

      
             

               
        
    </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    Agent: state.SingleUserReducer
  };
};
export default connect(
  mapStateToProps,
  null
)(Home);