export function authorizationLoading(bool) {
    return {
        type: 'AUTHORIZATION_LOADING',
        isLoading: bool
    };
}