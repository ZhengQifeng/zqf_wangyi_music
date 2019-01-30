import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/BasicLayout').default,
    "routes": [
      {
        "path": "/my",
        "exact": true,
        "_title": "create",
        "_title_default": "create"
      },
      {
        "path": "/",
        "component": require('../../layouts/HomeLayout').default,
        "routes": [
          {
            "path": "/toplist/:id",
            "component": require('../Home/Toplist').default,
            "exact": true,
            "_title": "create",
            "_title_default": "create"
          },
          {
            "path": "/toplist",
            "component": require('../Home/Toplist').default,
            "exact": true,
            "_title": "create",
            "_title_default": "create"
          },
          {
            "path": "/",
            "component": require('../Home').default,
            "exact": true,
            "_title": "create",
            "_title_default": "create"
          },
          {
            "component": () => React.createElement(require('D:/projectMy/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "create",
            "_title_default": "create"
          }
        ],
        "_title": "create",
        "_title_default": "create"
      },
      {
        "component": () => React.createElement(require('D:/projectMy/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "create",
        "_title_default": "create"
      }
    ],
    "_title": "create",
    "_title_default": "create"
  },
  {
    "component": () => React.createElement(require('D:/projectMy/zqf_wangyi_music/create/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
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
