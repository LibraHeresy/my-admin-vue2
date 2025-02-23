import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 Antdv
import Antdv from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
Vue.use(Antdv);

// 引入 Mock
import "./mock/mock";

// 引入 wangeditor 富文本
import "@wangeditor/editor/dist/css/style.css";

// 引入 less 运行时
import "less";

// 引入 i18n
import i18n from "./language/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
