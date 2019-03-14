export function tasksList(issues) {
    return {
        type: 'TASKS_LIST',
        issues
    };
}

export function tasksListPlay(id) {
    return {
        type: 'TASKS_LIST_PLAY',
        id
    };
}

export function tasksListPause(id) {
    return {
        type: 'TASKS_LIST_PAUSE',
        id
    };
}

export function tasksListStop(id) {
    return {
        type: 'TASKS_LIST_STOP',
        id
    };
}