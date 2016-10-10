/**
 * entry point file for webpack
 *
 * Created October 7th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';

ReactDom.render(<Router history={browserHistory}>{getRoutes()}</Router>, document.getElementById('nz-content'));
