import { sql as tables } from "@/constant";
import {
  activites,
  categories,
  categoryName,
  categoryNameDescription,
  employees,
  customers,
} from "@/database";

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
        case tables[3].key:
          commit("UPDATE_TABLE", categoryName);
          break;
        case tables[4].key:
          commit("UPDATE_TABLE", categoryNameDescription);
          break;
        case tables[5].key:
          commit("UPDATE_TABLE", employees);
          break;
        case tables[6].key:
          commit("UPDATE_TABLE", customers);
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
