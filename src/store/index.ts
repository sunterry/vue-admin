import Vue from 'vue';
import Vuex from 'vuex';
import routers from './modules/routers';
import releases from './modules/releases';
import ua from './modules/ua';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    routers,
    releases,
    ua,
  },
});