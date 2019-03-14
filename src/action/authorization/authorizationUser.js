export function authorizationUser(user) {
    return {
        type: 'AUTHORIZATION_USER',
        user
    };
}
