/**
 * Action creators for the todo list
 *
 * Created October 12th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */


export const ADD_TODO = 'ADD_TODO';

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
