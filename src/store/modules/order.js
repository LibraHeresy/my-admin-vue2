const store = {
  namespaced: true,
  state: {
    order: {
      orderNo: "20200801-0003",
      orderAmount: "300.00",
      orderStatus: "已支付",
      orderDate: "2020-08-01",
      orderType: "采购单",
      worker: "王五",
      orderPayment: "支付宝",
      desc: "采购单描述",
    },
  },
  mutations: {
    setOrder(state, data) {
      state.order = data;
    },
  },
  actions: {
    setOrder({ commit }, data) {
      commit("setOrder", data);
    },
  },
};

export default store;
