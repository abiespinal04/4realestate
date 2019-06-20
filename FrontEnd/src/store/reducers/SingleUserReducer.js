import {LOGIN_USER} from '../actions/types'

const INITIAL_STATE  = {
    agent:{}
}

export default (state = INITIAL_STATE, action) => {
    console.log("SINGLEUSERREDUCER", action.payload)
    switch (action.type) {
       
        case LOGIN_USER: {return action.payload}

    default: {
        return state;
      }
    }
}