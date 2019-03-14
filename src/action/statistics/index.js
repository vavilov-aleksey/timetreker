import axios from "axios";
import {statisticsLoading} from "./statisticsLoading";
import {statisticsMonth} from "./statisticsMonth";
import {statisticsWeek} from "./statisticsWeek";
import {statisticsDay} from "./statisticsDay";
import moment from "moment";

const date = moment().format('YYYY-MM-DD');
const dateReverse = moment().format('DD.MM.YYYY');

export function statistics() {
    return (dispatch) => {
        const apiUrl = 'nameCompany';
        const key = localStorage.getItem('authorization') === null ? false : {'Authorization': localStorage.getItem('authorization')};

        dispatch(statisticsLoading(true));

        const fTime = (day) => {
            return axios.get(`${apiUrl}/time_entries.json?user_id=me&=hours&spent_on=${day}&limit=100`, {
                headers: key
            })
                .then(response => {
                    dispatch(statisticsLoading(false));
                    return response
                })
                .then(response => {
                    if (response.status === 200) {
                        switch (day) {
                            case 'week':
                                dispatch(statisticsWeek(response.data.time_entries));
                                break;
                            case 'month':
                                dispatch(statisticsMonth(response.data.time_entries));
                                break;
                            default:
                                dispatch(statisticsDay(response.data.time_entries));
                        }
                    }
                })
        };

        fTime('week');
        fTime('month');
        fTime(date);
    }
}