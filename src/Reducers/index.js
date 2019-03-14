import  { combineReducers } from 'redux'
import authorization from "./authorization";
import tasks from "./tasks";
import statistics from './statistics'

export default combineReducers({
    authorization,
    tasks,
    statistics,
})