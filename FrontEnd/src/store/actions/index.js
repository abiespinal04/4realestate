import {
    LOAD_AGENTS 
  } from "./types";



//LOADS THE SCREEN WITH DATA FROM THE DATABASE
export const LoadAgents = agents => {
    console.log("Inside LoadStudent action", agents);
    return { type: LOAD_AGENTS, payload: agents };
  };
  