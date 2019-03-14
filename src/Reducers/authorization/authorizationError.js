export function authorizationError(state = false, action) {
    switch (action.type) {
        case 'AUTHORIZATION_ERROR':
            return action.hasError;
        default:
            return state;
    }
}