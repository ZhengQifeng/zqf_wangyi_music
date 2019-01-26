
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
              path: "/",
              component: "./Home"
            }
          ]
        }
      ]
    }
  ]
}
