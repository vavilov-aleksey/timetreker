import axios from "axios";
import {tasksLoading} from "./tasksLoading";
import {tasksList} from "./tasksList";
import {apiKey} from '../../Constants/key'
import {apiUrl} from '../../Constants/url'


export function tasks() {
    return dispatch => {

        dispatch(tasksLoading(true));

        return axios.get(`${apiUrl}/issues.json?assigned_to_id=me&limit=100`, {
            headers: apiKey
        })
            .then(response => {
                dispatch(tasksLoading(false));
                return response
            })
            .then(response => {
                if (response.status === 200) {
                    dispatch(tasksList(response.data.issues))
                }
            })

    }
}