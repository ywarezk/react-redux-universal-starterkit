/**
 * Configuration file for karma
 *
 * Created October 14th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha'],
        files: [
            './tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ]
        },
        reporters: ['mocha'],
        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-mocha-reporter'),
            require('karma-chrome-launcher'),
            require('karma-sourcemap-loader')
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    },
                    { test: /\.json$/, loader: 'json-loader' },
                ]
            }
        },

        client: {
          chai: {
            includeStack: true
          }
        }
    });
}