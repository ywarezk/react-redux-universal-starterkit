/**
 * entry point file for our tests
 *
 * Created October 14th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
