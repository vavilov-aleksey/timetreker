import {combineReducers} from 'redux';
import {authorizationLoading} from "./authorizationLoading";
import {authorizationError} from "./authorizationError";
import {authorizationUser} from "./authorizationUser";
import {authorized} from "./authorized";

export default combineReducers({
    authorized,
    authorizationUser,
    authorizationError,
    authorizationLoading,
})