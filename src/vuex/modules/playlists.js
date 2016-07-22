import Vue from 'vue';
import * as types from '../mutationTypes';

const state = {};

const mutations = {
  [types.REQUEST_SONGS](state, mutation) {
    if (state[mutation.playlist]) {
      state[mutation.playlist].isFetching = true;
      state[mutation.playlist].nextUrl = null;
    } else {
      Vue.set(state, mutation.playlist, {
        isFetching: true,
        items: [],
        futureUrl: null,
        nextUrl: null,
      });
    }
  },
  [types.RECEIVE_SONGS](state, mutation) {
    const playlist = state[mutation.playlist];
    playlist.isFetching = false;
    playlist.items = [...playlist.items, ...mutation.songs];
    playlist.futureUrl = mutation.futureUrl;
    playlist.nextUrl = mutation.nextUrl;
  },
};

export default {
  state,
  mutations,
};
