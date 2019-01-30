import { resolve } from "path";

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'create',
      dll: false,
      hardSource: false,
    }],
  ],
  alias: {
    '@': resolve(__dirname, './src')
  },
  proxy: {
    '/music': {
      'target': 'http://47.112.22.46',
      'changeOrigin': true
    }
  },
  routes: [
    {
      path: "/",
      component: "../layouts/BasicLayout",
      routes: [
        {
          path: "/my"
        },
        {
          path: "/",
          component: "../layouts/HomeLayout",
          routes: [
            {
              path: "/toplist/:id",
              component: "./Home/Toplist"
            },
            {
              path: "/toplist",
              component: "./Home/Toplist"
            },
            {
              path: "/",
              component: "./Home"
            }
          ]
        }
      ]
    }
  ]
}
