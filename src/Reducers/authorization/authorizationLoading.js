export function authorizationLoading(state = false, action) {
    switch (action.type) {
        case 'AUTHORIZATION_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}