/**
 * Action creators for the todo list
 *
 * Created October 12th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import superagent from 'superagent';

export const ADD_TODO = 'ADD_TODO';
export const SET_TODO_LIST = 'SET_TODO_LIST';

/**
 * add todo to the state array of todos
 * @param {string} todo - the todo item to add
 * @returns {{type: string, payload: *}}
 */
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

/**
 * action creator to change the todos with new array
 * @param {Array<Task>} todos - array of todos
 * @returns {{type, payload: *}}
 */
export function setTodos(todos) {
    return {
        type: SET_TODO_LIST,
        payload: todos,
    };
}

/**
 * gets the full todo list tasks from the server
 */
export function getTodoList() {
    return (dispatch) => {
        superagent
            .get('https://nztodo.herokuapp.com/api/task/?format=json')
            .end((err, res) => {
                dispatch(setTodos(res.body));
            });
    };
}
