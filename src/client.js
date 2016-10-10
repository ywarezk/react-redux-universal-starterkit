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
import Router from './Router';

ReactDom.render(<Router />, document.getElementById('nz-content'));
