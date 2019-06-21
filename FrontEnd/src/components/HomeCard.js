import React from 'react'
import '../CSS/HomeCard.css'

let HomeCard = (props) =>{
    return(
        <div className = "container2">
        <div className = "card2">
            <img className = "homeimg" src = {props.url}/>
            <div class = "details">
                <h4> {props.title}</h4>
                <p>information : {props.info}</p>


            </div>


        </div>
        </div>
    )

}

export default HomeCard