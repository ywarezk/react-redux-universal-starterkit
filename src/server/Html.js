/**
 * Component to create the index file
 *
 * Created October 9th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Html extends React.Component{
    static propTypes = {
        component: React.PropTypes.string,
        store: React.PropTypes.object,
        assets: React.PropTypes.object,
    }

    render() {
        const {component, assets} = this.props;
        const head = Helmet.rewind();
        return (
            <html lang="en-us">
                <head>
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                </head>
                <body>
                    <script dangerouslySetInnerHTML={{__html: `window.__initialState=${serialize(store.getState())};`}} charSet="UTF-8"/>
                    <div id="nz-content" dangerouslySetInnerHTML={{__html: component}}>
                    </div>
                    <script src={assets.javascript.main} charSet="UTF-8"/>
                </body>
            </html>
        )
    }
}
