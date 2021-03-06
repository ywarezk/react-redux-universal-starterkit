/**
 * Application routes will be defined here
 *
 * Created October 10th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Layouts from './views';

export default () => (
    <Route path="/" component={Layouts.App}>
        <IndexRoute component={Layouts.Home} />
        <Route path="about" component={Layouts.About} />
    </Route>
);

