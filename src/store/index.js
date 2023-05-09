import Vue from "vue";
import Vuex from "vuex";
import { apiLogin } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    login(state, payload) {
      const { token } = payload;
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { username, password } = payload;
      const { data } = await apiLogin({
        username,
        password,
      });
      const { token } = data.data;
      commit("login", { token });
    },
  },
  modules: {},
});