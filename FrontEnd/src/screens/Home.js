import React, { Component } from 'react';
import House from '../img/handshake.jpg'

import "../CSS/Home.css"
import Profile from '../components/Profile';
import HomeCard from '../components/HomeCard'
import info from '../components/generalinfo'

/*HomeList: [{home:'Home', price:200000}]*/
class Home extends Component {
    state = {


    }

    render() {
        let result = info.map(item => <HomeCard url={item.url} info={item.detail} />)
        return (
            <div className="HomeContainer">
                <img src = "https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_57.jpg"></img>

                <div className= "HomeContainer2">
                    <div className="lol">
                        {result}
                    </div>


                </div>




            </div>
        );
    }
}

export default Home;