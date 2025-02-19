const routes = [
  {
    path: "/component-repository",
    name: "component-repository",
    redirect: "/workbenches",
    meta: {
      title: "组件库",
    },
    component: {
      render: (h) => h("router-view"),
    },
    children: [],
  },
];

export default routes;
