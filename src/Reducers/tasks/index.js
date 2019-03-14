import {combineReducers} from 'redux';
import {tasksList} from "./tasksList";
import {tasksLoading} from "./tasksLoading";

export default combineReducers({
    tasksList,
    tasksLoading
})