import React from 'react'
import '../CSS/HomeCard.css'

let HomeCard = (props) =>{
    return(
        <div class = "container2">
        <div class = "card">
            <img src = {props.url}/>
            <div class = "details">
                <p>information : {props.info}</p>


            </div>


        </div>
        </div>
    )

}

export default HomeCard