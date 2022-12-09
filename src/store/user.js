import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    user: [],
  },
  getters: {
    getuser: (state) => state.user,
  },
  actions: {
    async registerUser({ commit }, body) {
      try {
        const response = await axios.post(
          "http://localhost:3001/location", body
        );
        commit("SET_USER", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
});