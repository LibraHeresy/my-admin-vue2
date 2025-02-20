const routes = [
  {
    path: "/example-page",
    name: "example-page",
    redirect: "/example-page/list-page",
    meta: {
      title: "示例页",
      icon: "bulb",
    },
    component: {
      render: (h) => h("router-view"),
    },
    children: [
      {
        path: "/example-page/list-page",
        name: "ListPage",
        meta: {
          title: "列表页",
        },
        component: () => import("@/views/ExamplePage/ListPage.vue"),
      },
      {
        path: "/example-page/detail-page",
        name: "DetailPage",
        meta: {
          title: "详情页",
        },
        component: () => import("@/views/ExamplePage/DetailPage.vue"),
      },
    ],
  },
];

export default routes;
