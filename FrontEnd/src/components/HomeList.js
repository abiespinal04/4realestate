import React, { Component } from 'react';
import axios from 'axios'


class HomeList extends Component {
    state = { 
        house:[],
        address:''
     }

    async componentDidMount() {
    //    const {data} = await axios.get(
    //        'https://api.estated.com/property/v3?token=mKn0Lt76pEy2vStSH4J6Xnyc0pTISE&address=245+Hayward+St&city=Yonkers&state=NY')
    //     console.log("INSIDE COMPONENTDIMOUNT",data)
    //    this.setState({data})
    }


    handleRenderHouse = () => {

        return (
           this.state.house
        )
    }

    render() { 
        return ( 
            <div>
                
            </div>

         );
    }
}
 
export default HomeList;