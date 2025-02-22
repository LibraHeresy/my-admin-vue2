import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antdv from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
Vue.use(Antdv);

import "./mock/mock";

import "@wangeditor/editor/dist/css/style.css";

Vue.config.productionTip = false;

import "less";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
