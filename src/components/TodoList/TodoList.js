/**
 * Will display the list of todo items
 *
 * Created October 13th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({
        todos: state.todoReducer.todos,
    })
)
export default class TodoList extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array.isRequired,
    }

    render() {
        const { todos } = this.props;
        let counter = 0;
        return (
            <div>
                <ul>
                    {
                        todos.map((item) => {
                            counter += 1;
                            return (<li key={counter}>{item}</li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}
