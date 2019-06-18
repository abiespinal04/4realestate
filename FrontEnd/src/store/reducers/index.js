import { combineReducers } from 'redux'
import AddAgentReducer from './AddAgentReducer'
import SingleUserReducer from './SingleUserReducer'

export default combineReducers({
    AgentList: AddAgentReducer,
    SingleUserReducer: SingleUserReducer
})