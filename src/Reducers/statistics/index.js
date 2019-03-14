import {combineReducers} from 'redux';
import {statisticsLoading} from "./statisticsLoading";
import {statisticsMonth} from "./statisticsMonth";
import {statisticsDay} from "./statisticsDay";
import {statisticsWeek} from "./statisticsWeek";

export default combineReducers({
    statisticsLoading,
    statisticsDay,
    statisticsWeek,
    statisticsMonth
})