import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme";
import order from "./modules/order";
import step from "./modules/step";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    theme,
    order,
    step,
  },
});
