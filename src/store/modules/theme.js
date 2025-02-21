const store = {
  namespaced: true,
  state: {
    theme: "light",
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    },
  },
};

export default store;
