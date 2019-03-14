export function authorizationUser(state = {}, action) {
    switch (action.type) {
        case 'AUTHORIZATION_USER':
            return {
                ...state,
                ... action.user
            };
        default:
            return state;
    }
}