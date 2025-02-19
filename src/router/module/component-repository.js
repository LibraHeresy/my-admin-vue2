import BasicLayout from "@/layout/BasicLayout.vue";

const routes = [
  {
    path: "/component-repository",
    redirect: "/home",
    meta: {
      title: "组件库",
    },
    component: BasicLayout,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () =>
          import(
            /* webpackChunkName: "component-repository" */ "@/views/HomeView.vue"
          ),
      },
    ],
  },
];

export default routes;
