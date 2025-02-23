import i18n from "@/language/i18n";

const store = {
  namespaced: true,
  state: {
    theme: "dark",
    localLanguage: "zhCN",
  },
  mutations: {
    setTheme(state, data) {
      state.theme = data;
    },
    setLocalLanguage(state, data) {
      state.localLanguage = data;
      i18n.locale = data;
    },
  },
};

export default store;
