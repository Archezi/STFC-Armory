import missions from "../../data/missions";

const state = {
  missions: null,
};

const mutations = {
  SET_MISSIONS(state, missions) {
    state.missions = missions;
  },
};
const actions = {
  initMissions: ({ commit }) => {
    commit("SET_MISSIONS", missions);
  },
};
const getters = {
  missions: (state) => {
    return state.missions;
  },
};

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
