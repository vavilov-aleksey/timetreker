export function authorizationError(bool) {
    return {
        type: 'AUTHORIZATION_ERROR',
        hasError: bool
    }
}