import { LOAD_AGENTS,REGISTER_USER, LOGIN_USER } from "../actions/types";

const INITIAL_STATE = {
  agents: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_AGENTS: { console.log("INSIDE AGENT LOAD", action.payload)
      return { ...action.payload }}

    case REGISTER_USER : return { ...state, agents: action.payload }


    // case LOGIN_USER :  { 
    //   // window.location = '/home' 
    //   console.log("INSIDE LOGIN_USER CASE", action.payload)
    // return {
    //   ...state, agent: action.payload
    // }}
    // case ADD_STUDENT:
    //   const newStudent = action.payload
    //   // return {...state, newStudent};
    //   return { ...state, student: [...state.student, action.payload] }

    // case DELETE_STUDENT:
    //   console.log("Inside delete student reducer", action.payload.id)
    //   const newState = state.student.filter((student) => student.id !== action.payload.id)
    //   console.log(state)
    //   console.log("newState", newState)
    //   return { ...state, student: newState }

    // case EDIT_STUDENT: {
    //   const newArr = { ...state }

    //   const indexOf = state.student.findIndex(student => student.id === action.payload.id)
    //   console.log("Inside EDIT_STUDENT REDUCER", indexOf);
    //   newArr.student[indexOf].firstName = action.payload.firstName;
    //   newArr.student[indexOf].lastName = action.payload.lastName;
    //   newArr.student[indexOf].description = action.payload.description;
    //   newArr.student[indexOf].EMPID = action.payload.EMPID;

    //   return { state, ...newArr }
    // }

    default: {
      return state;
    }
  }
};