import Vue from 'vue';
import axios from "axios";

export default {
  state: {
    isLoad: false,
    sort: {
      column: "date",
      label: "Date"
    },
    page: 1,
    perPage: 4,
    search: "",
    from: 0,
    to: 0,
    total: 0,
    lastPage: 0,
    items: [],
    selectedItems: []
  },
  mutations: {
    setState(state, payload) {
      console.log(payload)
      state[payload.key] = payload.value
    },
    setDatatableValues(state, payload) {
      state.total = payload.data?.length;
      state.from = payload.from;
      state.to = payload.to;
      state.items = payload.data
      state.perPage = payload.per_page;
      state.selectedItems = [];
      state.lastPage = payload.last_page;
      state.isLoad = true;
    },
    resetConditions(state) {
      state.page = 1;
      state.perPage = 4;
      state.search = "";
      state.sort = {column: "date", label: "Date"};
    }
  },
  actions: {
    postProduct({ commit, dispatch }, payload) {
        let formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
          formData.append(key, value);
        });
        axios.post('http://localhost:3000/product/create', formData)
          .then(res => {
            commit('resetConditions')
            dispatch('getAllProducts');
            Vue.$toast.success(res.data.message);
          })
          .catch(err => {
            Vue.$toast.error(err.message);
          })
    },
    getAllProducts({ commit }, payload = '?sort=date&page=1&per_page=4&search=') {
        axios.get(`http://localhost:3000/product/fordatatable${payload}`)
          .then(res => {
            commit('setDatatableValues', res.data)
          })
          .catch(err => {
            console.log("err: ", err.message)
          })
    },
    deleteProduct({ state, commit, dispatch }) {
      axios.delete('http://localhost:3000/product/delete', { data: { id: state.selectedItems } })
        .then(res => {
          commit('resetConditions');
          dispatch('getAllProducts');
          Vue.$toast.success(res.data.message);
        })
        .catch(err => {
          Vue.$toast.error(err.message);
        })
    }
  }
}
