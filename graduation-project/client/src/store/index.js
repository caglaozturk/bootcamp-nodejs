import { createStore } from 'vuex'

export default createStore({
  state: {
    setProductId: '',
    showProductModal: false
  },
  mutations: {
    statusModal(state, payload) {
      state.showProductModal = payload;
    },
    setProductId(state, payload) {
      state.setProductId = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
