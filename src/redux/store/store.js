/**
 * Redux store is created here
 *
 * Created October 13th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers/reducers';


export default function nzCreateStore(history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    if (typeof __CLIENT__ === 'undefined') {
        return createStore(
            reducer,
            window.__initialState,
            applyMiddleware([reduxRouterMiddleware])
        );
    }
    return createStore(reducer);
}
