import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/BasicLayout.js').default,
    "routes": [
      {
        "path": "/",
        "component": require('../../layouts/home.js').default,
        "_title": "create",
        "_title_default": "create",
        "routes": [{
          "path": "/home",
          "exact": true,
          "component": require('../Home/index.js').default,
        }]
      },
      {
        "component": () => React.createElement(require('D:/projectMy/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "create",
        "_title_default": "create"
      }
    ],
    "_title": "create",
    "_title_default": "create"
  },
  {
    "component": () => React.createElement(require('D:/projectMy/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "create",
    "_title_default": "create"
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
