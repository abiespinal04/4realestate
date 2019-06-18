import { combineReducers } from 'redux'
import AddAgentReducer from './AddAgentReducer'
// import AddCampusReducer from './AddCampusReducer'

export default combineReducers({
    AgentList: AddAgentReducer,
    // CampusesList: AddCampusReducer
})