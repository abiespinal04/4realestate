import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/AddClient.css";

class AddClient extends Component {
  state = {
    client: {
      firstName: "",
      lastName: "",
      email: "",
      imageURL: "http://bestvoyage.in/wp-content/uploads/profile.png",
      address: {
        street: "",
        city: "",
        state: ""
      },
      house: {
        total: "",
        tax_year: "",
        tax_amount: ""
      }
    },
    clients: []
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.clients !== this.props.User;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.clients !== this.props.User)
  //   this.props.FindAgent(this.props.User,this.state.clients)
  // }

  handleAddClient = () => {
    const { street, city, state } = this.state.client.address;
    let formatedStreet = street.replace(" ", "+");
    // axios
    //   .get(
    //     `https://api.estated.com/property/v3?token=HAS9uPCHoVzhpTHoCeC2dbUnQ7eyO9&address=${formatedStreet}&city=${city}&state=${state}`
    //   )
    //   .then(res => {
    //     let newHouse = {...this.state.client}
    //      newHouse.house.total =  JSON.stringify(res.data.properties[0].assessments[0].total);
    //      newHouse.house.tax_year=
    //       res.data.properties[0].assessments[0].tax_year;
    //       newHouse.house.tax_amount= res.data.properties[0].assessments[0].tax_amount;
    //       this.setState({client:newHouse})
    //   })
    //   .catch(err => console.log(err));

    let newHouse = { ...this.state.client };
    newHouse.house.total = 25000;
    newHouse.house.tax_year = 2018;

    newHouse.house.tax_amount = 7500;
    this.setState({ client: newHouse });

    let newArray = this.state.clients;
    newArray.push(this.state.client);
    this.setState({ clients: newArray });
    setTimeout(() => {
      this.props.FindAgent(this.props.User, this.state.clients);
    }, 1000);
  };
  handleLog = () => {
    console.log("NEW CLIENTS", this.state.client.address.street);
  };
  componentDidMount() {
    this.setState({ clients: this.props.User.clients });
    console.log("Componentdidmount", this.props.User.clients);
  }

  render() {
    return (
      <div className="fullPageContainer">
        <div className="container">
          <h1>Add Client Information</h1>
          <div className="row">
            <div className="col-25">
              <label>First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter first
          name..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.firstName = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter last
          name..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.lastName = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Email</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                placeholder="Enter Email..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.email = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Image URL</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="imgurl"
                placeholder="Provide URL to your image..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.imageURL = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Street</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="street"
                placeholder="Street..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.address.street = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>City</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="imgurl"
                placeholder="City..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.address.city = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>State</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="state"
                placeholder="State..."
                onChange={event => {
                  let newObj = { ...this.state.client };
                  newObj.address.state = event.target.value;
                  this.setState({ client: newObj });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="buttonContainer">
              <Link to="/profile">
                <button className="submitButton" onClick={this.handleAddClient}>
                  Submit
                </button>
              </Link>
            </div>
            {/* <button onClick={this.handleLog}>Test</button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    User: state.SingleUserReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(AddClient);
