export function tasksLoading(bool) {
    return {
        type: 'TASKS_LOADING',
        isLoading: bool
    };
}