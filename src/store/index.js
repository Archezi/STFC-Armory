import Vue from "vue";
import Vuex from "vuex";

import missionModule from "./missions/index.js";
// import traitModule from "./traits/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    missionModule,
    // traitModule,
  },
});
