/**
 * Test file for the TodoForm
 *
 * Created October 14th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import TodoForm from './TodoForm';
import todoReducer from '../../redux/reducers/todo';
import { createStore } from 'redux';
import { expect } from 'chai';

describe('TodoForm', () => {

    let _todoFormComponent;
    let _store;

    /**
     * before each test create our component
     * and place it in variable
     */
    beforeEach(() => {
        _store = createStore(todoReducer);
        _todoFormComponent = mount(
            <Provider store={_store}>
                <TodoForm />
            </Provider>
        )
    });

    it("should render a form", () => {
        expect(_todoFormComponent.find('form')).to.have.length(1);
    });

    it("should add a todo to the state", () => {
        expect(_store.getState().todos).to.have.length(0);
        const textInput = _todoFormComponent.find('#todo');
        textInput.node.value = 'test todo';
        _todoFormComponent.find('form')
            .simulate('submit');
        expect(_store.getState().todos).to.have.length(1);
        expect(_store.getState().todos[0]).to.equal('test todo');
    });

});
