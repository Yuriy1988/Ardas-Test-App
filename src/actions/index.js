const SET_TASKS = 'SET_TASKS';
const NEXT_PAGE = 'NEXT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const OPEN_TASK = 'OPEN_TASK';

export function setTasks (tasks, tasksPerPage) {
    return {
        type: SET_TASKS, 
        tasks: tasks,
        tasksPerPage: tasksPerPage
    }
}