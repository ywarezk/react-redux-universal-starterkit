/**
 * mash all the reducers together
 *
 * Created October 16th, 2016
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 * @author: ywarezk
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todo';

export default combineReducers({
    todoReducer,
    routerReducer,
});
