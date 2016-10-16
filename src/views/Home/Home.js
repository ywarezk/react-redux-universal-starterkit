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
import Helmet from 'react-helmet';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Homepage"
                />
                <h1>Welcome to the homepage</h1>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}
