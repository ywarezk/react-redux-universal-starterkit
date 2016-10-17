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
import sinon from 'sinon';
import TodoList from './TodoList';
import superagent from 'superagent';
import { addTodo } from '../../redux/actions/todo';
import nzCreateStore from '../../redux/store/store';

describe('TodoList', () => {
    let _todoListComponent;
    let _store;
    let _nock;

    beforeEach(() => {
        _store = nzCreateStore();
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
        expect(_store.getState().todoReducer.todos).to.have.length(0);
        expect(_todoListComponent.find('li')).to.have.length(0);
        _store.dispatch(addTodo({title: 'test todo'}));
        expect(_store.getState().todoReducer.todos).to.have.length(1);
        expect(_todoListComponent.find('li')).to.have.length(1);
    });

    it('should call the server to grab the todos', () => {
        expect(_store.getState().todoReducer.todos).to.have.length(0);
        const mockResponse = {
            body: [{title: 'test todo'}]
        }
        sinon.stub(superagent.Request.prototype, 'end', () => {
            debugger;
            cb(null, mockResponse);
        });
        mount(
            <Provider store={_store}>
                <TodoList />
            </Provider>
        );
        expect(_store.getState().todoReducer.todos).to.have.length(1);
    })
});
