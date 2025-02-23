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
};

export default store;
