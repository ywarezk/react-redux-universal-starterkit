/**
 * Redux store is created here
 *
 * Created October 13th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import { createStore } from 'redux';
import todoReducer from '../reducers/todo';

export default createStore(todoReducer);
