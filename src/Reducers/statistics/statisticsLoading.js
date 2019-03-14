export function statisticsLoading(state = false, action) {
    switch (action.type) {
        case 'STATISTICS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}