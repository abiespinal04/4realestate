import React, { Component } from "react";
import "../CSS/Home.css";
import Profile from "../components/Profile";
import HomeList from "../components/HomeList";
import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";

class Home extends Component {
  state = {};

  render() {
    return <div className="HomeContainer">
        <h1>Home</h1>
    </div>

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
