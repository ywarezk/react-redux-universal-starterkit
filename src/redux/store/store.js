/**
 * Redux store is created here
 *
 * Created October 13th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducers';


export default function nzCreateStore(history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [reduxRouterMiddleware, thunk];
    const finalCreateStore = compose(
        applyMiddleware(...middleware)
    )(createStore);
    if (typeof __CLIENT__ === 'undefined') {
        return finalCreateStore(
            reducer,
            window.__initialState
        );
    }
    return finalCreateStore(reducer);
}
