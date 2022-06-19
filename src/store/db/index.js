import { sql as tables } from "@/constant";
import { activites, categories } from "@/database";

const state = {
  query: "",
  tables: [],
  columns: [],
  loading: true,
};

const getters = {};

const mutations = {
  SET_QUERY(state, payload) {
    state.query = payload;
  },
  UPDATE_TABLE(state, payload) {
    state.tables = payload;
  },
  UPDATE_COLUMNS(state, payload) {
    state.columns = payload;
  },
  LOADING(state, payload) {
    state.loading = payload;
  },
};

const actions = {
  fetchTables({ commit }) {
    commit("UPDATE_COLUMNS", tables);
  },
  executeQueries({ commit }, payload) {
    commit("LOADING", true);
    setTimeout(() => {
      switch (payload) {
        case tables[1].key:
          commit("UPDATE_TABLE", activites);
          break;
        case tables[2].key:
          commit("UPDATE_TABLE", categories);
          break;
        default:
          commit("UPDATE_TABLE", []);
      }
      commit("LOADING", false);
    }, 2000);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
