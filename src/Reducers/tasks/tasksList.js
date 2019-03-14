export function tasksList(state = {}, action) {
    switch (action.type) {
        case 'TASKS_LIST':
            const tasks = action.issues.map(task => {
                return(
                    {...task,
                        isForm: false,
                        play: false,
                        pause: false,
                        stop: false
                    }
                )
            });
            return {
                ...state,
                tasks: tasks,
                totalCount: tasks.length
            };

        case 'TASKS_LIST_PLAY':
            const taskPLay = [...state.tasks].map(tasks=> {
                return(
                    {...tasks,
                        play: (tasks.id === action.id),
                        pause: tasks.pause || !!tasks.play,
                        isForm: false
                    }
                )
            });

            return({
                ...state,
                tasks: [...taskPLay]
            });

        case 'TASKS_LIST_PAUSE':
            const taskPause= [...state.tasks].map(tasks=> {
                return(
                    {...tasks,
                        play: (tasks.id === action.id) ? false : tasks.play,
                        pause: (tasks.id === action.id) ? true : tasks.pause,
                        isForm: false
                    }
                )
            });

            return({
                ...state,
                tasks: [...taskPause]
            });

        case 'TASKS_LIST_STOP':
            const stopTask = [...state.tasks].map(tasks=> {
                return(
                    {...tasks,
                        play: (tasks.id === action.id) ? false : tasks.play,
                        pause: (tasks.id === action.id) ? false : tasks.pause,
                        isForm: (tasks.id === action.id) ? true : tasks.isForm,
                    }
                )
            });

            return({
                ...state,
                tasks: [...stopTask]
            });
        default:
            return state;
    }
}