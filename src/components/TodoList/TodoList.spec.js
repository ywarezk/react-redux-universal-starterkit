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
import { ajax } from 'rxjs/observable/dom/ajax';
import Rx from 'rxjs';
import { addTodo } from '../../redux/actions/todo';
import nzCreateStore from '../../redux/store/store';

describe('TodoList', () => {
    let _todoListComponent;
    let _store;
    let _nock;
    let _sandbox;

    beforeEach(() => {
        _sandbox = sinon.sandbox.create();
        _store = nzCreateStore();
    });

    afterEach(() => {
        _sandbox.restore();
    });

    function _emptyAjaxGet(){
        _sandbox.stub(ajax, 'get', (url) => {
            return Rx.Observable.create((observer) => {
                observer.next({response: [

                ]});
            });
        });
    }

    function _mountComponent(){
        _todoListComponent = mount(
            <Provider store={_store}>
                <TodoList />
            </Provider>
        );
    }

    it('Should render an empty list', () => {
        _emptyAjaxGet();
        _mountComponent();
        expect(_todoListComponent.find('ul')).to.have.length(1);
        expect(_todoListComponent.find('li')).to.have.length(0);
    });

    it('should add an item to the list when a todo is added', () => {
        _emptyAjaxGet();
        _mountComponent();
        expect(_store.getState().todoReducer.todos).to.have.length(0);
        expect(_todoListComponent.find('li')).to.have.length(0);
        _store.dispatch(addTodo({title: 'test todo'}));
        expect(_store.getState().todoReducer.todos).to.have.length(1);
        expect(_todoListComponent.find('li')).to.have.length(1);
    });

    it('should call the server to grab the todos', function(done) {
        this.timeout(10000);
        expect(_store.getState().todoReducer.todos).to.have.length(0);
        _sandbox.stub(ajax, 'get', (url) => {
            debugger;
            return Rx.Observable.create((observer) => {
                observer.next({response: [
                    {title: 'test todo'}
                ]});
            });
        });
        _mountComponent();
        setTimeout(() => {
            expect(_store.getState().todoReducer.todos).to.have.length(1);
            done();
        });
    })
});
