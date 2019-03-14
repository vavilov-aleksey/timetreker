import {authorizationLoading} from "./authorizationLoading";
import {authorizationUser} from "./authorizationUser";
import {authorizationError} from "./authorizationError";
import axios from "axios";
import {authorized} from "./authorized";
import {apiUrl} from '../../Constants/url'
import {apiKey} from '../../Constants/key'

export function authorization(authorization) {
    const username = authorization.username ? authorization.username : '';
    const password = authorization.password ? authorization.password : '';

    return dispatch => {

        switch (authorization.key) {
            case 'key':
                return axios.get(`${apiUrl}/users/current.json`, {
                    headers: apiKey
                })
                    .then(response => {
                        dispatch(authorizationLoading(false));

                        return response
                    })
                    .then(response => {
                        if (response.status === 200) {
                            const authorization = response.config.headers.Authorization;
                            localStorage.setItem('authorization', authorization);
                            dispatch(authorizationUser(response.data.user))
                        }
                    })
                    .catch(() => {
                        dispatch(authorized(false));
                        localStorage.removeItem('authorization')
                    });
            case 'login':

                return axios.get(`${apiUrl}/users/current.json`, {
                    auth: {
                        username: username,
                        password: password,
                    },
                })
                    .then(response => {
                        dispatch(authorizationLoading(false));
                        return response
                    })
                    .then(response => {
                        if (response.status === 200) {
                            const authorization = response.config.headers.Authorization;
                            localStorage.setItem('authorization', authorization);
                            dispatch(authorizationUser(response.data.user));
                            dispatch(authorized(true));
                        }
                    })
                    .catch(() => {
                        dispatch(authorizationError(true));
                        dispatch(authorized(false));
                    });
            default:
                return '';
        }
    }
}