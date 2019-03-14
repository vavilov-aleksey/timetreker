export function tasksLoading(state = false, action) {
    switch (action.type) {
        case 'TASKS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}