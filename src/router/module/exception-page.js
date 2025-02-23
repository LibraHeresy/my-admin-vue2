const routes = [
  {
    path: "/exception-page",
    name: "exception-page",
    redirect: "/exception-page/not-found",
    meta: {
      title: "异常页",
      icon: "warning",
      i18n: "exceptionPage",
    },
    component: {
      render: (h) => h("router-view"),
    },
    children: [
      {
        path: "/exception-page/no-permission",
        name: "NoPermission",
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
        name: "NotFound",
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
        name: "ServerError",
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
