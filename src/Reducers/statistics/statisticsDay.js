export function statisticsDay(state = '', action) {
    switch (action.type) {
        case 'STATISTICS_DAY':
            const tasks = action.time;
            const time = tasks.reduce((sum, current) => {
                return (sum + current.hours)
            }, 0);
            return {
                ...state,
                time: time.toFixed(2),
            };
        default:
            return state;
    }
}