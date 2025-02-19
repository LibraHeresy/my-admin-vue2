import BasicLayout from "@/layout/BasicLayout.vue";

const routes = [
  {
    path: "/exception-page",
    name: "exception-page",
    redirect: "/exception-page/not-found",
    meta: {
      title: "异常页",
    },
    component: BasicLayout,
    children: [
      {
        path: "/exception-page/no-permission",
        name: "no-permission",
        meta: {
          title: "403",
        },
        component: () =>
          import(
            /* webpackChunkName: "exception-page" */ "@/views/ExceptionPage/NoPermission.vue"
          ),
      },
      {
        path: "/exception-page/not-found",
        name: "not-found",
        meta: {
          title: "404",
        },
        component: () =>
          import(
            /* webpackChunkName: "exception-page" */ "@/views/ExceptionPage/NotFound.vue"
          ),
      },
      {
        path: "/exception-page/server-error",
        name: "server-error",
        meta: {
          title: "500",
        },
        component: () =>
          import(
            /* webpackChunkName: "exception-page" */ "@/views/ExceptionPage/ServerError.vue"
          ),
      },
    ],
  },
];

export default routes;
