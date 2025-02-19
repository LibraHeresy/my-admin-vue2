const routes = [
  {
    path: "/workbenches",
    name: "workbenches",
    meta: {
      title: "工作台",
    },
    component: () =>
      import(
        /* webpackChunkName: "exception-page" */ "@/views/Workbenches/MyWorkbenches.vue"
      ),
  },
];

export default routes;
