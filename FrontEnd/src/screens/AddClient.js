import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions";
import axios from "axios";

class AddClient extends Component {
  state = {
    client: {
      firstName: "",
      lastName: "",
      email: "",
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

    let newHouse = {...this.state.client}
         newHouse.house.total = 333;
         newHouse.house.tax_year= 44
          
          newHouse.house.tax_amount= 555;
          this.setState({client:newHouse})


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
      <div>
        <p>AddClient</p>
        <input
          placeholder="firstName"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.firstName = event.target.value;
            this.setState({ client: newObj });
          }}
        />
        <input
          placeholder="lastName"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.lastName = event.target.value;
            this.setState({ client: newObj });
          }}
        />

        <input
          placeholder="email"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.email = event.target.value;
            this.setState({ client: newObj });
          }}
        />

        <input
          placeholder="street"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.address.street = event.target.value;
            this.setState({ client: newObj });
          }}
        />

        <input
          placeholder="city"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.address.city = event.target.value;
            this.setState({ client: newObj });
          }}
        />

        <input
          placeholder="state"
          onChange={event => {
            let newObj = { ...this.state.client };
            newObj.address.state = event.target.value;
            this.setState({ client: newObj });
          }}
        />

        <button onClick={this.handleAddClient}>Submit</button>
        <button onClick={this.handleLog}>Test</button>
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
