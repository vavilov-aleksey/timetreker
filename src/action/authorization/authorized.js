export function authorized(bool) {
    return {
        type: 'AUTHORIZED',
        authorized: bool,
    }
}