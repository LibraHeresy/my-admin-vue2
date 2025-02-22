const store = {
  namespaced: true,
  state: {
    step: 0,
    transferInfo: null,
  },
  mutations: {
    setStep(state, data) {
      state.step = data;
    },
    setTransferInfo(state, data) {
      state.transferInfo = data;
    },
  },
  actions: {
    setStep({ commit }, data) {
      commit("setStep", data);
    },
  },
};

export default store;
