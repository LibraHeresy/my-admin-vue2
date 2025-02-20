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
      {
        path: "/example-page/success-page",
        name: "SuccessPage",
        meta: {
          title: "成功页",
        },
        component: () => import("@/views/ExamplePage/SuccessPage.vue"),
      },
      {
        path: "/example-page/step-form-page",
        name: "StepFormPage",
        meta: {
          title: "分布表单页",
        },
        component: () => import("@/views/ExamplePage/StepFormPage.vue"),
      },
      {
        path: "/example-page/advanced-form-page",
        name: "AdvancedFormPage",
        meta: {
          title: "高级表单页",
        },
        component: () => import("@/views/ExamplePage/AdvancedFormPage.vue"),
      },
    ],
  },
];

export default routes;
