/**
 * Test file for the todo list component
 *
 * Created October 14th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux';
import todoReducer from '../../redux/reducers/todo';
import TodoList from './TodoList';
import { addTodo } from '../../redux/actions/todo';

describe('TodoList', () => {
    let _todoListComponent;
    let _store;

    beforeEach(() => {
        _store = createStore(todoReducer);
        _todoListComponent = mount(
            <Provider store={_store}>
                <TodoList />
            </Provider>
        );
    });

    it('Should render an empty list', () => {
        expect(_todoListComponent.find('ul')).to.have.length(1);
        expect(_todoListComponent.find('li')).to.have.length(0);
    });

    it('should add an item to the list when a todo is added', () => {
        expect(_store.getState().todos).to.have.length(0);
        expect(_todoListComponent.find('li')).to.have.length(0);
        _store.dispatch(addTodo('test todo'));
        expect(_store.getState().todos).to.have.length(1);
        expect(_todoListComponent.find('li')).to.have.length(1);
    });
});
