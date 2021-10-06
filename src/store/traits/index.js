import traits from "../../data/traits.js";

const state = {
  traits: [],
};

const mutations = {
  SET_MISSIONS(state, traits) {
    state.missions = traits;
  },
};
const actions = {
  initMissions: ({ commit }) => {
    commit("SET_MISSIONS", traits);
  },
};
const getters = {
  traits: (state) => {
    return state.traits;
  },
};

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
