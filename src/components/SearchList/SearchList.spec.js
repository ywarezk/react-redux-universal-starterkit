/**
 * test file for the search list component
 *
 * Created October 18th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import sinon from 'sinon';
import { ajax } from 'rxjs/observable/dom/ajax';
import Rx from 'rxjs';
import nzCreateStore from '../../redux/store/store';
import SearchList from './SearchList';

describe('SearchList', function() {
    let _searchList;
    let _store;
    let _sandbox;

    beforeEach(() => {
        _sandbox = sinon.sandbox.create();
        _store = nzCreateStore();
        _searchList = mount(
            <Provider store={_store} >
                <SearchList />
            </Provider>
        );

    });

    afterEach(() => {
        _sandbox.restore();
    });

    it('the todos are changing based on the search', function(done) {
        this.timeout(3000);

        // mock the get
        _sandbox.stub(ajax, 'get', (url) => {
            return Rx.Observable.create((observer) => {
                observer.next({
                    response: [
                        {title: 'mock1'},
                        {title: 'mock2'},
                    ]
                });
            });
        });
        expect(_store.getState().todoReducer.todos).to.have.length(0);
        _searchList.find('input').node.value = 'test';
        _searchList.find('input').simulate('change');
        _store.subscribe(() => {
            expect(_store.getState().todoReducer.todos).to.have.length(2);
            done();
        });
    });

    it('should make sure on multiple type only one call is made', function(done){
        this.timeout(3000);
        let spy = _sandbox.spy();

        // mock the get
        _sandbox.stub(ajax, 'get', (url) => {
            spy();
            return Rx.Observable.create((observer) => {
                observer.next({
                    response: [
                        {title: 'mock1'},
                        {title: 'mock2'},
                    ]
                });
            });
        });

        _searchList.find('input').node.value = 'test';
        _searchList.find('input').simulate('change');
        _searchList.find('input').node.value = 'test1';
        _searchList.find('input').simulate('change');
        _searchList.find('input').node.value = 'test2';
        _searchList.find('input').simulate('change');
        setTimeout(() => {
            expect(spy.calledOnce).to.equal(true);
            done();
        }, 2100);
    });

})
