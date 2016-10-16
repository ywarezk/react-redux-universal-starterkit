/**
 * node js script that will start our server
 *
 * Created October 16th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

//root path
var path = require('path');
var rootDir = path.resolve(__dirname, '..');

//init global variables
global.__CLIENT__ = false;

// start the server
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools.config.js'))
    .development(process.env.NODE_ENV !== 'production')
    .server(rootDir, function(){
        require('../src/server/server.js');
    });
