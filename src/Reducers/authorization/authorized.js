const key = !!localStorage.getItem('authorization');
export function authorized(state = key, action) {
    switch (action.type) {
        case 'AUTHORIZED':
            return action.authorized;
        default:
            return state;
    }
}