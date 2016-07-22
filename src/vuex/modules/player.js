import * as types from '../mutationTypes';

const state = {
  isPlaying: false,
  playTime: 0,
  songIndex: null,
  selectPlaylists: [],
};

const mutations = {
  [types.CHANGE_PLAY_TIME](state, time) {
    state.playTime = time;
  },
  [types.CHANGE_PLAYING_SONG](state, songIndex) {
    state.songIndex = songIndex;
  },
  [types.CHANGE_SELECT_PLAYLISTS](state, playlist) {
    const index = state.selectPlaylists.indexOf(playlist);

    if (index !== -1) {
      state.selectPlaylists.splice(index, 1);
    }
    state.selectPlaylists.push(playlist);
  },
  [types.TOGGLE_IS_PLAYING](state, isPlaying) {
    state.isPlaying = isPlaying;
  },
};

export default {
  state,
  mutations,
};
