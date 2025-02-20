const routes = [
  {
    path: "/workbenches",
    name: "MyWorkbenches",
    meta: {
      title: "工作台",
      icon: "desktop",
    },
    component: () =>
      import(
        /* webpackChunkName: "exception-page" */ "@/views/Workbenches/MyWorkbenches.vue"
      ),
  },
];

export default routes;
