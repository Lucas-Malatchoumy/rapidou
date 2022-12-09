import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    locations: [],
    users: []
  },
  getters: {
    getLocations: (state) => state.locations,
    getusers: (state) => state.users,
  },
  actions: {
    async fetchLocations({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:3001/location"
        );
        commit("SET_LOCATIONS", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async registerUser({ commit }, body) {
        const mode = body.telework == 1 ? 'teletravail' : 'presentiel'
        console.log(body);
        try {
          const response = await axios.put(
            `http://localhost:3001/location/${mode}`, body
          );
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },
      async fetchUser({ commit }, body) {
        try {
          const response = await axios.post(
            "http://localhost:3001/location/loc", body
          );
          commit("SET_USERS", response.data);
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },
  },
  mutations: {
    SET_LOCATIONS(state, locations) {
      state.locations = locations;
    },
    SET_USERS(state, users) {
        state.users = users;
      },
  },
});