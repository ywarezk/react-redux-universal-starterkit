/**
 * Layout for the homepage
 *
 * Created October 10th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the homepage</h1>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}
