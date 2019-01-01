import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/home",
        "base": "/home",
        "component": require('../../layouts/home').default,
        "_title": "create",
        "_title_default": "create"
      },
      {
        "component": () => React.createElement(require('/Users/zhengqifeng/react/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "create",
        "_title_default": "create"
      }
    ],
    "_title": "create",
    "_title_default": "create"
  },
  {
    "component": () => React.createElement(require('/Users/zhengqifeng/react/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "create",
    "_title_default": "create"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
