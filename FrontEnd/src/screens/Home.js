import React, { Component } from 'react';
import "../CSS/Home.css"


class Home extends Component {
    state = { 
        HomeList: [{home:'Home', price:200000}]
     }
     
    render() { 
        return ( 
            <div className="HomeContainer"> 
                <h1>
                   HOME
                </h1>
                <div>
                
                </div>
            </div>
         );
    }
}
 
export default Home;