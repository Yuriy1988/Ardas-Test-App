export const INITIAL_STATE = {};

export function setEntries (state, action) {
    const splitTasks = () => {
        let tasks = action.tasks,
            pages = {};

            for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
                pageNumbers.push(i);
              }
//             return task;

        //         return tasks.slice(0, tasksPerPage).map(task => {
//             return task;
//         });


    };
    
    return Object.assign({}, state, {
        'pages': action.tasks,
        'tasksPerPage': action.tasksPerPage
    });
}

// export const INITIAL_STATE = {};

// export function setEntries (state, tasks, tasksPerPage) {
//     function getTasks () {
//         return tasks.slice(0, tasksPerPage).map(task => {
//             return task;
//         });
//     }

//     function getCurrentPage () {
//         return tasks.slice(0, tasksPerPage).map(task => {
//             return task;
//         });
//     }

//     function countPages () {
//         return Math.ceil(tasks.length / tasksPerPage);
//     }

//     return Object.assign({}, state, {
//         'tasks': tasks,
//         'tasksPerPage': tasksPerPage,
//         // 'currentTasks': getTasks(),
//         // 'currentPage': getCurrentPage(),
//         'pages': countPages()
//     });
// }

// import { List, Map } from 'immutable';

// export const INITIAL_STATE = Map();

// export function setEntries (state, tasks) {
//     return state.set('tasks', List(tasks));
// }