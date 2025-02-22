const store = {
  namespaced: true,
  state: {
    theme: "light",
  },
  mutations: {
    setTheme(state, data) {
      state.theme = data;
    },
  },
  actions: {
    setTheme({ commit }, data) {
      commit("setTheme", data);
    },
  },
};

export default store;
