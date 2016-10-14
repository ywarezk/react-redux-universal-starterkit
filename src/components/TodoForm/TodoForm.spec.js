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
import store from '../../redux/store/store';
import TodoForm from './TodoForm';
import { expect } from 'chai';

describe('TodoForm', () => {

    let _todoFormComponent;

    /**
     * before each test create our component
     * and place it in variable
     */
    beforeEach(() => {
        _todoFormComponent = mount(
            <Provider store={store}>
                <TodoForm />
            </Provider>
        )
    });

    it("should render a form", () => {
        expect(_todoFormComponent.find('form')).to.have.length(1);
    });

});
