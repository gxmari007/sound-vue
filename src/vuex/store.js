import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import * as types from './mutationTypes';
import auth from './modules/auth';
import playlists from './modules/playlists';
import player from './modules/player';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  playlist: null,
};

const mutations = {
  [types.SELECT_PLAYLIST](state, mutation) {
    state.playlist = mutation.playlist;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    auth,
    playlists,
    player,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

// hot replace
if (module.hot) {
  module.hot.accept([
    './modules/auth',
    './modules/playlists',
    './modules/player',
  ], () => {
    store.hotUpdate({
      modules: {
        auth: require('./modules/auth').default,
        playlists: require('./modules/playlists').default,
        player: require('./modules/player').default,
      },
    });
  });
}

export default store;
